export default function ProjectCard({
  title,
  description,
  stack,
  activeIndex,
  index,
}: {
  title: string;
  description: string;
  stack: string[];
  activeIndex: number;
  index: number;
}): JSX.Element {
  const isCur = activeIndex === index;
  const isLeft = index === activeIndex - 1;
  const isRight = index === activeIndex + 1;
  const isAdj = isLeft || isRight;
  return (
    <div
      className={`${(index == 0 && isCur) ? "ml-20" : ""} ${isCur
        ? "scale-100 blur-none z-10"
        : isAdj
          ? "blur-sm opacity-100 scale-75 z-0"
          : "opacity-0"
        } ${isLeft ? "-mr-48 ml-[17rem]" : isRight ? "-ml-48" : ""
        } transition ease-out duration-300 max-w-sm w-[22rem] bg-white border border-gray-200 rounded-lg shadow flex-shrink-0 flex-grow`}
    >
      <img
        className="rounded-t-lg"
        src="https://openasapp.com/wp-content/uploads/2022/10/Barcode-Scanner-App-Featured-Image.jpeg"
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <div className="flex flex-row gap-2">
          {stack.map((s, i) => (
            <div
              key={i}
              className="bg-gray-800 text-white rounded-xl px-3 py-1 text-xs"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
