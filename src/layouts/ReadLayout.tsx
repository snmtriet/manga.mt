import { Header, ReadMenuAside } from '@/components/shared'
import Views from '@/views/Views'

const ReadLayout = () => {
  return (
    <main>
      <Header isReadLayout />
      <ReadMenuAside />
      <div className="relative flex items-center justify-center px-2 py-4">
        <Views />
      </div>
    </main>
  )
}

export default ReadLayout
