import { skillsArray } from '@/lib/data'
import SkillCard from '../ui/SkillCard'

const skills = () => {
  return (
    <div className='mt-16 mb-16 md:mt-28 md:mb-28' id='skills'>
      <h3 className='text-center text-4xl m-4 font-medium'>Skills</h3>
      <div className='grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-5 sm:grid-cols-3 items-center justify-center mx-auto  w-11/12 md:w-8/12'>

        {skillsArray.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
          />
        ))}
      </div >
    </div>
  )
}

export default skills