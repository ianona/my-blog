import Iconify from './Iconify';

export default function ProjectCard({
  title,
  description,
  img,
  icons,
  activeIndex,
  index,
}: {
  title: string;
  description: string;
  img: string;
  icons: string[];
  activeIndex: number;
  index: number;
}): JSX.Element {
  const isCur = activeIndex === index;
  const isLeft = index === activeIndex - 1;
  const isRight = index === activeIndex + 1;
  const isAdj = isLeft || isRight;
  return (
    <div
      className={`${(index == 0 && isCur) ? "sm:ml-0 md:ml-20" : ""} ${isCur
        ? "scale-100 blur-none z-10"
        : isAdj
          ? "hidden md:block md:blur-sm opacity-100 scale-75 z-0"
          : "opacity-0 hidden md:block"
        } ${isLeft ? "-mr-48 ml-[17rem]" : isRight ? "-ml-48" : ""
        } transition ease-out duration-300 w-[250px] md:w-[320px] bg-white border border-gray-200 rounded-lg shadow flex-shrink-0 flex-grow`}
    >
      <img
        className="rounded-t-lg"
        src={img}
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <div className="flex flex-row gap-2 flex-wrap text-[2rem]">
          {icons.map((icon, i) => (
            <Iconify icon={icon} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
