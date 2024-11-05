import { cn } from '@/utils'
import { useState } from 'react'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { IoSearchSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Button, Heading, Input, Text } from '../ui'
import { BsFillGridFill } from 'react-icons/bs'
import { setReadMenuOpen, useAppDispatch, useAppSelector } from '@/store'

type Props = {
  isReadLayout?: boolean
}

const Header = (props: Props) => {
  const { isReadLayout } = props
  const dispatch = useAppDispatch()
  const { readMenuOpen } = useAppSelector((state) => state.setting)
  const [openSearch, setOpenSearch] = useState(false)

  function handleOpenSearch() {
    setOpenSearch(true)
  }

  function handleCloseSearch() {
    setOpenSearch(false)
  }

  function toggleReadMenu() {
    dispatch(setReadMenuOpen({ open: !readMenuOpen }))
  }

  return (
    <>
      <div className="sticky top-0 z-50 border-b border-b-light-grey-3 backdrop-blur-lg">
        <div
          className={cn(
            'mx-auto flex w-full items-center justify-between px-2 py-2',
            {
              'max-w-screen-xxl': !isReadLayout,
            },
          )}
        >
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heading as="h2" bold>
                Manga
              </Heading>
              <Text size="sm" bold className="text-red-2">
                MT
              </Text>
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
            <Button
              variant="secondary"
              square
              className="ml-md flex border border-red-1 md:hidden"
            >
              <HiOutlineBars3 size={24} className="text-red-1" />
            </Button>
            {isReadLayout && (
              <Button
                variant="secondary"
                square
                className={cn(
                  'ml-md flex items-center gap-md border border-red-1',
                  {
                    'border-red-2': readMenuOpen,
                  },
                )}
                onClick={toggleReadMenu}
              >
                <BsFillGridFill
                  size={24}
                  className={cn('text-red-1', {
                    'text-red-2': readMenuOpen,
                  })}
                />
                <Text bold>MENU</Text>
              </Button>
            )}
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
          'fixed inset-0 z-0 h-full w-full bg-mask opacity-0 transition-all duration-300 ease-in-out',
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
