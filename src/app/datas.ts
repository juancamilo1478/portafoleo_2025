export type Servicio = {
    titulo: string;
    descripcion: string;
    imagen: string;
};
const servicios: Servicio[] = [
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

export default servicios;