import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation("home");

  return (
    <div className="h-screen bg-cover bg-no-repeat" style={{ backgroundImage: 'url(/imgs/background.jpg)'  }}>
      <div className="h-screen bg-gray-900 bg-opacity-20">
        <div className="flex flex-col max-w-7xl m-auto justify-center items-start h-full">
          <h1 className="text-white font-bold text-5xl tracking-tighter mb-8 max-w-4xl">{t('home.title')}</h1>
          <h4 className="text-white font-medium text-2xl leading-normal mb-4 max-w-4xl">{t('home.message_01')}</h4>
          <h4 className="text-white font-medium text-2xl leading-normal max-w-4xl">{t('home.message_02')}</h4>
        </div>        
      </div>
    </div>
  )
}