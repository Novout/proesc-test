import Image from "next/image";
import ListSearch from "../components/ListSearch";

export default function Page() {
  return (
    <main className='flex flex-col h-screen overflow-y-auto px-5 md:px-60 pb-20'>
      <header className="py-15">
        <Image
          src="/proesc.png"
          width={200}
          height={200}
          alt=""
        />
      </header>
      <div className="flex flex-wrap mt-30 w-full justify-between items-center">
        <p className="w-80 text-xl">Desafio de Frontend Pleno feito com NextJS e PotterDB para a Proesc.com</p>
        <Image
          src="/potterdb.svg"
          width={300}
          height={300}
          alt=""
        />
      </div>
      <a href="#list" className="p-2 text-center rounded-lg bg-purple-500 text-white w-30 mt-5 hover:bg-green-400">Buscar</a>
      <ListSearch />
    </main>
  )
}