'use client';

import Image from "next/image";

type CardServiceProps = {
    titulo: string;
    descripcion: string;
    imagen: string; // Ruta a la imagen (puede ser local o URL)
};

export default function Card_service({ descripcion, imagen, titulo }: CardServiceProps) {
    return (
        <div className="w-full min-h-[300px] md:w-[30%] mb-6 bg-white  cursor-pointer hover:border hover:border-gray-400 p-6 rounded-2xl shadow-[0px_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0px_8px_16px_rgba(0,0,0,0.2)] transition duration-300" style={
            {
                background: "linear-gradient(231deg,rgba(71, 70, 70, 1) 1%, rgba(0, 0, 0, 1) 100%)",
            }
        }>
            <div className="w-[90%] mx-auto my-auto h-full flex flex-col justify-center">
                <div className="relative w-full rounded-xl overflow-hidden  ">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-black mx-auto flex mb-6 shadow-md   shadow-gray-200">
                        <Image
                            src={imagen}
                            alt={titulo}
                            width={40}
                            height={40}
                            className="object-contain invert  "
                        />
                    </div>
                </div>
                <h3 className="text-xl font-bold  text-gray-100   w-full text-center">{titulo}</h3>
                <p className="mt-2  text-gray-100  w-full text-center">{descripcion}</p>
            </div>
        </div>

    );
}