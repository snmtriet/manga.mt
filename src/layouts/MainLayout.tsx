import { Footer, Header } from '@/components/shared'
import { Text } from '@/components/ui'
import Views from '@/views/Views'
import { IoRocket } from 'react-icons/io5'

const MainLayout = () => {
  function onGoTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div>
      <Header />
      <div className="relative mx-auto min-h-screen max-w-screen-xxl px-2 py-4">
        <Views />
        <div
          className="mt-10 flex cursor-pointer flex-col items-center justify-center"
          onClick={onGoTop}
        >
          <IoRocket size={24} className="text-red-2" />
          <Text>Go to surface</Text>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
