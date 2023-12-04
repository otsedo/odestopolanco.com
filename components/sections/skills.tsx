import { skillsArray } from '@/lib/data'
import SkillCard from '../ui/SkillCard'

const skills = () => {
  return (
    <div className='mt-28 mb-28' id='skills'>
      <h3 className='text-center text-4xl m-4 font-medium'>Skills</h3>
      <div className='grid grid-cols-5 items-center justify-center mx-auto w-8/12'>

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