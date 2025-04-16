import Navbar from "./components/Navbar";
import Image from "next/image";
import My from "@public/images/my_hd.png"
import services from "./datas";
import Card_service from "./components/Card_services";
export default function Home() {
  return (
    <div className="w-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto flex">
        <div className="w-1/2 m-auto">
          <h1 className="robot-bold text-4xl  font-nunito-extra-bold  mb-6 text-gray-500">Bienvenido a mi Portafolio</h1>
          <h1 className="font-nunito-regular   text-gray-700">¡Hola! Soy Juan Camilo Saiz, un desarrollador Full Stack apasionado por crear aplicaciones web y móviles escalables con TypeScript. Mi stack incluye Next.js y Vue para interfaces dinámicas, y NestJS para backends robustos basados en microservicios. Especializado en patrones de diseño SOLID, construyo soluciones limpias y eficientes. </h1>
        </div>
        <div className="w-1/2">
          <Image
            src={My}
            alt="Logo Juan"
            className="w-full h-auto"
            priority     // Opcional: si quieres que la imagen se cargue con alta prioridad
          />
        </div>
      </div>
      <div className="w-screen   bg-white">
        <div className="container mx-auto ">
          <h1 className="w-full text-center font-nunito-regular text-xl pt-20 ">Mis habilidades</h1>
          <h2 className="text-2xl font-nunito-extra-bold w-full text-center text-gray-500 mb-10">Algunos de mis servicios incluyen.</h2>
          <div className="flex flex-wrap justify-between mx-10 md:mx-0 pb-20">
            {services.map((item, index) => (
              <Card_service
              
                key={index}
                titulo={item.titulo}
                descripcion={item.descripcion}
                imagen={item.imagen}
             
                
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-screen h-200">

      </div>
    </div>
  );
}
