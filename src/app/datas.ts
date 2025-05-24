export type Servicio = {
    titulo: string;
    descripcion: string;
    imagen: string;
};

export type AppData = {
    name: string;
    descripcion: string;
    image_one: string;
    image_app: string[];
    link?: string;
    github?: string;
    tecnologias: tegnologie[];
    type: cartType;
};
export type tegnologie = {
    nombre: string;
    icono: string;
}
export const servicios: Servicio[] = [
    {
        titulo: "Desarrollo Frontend",
        descripcion: "Construyo interfaces modernas, dinámicas y responsivas usando Next.js y Vue.",
        imagen: "/svgs/web-grid.svg",
    },
    {
        titulo: "Desarrollo Backend",
        descripcion: "APIs sólidas con NestJS, siguiendo principios SOLID y arquitectura limpia.",
        imagen: "/svgs/tree.svg",
    },
    {
        titulo: "Dockerización en Servidores",
        descripcion: "Implementación de soluciones escalables mediante Docker.",
        imagen: "/svgs/docker.svg",
    },
    {
        titulo: "Despliegue de Aplicaciones",
        descripcion: "gestiono el despliegue continuo de aplicaciones, asegurando una integración y entrega eficiente en ambientes de producción.",
        imagen: "/svgs/app-server.svg",
    },
    {
        titulo: "Desarrollo de Aplicaciones Móviles Android a Medida",
        descripcion: "Creo aplicaciones móviles personalizadas para Android utilizando Kotlin y Jetpack Compose, asegurando interfaces modernas y rendimiento optimizado.",
        imagen: "/svgs/app-sharing-phone.svg",
    },
    {
        titulo: "Mantenimiento y Escalado de Aplicaciones",
        descripcion: "Brindo soporte continuo, corrección de errores, monitoreo y escalado para asegurar que tus aplicaciones estén siempre operativas y listas para crecer.",
        imagen: "/svgs/tool.svg",
      }
];
export enum cartType{
    "web" = "web",
    "mobile" = "mobile",
    "desktop" = "desktop",
}
export const myApps:AppData[] = [
    {
        name: "DocVisual",
        descripcion: "DocVisual es una plataforma para optómetras que les permite ofrecer sus servicios y gestionar agendas de manera eficiente.",
        image_one: "https://res.cloudinary.com/dirsusbyy/image/upload/v1746055258/tjmtqw8awfczaycthqco.png",
        image_app: ["https://res.cloudinary.com/dirsusbyy/image/upload/v1746055258/tjmtqw8awfczaycthqco.png", "https://res.cloudinary.com/dirsusbyy/image/upload/v1747373600/nkutpzc6sfl08w8mitxi.png", "https://res.cloudinary.com/dirsusbyy/image/upload/v1747373599/fz6auijg4rcvz8bfpmsr.png"],
        link: "https://www.docvisual.co/",
        tecnologias:[],
        type: cartType.web,
    },
    {
        name: "CardioSano",
        descripcion: "CardioSano es una app para el control de presión arterial y glucosa que permite vincular a enfermeros para el cuidado del paciente.",
        image_one: "https://res.cloudinary.com/dirsusbyy/image/upload/v1746417583/edjtt2yycmturfinwpzv.png",
        image_app: ["https://res.cloudinary.com/dirsusbyy/image/upload/v1746028928/ibtjroma4sgyx55erswj.png", "https://res.cloudinary.com/dirsusbyy/image/upload/v1746028928/ibtjroma4sgyx55erswj.png", "https://res.cloudinary.com/dirsusbyy/image/upload/v1746028928/ibtjroma4sgyx55erswj.png"],
        link: "https://frontend.docvisual.co/",
        tecnologias:[],
        type: cartType.mobile,
    },
    {
        name: "Landig pages",
        descripcion: "Conjunto de landing pages desarrolladas para clientes y proyectos de muestra. Implementadas con Next.js y vue en el frontend  .",
        image_one: "https://res.cloudinary.com/dirsusbyy/image/upload/v1747374866/kqawbzjdqpnmxxx3jkht.png",
        image_app: ["https://res.cloudinary.com/dirsusbyy/image/upload/v1747374866/kqawbzjdqpnmxxx3jkht.png", "https://res.cloudinary.com/dirsusbyy/image/upload/v1747374866/vg2kqdbs2iyyaqthovcf.png", "https://res.cloudinary.com/dirsusbyy/image/upload/v1746417583/vxrp5vdb36mpnfoke9iw.png"],
        link: "https://chatwthme.site/",
        tecnologias:[],
        type: cartType.desktop,
    }
] 