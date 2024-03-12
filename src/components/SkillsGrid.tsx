import { useState } from 'react';
import Iconify from './Iconify';
import { Skill, skills } from './skills';

export default function SkillsGrid({ isMobile }: { isMobile: boolean }): JSX.Element {
  const [selected, setSelected] = useState<Skill | null>(null);
  return <div className="mt-4 lg:mt-2">
    {isMobile ?
      <div className='flex flex-col gap-4'>
        {selected ?
          <div className="rounded-lg p-2 border-2 border-primary-light">
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-2 text-[1.2rem]">
                <Iconify icon={selected.iconify} />
                <h2>{selected.name}</h2>
              </div>
              <p>
                {selected.description}
              </p>
            </div>
          </div>
          : null}
        <div className='grid grid-cols-5 gap-2 place-items-center grid-tem'>
          {skills.map((skill) => (
            <button className={`${selected?.name == skill.name ? "bg-primary-light scale-110" : "bg-gray-100"} w-full aspect-square text-[3rem] transition-all ease-in duration-200 rounded-md flex items-center justify-center`} key={skill.name}
              onClick={() => {
                setSelected((cur) => cur == skill ? null : skill)
              }}>
              <Iconify icon={skill.iconify} />
            </button>
          ))}
        </div>
      </div>
      : <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-4 items-center '>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`group rounded-lg p-3 bg-gray-100 hover:scale-[105%] h-[50px] hover:h-[120px] lg:hover:h-[110px] transition-all ease-in duration-200 hover:cursor-pointer opacity-60 hover:opacity-100 hover:bg-[${skill.color ?? "yellow"}]`}
          >
            <div className="flex flex-row gap-2 items-center">
              <Iconify icon={skill.iconify} />
              <h5>{skill.name}</h5>
            </div>
            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-linear">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    }
  </div>

}