import type { NextConfig } from "next";





import createNextIntlPlugin from 'next-intl/plugin';



const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['res.cloudinary.com'], // Coloca el dominio aquí

  },
 
};

export default withNextIntl(nextConfig);
