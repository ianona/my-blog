export default function Footer() {
  return (
    <footer className="container w-11/12 md:w-8/12 mx-auto text-center bottom-0 py-8">
      <hr className="text-gray-500 pt-8" />
      <h2 className="font-light">@ianona</h2>
      <h2 className="mt-8 font-thin">
        Made with Next.js, Tailwind, and Sanity
      </h2>
      <h2 className="font-thin">{new Date().getFullYear()}</h2>
    </footer>
  );
}
