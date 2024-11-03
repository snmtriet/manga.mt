import { Footer, Header } from '@/components/shared'
import Views from '@/views/Views'

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="relative mx-auto min-h-screen max-w-screen-xxl px-2 py-4">
        <Views />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
