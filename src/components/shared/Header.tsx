import { HiOutlineBars3 } from 'react-icons/hi2'
import { Button, Text } from '../ui'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="sticky top-0 z-50 border-b border-b-light-grey-3 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-screen-xxl items-center justify-between px-2 py-2">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://mangafire.vercel.app/logo.png"
              alt="logo"
              className="max-w-20"
            />
          </Link>
          <nav className="ml-10 hidden md:block">
            <ul className="flex items-center gap-xl">
              <Text className="cursor-pointer text-light-1 hover:text-light">
                Types
              </Text>
              <Text className="cursor-pointer text-light-1 hover:text-light">
                Genres
              </Text>
              <Text className="cursor-pointer text-light-1 hover:text-light">
                Newest
              </Text>
              <Text className="cursor-pointer text-light-1 hover:text-light">
                Updated
              </Text>
              <Text className="cursor-pointer text-light-1 hover:text-light">
                Added
              </Text>
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <Button variant="red">Login</Button>
          <Button variant="secondary" square className="ml-md flex md:hidden">
            <HiOutlineBars3 size={24} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header
