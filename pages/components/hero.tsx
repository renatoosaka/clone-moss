export default function Hero() {
  return (
    <div className="h-screen bg-cover bg-no-repeat" style={{ backgroundImage: 'url(/imgs/background.jpg)'  }}>
      <div className="h-screen bg-gray-900 bg-opacity-20">
        <div className="flex flex-col max-w-7xl m-auto justify-center items-start h-full">
          <h1 className="text-white font-bold text-5xl tracking-tighter mb-8 max-w-4xl">A maior plataforma ambiental do mundo.</h1>
          <h4 className="text-white font-medium text-2xl leading-normal mb-4 max-w-4xl">Preserve a floresta Amazônica através da compra de créditos de carbono.</h4>
          <h4 className="text-white font-medium text-2xl leading-normal max-w-4xl">Quando você compra créditos de carbono MOSS, você está ajudando a salvar a floresta Amazônica e o papel único que ela desempenha na sustentabilidade do meio ambiente.</h4>
        </div>        
      </div>
    </div>
  )
}