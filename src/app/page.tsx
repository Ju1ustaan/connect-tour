import Particle from "@/components/Particle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden flex items-center justify-center h-screen relative bg-cover bg-[url('https://img2.akspic.ru/crops/3/5/5/2/22553/22553-gornyj_hrebet-gornyj_relef-gora-pejzazhi_gor-oblako-3840x2160.jpg')]">
      <div className="h-full w-full absolute top-0 left-0 bg-cover bg-[#903A24] bg-opacity-30 backdrop-blur-sm  "></div>
      <div className="h-full w-full absolute top-0 left-0 bg-cover z-2">
        <Particle />
      </div>

      <Image 
      src={'/assets/logo-black.png'}
      alt="logo connect"
      width={500}
      height={300}
      className="w-[200px] h-[60px] md:w-[500px] md:h-[150px] z-10 "
      />
      <Image
      src={'/assets/map-olive.png'}
      alt="logo connect"
      width={500}
      height={300}
      className="w-[200px] h-[100px] md:w-[300px] md:h-[200px] lg:w-[500px] lg:h-[300px] z-10 absolute top-5 right-0 -rotate-12"/>
    </main> 
    );
}
