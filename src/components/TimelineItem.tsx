export default function TimelineItem({
  children,
  title,
  time,
  stack,
}: {
  children: React.ReactNode;
  title: string;
  time: string;
  stack?: string[];
}) {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400">
        {time}
      </time>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mb-4 text-base font-normal text-gray-600 ">{children}</p>
      {stack ? (
        <p className="mb-4 text-base font-medium text-gray-500">
          🧑🏽‍💻 {stack.join(" . ")}
        </p>
      ) : null}
    </li>
  );
}
