import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef } from 'react'

export default function Header() {
  const navRef = useRef<HTMLDivElement>(null)

  const scrollHandler = useCallback(() => {
    if (navRef.current) {      
      var scrolled = window.scrollY > window.innerHeight /4;
      
      if (scrolled) {
        navRef.current.classList.add("bg-gray-900", "shadow-md")
      } else {
        navRef.current.classList.remove("bg-gray-900", "shadow-md")
      }
    }    
  }, [])
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler)

    return () => {
      document.removeEventListener("scroll", scrollHandler)
    }
  }, [])

  return (
    <div ref={navRef} className="flex w-screen py-4 fixed transition duration-200">
      <nav className="flex justify-between w-full max-w-7xl m-auto">
        <Image src="/imgs/logo.png" alt="logo" width={170} height={56} />
        <div className="flex items-center">
          <ul className="flex items-center space-x-4 text-white text-lg font-medium">
            <li>Produtos</li>
            <li>Nosso impacto</li>
            <li>Sobre nós</li>
            <li>Blog</li>
          </ul>

          <Link href="/">
            <a className="bg-orange text-white ml-4 py-2 px-4 rounded-full text-base font-medium transition duration-200 hover:bg-orange-dark">Faça Parte</a>
          </Link>
          <div className="ml-4">
            <Image src="/imgs/brazil.svg" alt="idioma" width={32} height={32}/>
          </div>
        </div>
      </nav>
    </div>    
  )
}