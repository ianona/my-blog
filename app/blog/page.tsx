import Image from "next/image";
import api from "../../utils/api";
import moment from "moment";
import Link from "next/link";
import { gql } from "graphql-request";
import Container from "@/src/components/Container";

const QUERY = gql`
  {
    allPost {
      _id
      title
      slug {
        current
      }
      publishedAt
      bodyRaw
      mainImage {
        asset {
          url
        }
      }
    }
  }
`;

async function getData() {
  try {
    const response: any = await api.request(QUERY);
    return {
      props: {
        posts: response.allPost,
      },
    };
  } catch (err) {
    console.log(err);
  }
  return { props: { posts: [] } };
}

export default async function Blog() {
  const { props } = await getData();
  const { posts } = props;
  return (
    <Container title="Blog (WIP 🔨)">
      <div className="pb-4">
        {posts.length === 0 ? (
          <div className="text-center">
            <h1 className="text-2xl">No Posts Found</h1>
            <h2 className="text-xl font-light text-gray-500">
              hehe still working on it
            </h2>
          </div>
        ) : (
          <>
            {posts.map((post: any, i: number) => (
              <Link href={`/blog/${post.slug.current}`} key={i}>
                <div className="group flex mb-1 items-center hover:-translate-y-1 transition-transform hover:cursor-pointer">
                  <div className="w-4/12">
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      className="rounded-xl"
                      layout="responsive"
                      width="960"
                      height="640"
                    />
                  </div>
                  <article className="w-8/12 pl-4 sm:text-2xl">
                    <h3 className="group-hover:text-primary transition-colors font-normal">
                      {post.title}
                    </h3>
                    <p className="">{post.synopsis}</p>
                    <p className="text-gray-400 font-light">
                      {moment(post.publishedAt).format("MMM D, YYYY")}
                    </p>
                  </article>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
      {/* <p className="text-4xl font-thin">Hello</p>
      <p className="text-4xl font-extralight">Hello</p>
      <p className="text-4xl font-light">Hello</p>
      <p className="text-4xl font-normal">Hello</p>
      <p className="text-4xl font-medium">Hello</p>
      <p className="text-4xl font-semibold">Hello</p>
      <p className="text-4xl font-bold">Hello</p>
      <p className="text-4xl font-extrabold">Hello</p>
      <p className="text-4xl font-black">Hello</p> */}
    </Container>
  );
}
