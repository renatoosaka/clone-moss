import { GetServerSideProps } from "next";
import { useRouter } from 'next/router'

import Header from "../components/header"
import Hero from "../components/hero";

interface HomeProps {
  locale?: string;
  locales?: string[];
}

export default function Home({ locale, locales }: HomeProps) {
  const { defaultLocale } = useRouter();

  return (
    <div>
      <Header />
      <Hero />
      <div className="flex flex-col max-w-7xl m-auto p-4">
        <p>{defaultLocale}</p>
        <p>{locale}</p>
        <p>{JSON.stringify(locales)}</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>        
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>           
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>        
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>      
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>        
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>      
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({locale, locales}) => {  
  return {
    props: {
      locale, locales
    }
  }
}