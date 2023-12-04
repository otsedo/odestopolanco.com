import Image from "next/image"


export default function SkillCard({ name, icon }: { name: string, icon: string }) {
  return (
    // <div className="flex flex-grow justify-center flex-col items-center text-center bg-slate-900 rounded-xl my-3 mx-3 hover:border-b-4 hover:border-primaryBlue hover:transition-all">
    <div className="flex flex-grow justify-center flex-col items-center text-center bg-slate-900 rounded-xl my-3 mx-3 hover:border-b-4 hover:border-blue-500 hover:shadow-xl transition-all">

      <p className="text-xl text-lightBlue mb-4 mt-4">{name}</p>
      <Image src={icon} alt={name} width={80} height={80} className="mb-8" />
    </div >
  )
}