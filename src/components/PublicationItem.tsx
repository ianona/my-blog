export default function PublicationItem({
  title,
  url,
  isPaper = false,
}: {
  title: string;
  url?: string;
  isPaper?: boolean;
}): JSX.Element {
  return (
    <div
      onClick={
        url
          ? () => {
              window.open(url);
            }
          : undefined
      }
      className={`${
        url ? "hover:cursor-pointer" : ""
      } group flex flex-row gap-4 py-4 pl-4 items-center hover:bg-gray-100 border-b border-b-gray-200`}
    >
      {url ? (
        <h1 className="hidden opacity-0 group-hover:block group-hover:opacity-100 text-3xl">
          ↗️
        </h1>
      ) : null}
      <h1
        className={`${
          url
            ? "block opacity-100 group-hover:hidden group-hover:opacity-0"
            : ""
        } text-3xl`}
      >
        {isPaper ? "📄" : "🎖️"}
      </h1>
      <p className="text-xl">{title}</p>
    </div>
  );
}
