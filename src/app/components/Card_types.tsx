'use client';

import Image from "next/image";
import { AppData } from "../datas";

import 'swiper/css';

type CardServiceProps = {
  data: AppData
};

export function Card_movile_1({ data }: CardServiceProps) {
  const { descripcion, name, image_one, } = data;
  return (
    <div className="bg-gray-300  shadow-md rounded-lg flex-grow overflow-hidden mb-5 md:mb-0 hover:border-blue-500 hover:border-2  cursor-pointer">
      <div className="flex justify-between items-center w-full mx-auto relative h-full">
        {/* Contenido de texto */}
        <div className="w-[45%] ml-10 sm:py-20 z-10">
          <h3 className="text-xl font-bold text-zinc-800   font-nunito-extra-bold mb-5">{name}</h3>
          <p className="text-gray-700  ">{descripcion}</p>
        </div>
        {/* Imagen a la derecha */}

        <Image
          src={image_one}
          alt={name}
          width={500}
          height={200}
          className="w-[50%] h-full object-cover rounded-lg absolute right-0 top-0 z-0"
        />

      </div>
    </div>
  );
}

export function Card_desktop({ data }: CardServiceProps) {
  const { descripcion, name, link, image_one } = data;
  return (
    <div className="w-full min-h-[300px] cursor-pointer  bg-white    hover:border-blue-500 hover:border-2 p-6 rounded-2xl shadow-[0px_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0px_8px_16px_rgba(0,0,0,0.2)] transition duration-300 flex items-center mb-5 md:mb-0 ">
      {/* Contenido de texto */}
      <div className="w-[50%] p-4">
        <h3 className="text-xl font-bold text-zinc-800   font-nunito-extra-bold">{name}</h3>
        <p className="mt-2 text-zinc-600  ">{descripcion}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-4 block"
          >
            Ver Proyecto
          </a>
        )}
      </div>
      {/* Imagen a la derecha */}
      <div className="w-[50%] h-full   flex justify-center items-center">
        <Image
          src={image_one}
          alt={name}
          width={500}
          height={300}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export function Card_desktop_2({ data }: CardServiceProps) {
  const { descripcion, name, link, image_one } = data;
  return (
    <div className="w-full min-h-[300px]  hover:border-blue-500 hover:border-2  cursor-pointer bg-blue-300   p-6 rounded-2xl shadow-[0px_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0px_8px_16px_rgba(0,0,0,0.2)] transition duration-300 flex items-center">

      <div className="w-[50%] p-4">
        <h3 className="text-xl font-bold text-zinc-800 font-nunito-extra-bold">{name}</h3>
        <p className="mt-2 text-zinc-600  ">{descripcion}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-4 block"
          >
            Ver Proyecto
          </a>
        )}
      </div>
      {/* Imagen a la derecha */}
      <div className="w-[50%]     overflow-hidden    ">




        <Image
          src={image_one}
          alt="imagen"
          className="max-w-[300px]  object-contain rounded-lg"
          width={400}
          height={300}
        />





      </div>
    </div>
  );
}