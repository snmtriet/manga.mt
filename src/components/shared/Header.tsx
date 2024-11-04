import { cn } from '@/utils'
import { useState } from 'react'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { IoSearchSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Button, Input, Text } from '../ui'

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false)

  function handleOpenSearch() {
    setOpenSearch(true)
  }

  function handleCloseSearch() {
    setOpenSearch(false)
  }

  return (
    <>
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
              </ul>
            </nav>
          </div>
          <div className="flex items-center">
            <Input
              placeholder="Search manga..."
              after={<IoSearchSharp size={24} className="text-inherit" />}
              before={
                <Text size="sm" className="h-full rounded p-1">
                  Filters
                </Text>
              }
              className="mr-2 hidden sm:flex"
            />
            <Button
              variant="tertiary"
              square
              className="mr-md flex sm:hidden"
              onClick={handleOpenSearch}
            >
              <IoSearchSharp size={24} />
            </Button>
            <Button variant="red">Login</Button>
            <Button variant="secondary" square className="ml-md flex md:hidden">
              <HiOutlineBars3 size={24} />
            </Button>
          </div>
        </div>
        <div
          className={cn(
            'fixed inset-x-0 top-0 z-[60] h-[56px] w-full -translate-y-full bg-dark transition-transform duration-300 ease-in-out',
            {
              'translate-y-0': openSearch,
            },
          )}
        >
          <Input
            placeholder="Search manga..."
            before={<IoSearchSharp size={24} className="text-inherit" />}
            after={
              <Text size="sm" className="rounded bg-red-1 p-1">
                Filters
              </Text>
            }
            className="flex h-full w-full items-center border-none text-md"
          />
        </div>
      </div>
      <div
        className={cn(
          'bg-mask fixed inset-0 z-0 h-full w-full opacity-0 transition-all duration-300 ease-in-out',
          {
            'z-10 opacity-100': openSearch,
          },
        )}
        onClick={handleCloseSearch}
      />
    </>
  )
}

export default Header
