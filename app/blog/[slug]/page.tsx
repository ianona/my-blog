import Image from "next/image";
import api from "@/utils/api";
import moment from "moment";
import { gql } from "graphql-request";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Badge from '@/src/components/Badge';
import Code from '@/src/components/Code';

const QUERY = gql`
  query findPost($slug: String) {
    allPost(where: { slug: { current: { eq: $slug } } }) {
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

async function getData(params: { slug: string }) {
  try {
    const slug = params.slug;
    const response: any = await api.request(QUERY, { slug });
    const { allPost } = response;
    return {
      post: allPost[0],
    };
  } catch (err) {
    console.error(err);
  }
  return { post: {} };
}

const components: Partial<PortableTextReactComponents> = {
  types: {
    code: (props) => {
      return <Code node={props.value}></Code>;
    },
  },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),
    // rendering a custom `filename` annotation
    filename: ({ value, children }) => {
      const filename = value.filename;
      return (
        <span className="codeBlock">
          <span className="filename">{filename}</span>
          <code>{children}</code>
        </span>
      );
    },
  },
};

export default async function Blog({ params }: { params: { slug: string } }) {
  const { post } = await getData(params);

  return (
    <main className="w-11/12 md:w-8/12 mx-auto">
      {post &&
        <>
          <section className="mb-1">
            <div className="py-4 mx-auto">
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                className="rounded-xl"
                layout="responsive"
                width="960"
                height="640"
              />
            </div>
            <h1 className="text-4xl">{post.title}</h1>
            <aside className="py-2 flex items-center flex-row">
              <span className="text-lg text-gray-400 font-light">
                {moment(post.publishedAt).format("MMM D, YYYY")}
              </span>
              <div className="ml-1 flex items-center flex-row">
                <Badge text="Tech" />
                <Badge text="Front-End" />
              </div>
            </aside>
          </section>
          <hr />
          <section className="py-4 text-lg prose">
            <PortableText value={post.bodyRaw} components={components} />
          </section>
        </>

      }

    </main>
  );
}
