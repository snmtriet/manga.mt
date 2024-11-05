import { BsBookmark, BsChatLeftDots, BsInfoCircle } from 'react-icons/bs'
import { FaSort } from 'react-icons/fa'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineChangeCircle } from 'react-icons/md'
import { Button, Heading, Text } from '../ui'
import Card from './Card'
import { BiSolidDockTop } from 'react-icons/bi'
import { PiCaretLineRightBold } from 'react-icons/pi'
import { LuArrowRightFromLine } from 'react-icons/lu'
import { setReadMenuOpen, useAppDispatch, useAppSelector } from '@/store'
import { cn } from '@/utils'

const ReadMenuAside = () => {
  const dispatch = useAppDispatch()
  const { readMenuOpen } = useAppSelector((state) => state.setting)

  function handleCloseMenu() {
    dispatch(setReadMenuOpen({ open: false }))
  }

  return (
    <Card
      className={cn(
        'fixed right-0 top-[57px] z-50 h-full min-w-[300px] rounded-l-xl py-4 transition-transform duration-200 ease-linear',
        {
          'translate-x-0': readMenuOpen,
          'translate-x-full': !readMenuOpen,
        },
      )}
    >
      <div className="flex items-center justify-between">
        <Heading as="h4" className="truncate whitespace-nowrap">
          One Piece
        </Heading>
        <Button variant="secondary" onClick={handleCloseMenu}>
          <IoIosArrowBack size={20} className="rotate-180" />
        </Button>
      </div>

      <div className="mt-4 flex flex-col gap-md">
        <Card
          border={false}
          className="group bg-dark-4 shadow-none hover:bg-dark-5"
        >
          <div className="flex cursor-pointer items-center justify-between">
            <div className="flex flex-col gap-md">
              <Text
                size="md"
                className="text-light-grey-1 group-hover:text-light"
              >
                Your are reading
              </Text>
              <Text size="lg" className="text-red-1 group-hover:text-red-2">
                by Chapter
              </Text>
            </div>
            <MdOutlineChangeCircle
              size={36}
              className="text-red-1 transition-transform duration-300 ease-in-out group-hover:rotate-180 group-hover:scale-125"
            />
          </div>
        </Card>
        <Card
          className="group cursor-pointer bg-dark-4 p-3 shadow-none hover:bg-dark-5"
          border={false}
        >
          <div className="flex items-center justify-center gap-sm">
            <Text className="text-light-grey-3">Language:</Text>
            <Text className="text-light">English</Text>
          </div>
        </Card>
        <div className="flex h-full items-center gap-md">
          <Button className="h-full border border-transparent !bg-dark-4 p-2 py-3 text-inherit hover:!bg-dark-5">
            <IoIosArrowBack size={20} />
          </Button>
          <Card
            border={false}
            className="group flex flex-1 cursor-pointer items-center justify-between bg-dark-4 p-3 shadow-none hover:bg-dark-5"
          >
            <Text>Page 1</Text>
            <FaSort />
          </Card>
          <Button className="h-full border border-transparent !bg-dark-4 p-2 py-3 text-inherit hover:!bg-dark-5">
            <IoIosArrowBack size={20} className="rotate-180" />
          </Button>
        </div>
        <div className="flex h-full items-center gap-md">
          <Button className="h-full border border-transparent !bg-dark-4 p-2 py-3 text-inherit hover:!bg-dark-5">
            <IoIosArrowBack size={20} />
          </Button>
          <Card
            border={false}
            className="group flex flex-1 cursor-pointer items-center justify-between bg-dark-4 p-3 shadow-none hover:bg-dark-5"
          >
            <Text>Chapter 1</Text>
            <FaSort />
          </Card>
          <Button className="h-full border border-transparent !bg-dark-4 p-2 py-3 text-inherit hover:!bg-dark-5">
            <IoIosArrowBack size={20} className="rotate-180" />
          </Button>
        </div>
        <Card
          className="group flex cursor-pointer items-center justify-between bg-dark-4 p-3 shadow-none hover:bg-dark-5"
          border={false}
        >
          <BsChatLeftDots
            size={20}
            className="text-light-grey-3 group-hover:text-light"
          />
          <Text className="text-light-grey-3 group-hover:text-light">
            Chapter 1 Comment
          </Text>
        </Card>
        <Card
          className="group flex cursor-pointer items-center justify-between bg-dark-4 p-3 shadow-none hover:bg-dark-5"
          border={false}
        >
          <BsBookmark
            size={20}
            className="text-light-grey-3 group-hover:text-light"
          />
          <Text className="text-light-grey-3 group-hover:text-light">
            Bookmark
          </Text>
        </Card>
        <Card
          className="group flex cursor-pointer items-center justify-between bg-dark-4 p-3 shadow-none hover:bg-dark-5"
          border={false}
        >
          <BsInfoCircle
            size={20}
            className="text-light-grey-3 group-hover:text-light"
          />
          <Text className="text-light-grey-3 group-hover:text-light">
            Manga Detail
          </Text>
        </Card>
      </div>

      <div className="mt-4 flex flex-col gap-md">
        <Card
          className="group flex cursor-pointer items-center justify-between bg-dark-4 p-3 shadow-none hover:bg-dark-5"
          border={false}
        >
          <Text className="text-light-grey-3 group-hover:text-light">
            Header Sticky
          </Text>
          <BiSolidDockTop
            size={20}
            className="text-light-grey-3 group-hover:text-light"
          />
        </Card>
        <Card
          className="group flex cursor-pointer items-center justify-between bg-dark-4 p-3 shadow-none hover:bg-dark-5"
          border={false}
        >
          <Text className="text-light-grey-3 group-hover:text-light">
            Long Strip
          </Text>
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="w-5 text-light-grey-3 group-hover:text-light"
          >
            <path d="M14,1.2v3.6c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V1.2h1v3.6c0,0.6,0.4,1,1,1h8c0.6,0,1-0.4,1-1V1.2H14z M12,9.4H4 c-1.1,0-2,0.9-2,2V15h1v-3.6c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1V15h1v-3.6C14,10.3,13.1,9.4,12,9.4z"></path>
          </svg>
        </Card>
        <Card
          className="group flex cursor-pointer items-center justify-between bg-dark-4 p-3 shadow-none hover:bg-dark-5"
          border={false}
        >
          <Text className="text-light-grey-3 group-hover:text-light">
            Left to Right
          </Text>
          <PiCaretLineRightBold
            size={20}
            className="text-light-grey-3 group-hover:text-light"
          />
        </Card>
        <Card
          className="group flex cursor-pointer items-center justify-between bg-dark-4 p-3 shadow-none hover:bg-dark-5"
          border={false}
        >
          <Text className="text-light-grey-3 group-hover:text-light">
            Left progress
          </Text>
          <LuArrowRightFromLine
            size={20}
            className="text-light-grey-3 group-hover:text-light"
          />
        </Card>
      </div>
    </Card>
  )
}

export default ReadMenuAside
