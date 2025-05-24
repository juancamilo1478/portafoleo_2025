"use client";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { Footer } from "../components/Footer";
import My from "@public/images/my_hd.png";
import { servicios, myApps, AppData } from "../datas";
import Card_service from "../components/Card_services";
import { useState } from "react";
import { Card_desktop_2, Card_movile_1 } from "../components";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'; // ✅ Correcto
import 'swiper/css';

import { useTranslations } from "next-intl";
 

function chunkArray(array: AppData[], size: number): AppData[][] {
  const result: AppData[][] = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

 
export default function Home() {

  const t = useTranslations('HomePage');

  const [selectedProject, setSelectedProject] = useState<AppData | null>(null);
  const groupedApps = chunkArray(myApps, 3);
  const [selectIndex] = useState(0);  
  return (
    <div className="w-screen bg-black" >
      <Navbar />

      <div className="relative w-screen overflow-hidden">
        {/* Fondo con blur */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/22589.webp')",
            filter: "blur(6px)",
            transform: "scale(1.1)",
            zIndex: 0,
          }}
        ></div>

        {/* Gradiente encima del fondo */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(179deg,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 76%, rgba(0, 0, 0, 1) 100%)",
            zIndex: 3,
          }}
        ></div>

        {/* Imagen My absoluta en esquina inferior derecha */}
        <div className="absolute bottom-0 right-0 z-2 float ">
          <Image
            src={My}
            alt="Logo Juan"
            className="w-[600px] h-auto" // puedes ajustar el tamaño aquí
            priority
          />
        </div>

        {/* Contenido encima */}
        <div className="relative z-10 container mx-auto flex items-center h-[70svh]">
          <div className="w-1/2 m-auto">
            <h1 className="robot-bold text-4xl font-nunito-extra-bold mb-6 text-white">{t('title')}</h1>
            <h1 className="font-nunito-regular text-gray-100">{t('about')}</h1>
          </div>
        </div>
      </div>


      <div className="w-screen   bg-black">
        <div className="container mx-auto ">
          <h1 className="w-full text-center font-nunito-regular text-xl pt-20  text-gray-100">Mis habilidades</h1>
          <h2 className="text-2xl font-nunito-extra-bold w-full text-center text-gray-100 mb-10">Algunos de mis servicios incluyen.</h2>
          <div className="flex flex-wrap justify-between mx-10 md:mx-0 pb-20">
            {servicios.map((item, index) => (
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
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)} // Cerrar al hacer clic fuera
        >
          <div
            className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-xl relative"
            onClick={(e) => e.stopPropagation()} // Evita que el clic dentro cierre el modal
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-4 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">{selectedProject.name}</h2>
            <p className="text-gray-600 mb-4">{selectedProject.descripcion}</p>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 4000 }}
              loop={true}
              modules={[Autoplay]}
            >
              {selectedProject.image_app.map((src, index) => (
                <SwiperSlide>
                  <div className="  p-10 rounded-xl">
                    <Image
                      src={src}
                      alt={`Imagen ${index + 1}`}
                      className="w-full h-auto object-contain rounded-lg"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </SwiperSlide>
              ))}


            </Swiper>

            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-blue-500 hover:underline"
            >
              Ver Proyecto
            </a>
          </div>
        </div>
      )}

      <div className="w-screen lg:h-200 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-nunito-extra-bold w-full   text-gray-100 mb-10 pt-10">Proyectos.</h2>
        </div>

        <div className="container mx-auto ">
          {groupedApps[selectIndex]?.length === 3 && (
            <div className="md:flex gap-4 mb-10">
              {/* Primer elemento: ocupa todo el lado izquierdo */}
              <div className="flex-1 flex flex-col mb-5 md:mb-0">
                <div className="bg-green-100 shadow-md rounded-lg p-4 flex-grow cursor-pointer hover:border-blue-500 hover:border">
                  <div className="w-[90%] mx-auto pt-10">

                    <h3 className="text-xl font-bold mb-2 text-zinc-800">{groupedApps[selectIndex][0]?.name}</h3>
                    <p className="text-gray-700 mb-4">{groupedApps[selectIndex][0]?.descripcion}</p>
                    <Image
                      src={groupedApps[selectIndex][0]?.image_one}
                      alt={groupedApps[selectIndex][0]?.name}
                      width={800}
                      height={800}
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <div className="flex gap-6 justify-center items-center">
                      <a
                        href={groupedApps[selectIndex][0]?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="  hover:underline text-blue-300  px-3   rounded-xl font-bold"
                      >
                        Ver Proyecto
                      </a>
                      <div onClick={() => setSelectedProject(groupedApps[selectIndex][0])}
                        className="py-2 px-3 bg-blue-300 text-white font-bold rounded-xl cursor-pointer"  >
                        Detalles
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Segundo y tercer elemento: ocupan el lado derecho */}
              <div className="flex flex-col flex-1 gap-4 w-full">
                {groupedApps[selectIndex].slice(1).map((app, appIndex) => (
                  app.type === "mobile" ? (
                    <Card_movile_1 key={appIndex} data={app} />
                  ) : app.type === "desktop" ? (
                    <Card_desktop_2 key={appIndex} data={app} />
                  ) : null
                ))}
              </div>
            </div>
          )}


        </div>
      </div>
      <Footer />
    </div>
  );
}
 