import { MangaCard } from '@/components/shared'
import Card from '@/components/shared/Card'
import { Button, Heading, Input, Section, Tag, Text } from '@/components/ui'
import { cn } from '@/utils'
import { useEffect, useRef, useState } from 'react'
import { FaPlay, FaStar } from 'react-icons/fa'
import { GoBookmarkFill } from 'react-icons/go'
import { IoEye, IoSearchSharp } from 'react-icons/io5'
import { useLocation } from 'react-router-dom'
import { useDebounceCallback } from 'usehooks-ts'

enum ReadBy {
  CHAPTER = 'chapter',
  VOLUME = 'volume',
}

const Manga = () => {
  const listRef = useRef<HTMLDivElement | null>(null)
  const [readBy, setReadBy] = useState<ReadBy>(ReadBy.CHAPTER)
  const [search, setSearch] = useState<number | null>(null)
  const debounced = useDebounceCallback(setSearch, 500)
  const location = useLocation()
  const imagePath = location.search.replace('?', '').split('=')

  useEffect(() => {
    if (!listRef.current || !search) return
    const chapter = listRef.current.children[+search - 1]
    chapter?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    })
  }, [search])

  function handleChangeReadBy(readBy: ReadBy) {
    setReadBy(readBy)
  }

  return (
    <>
      <Section className="mt-2">
        <div className="grid grid-cols-12">
          <div className="col-span-full xl:col-span-9">
            <div className="flex flex-col items-start md:flex-row">
              <div className="flex w-full items-center justify-center">
                <img
                  src={`/images/${imagePath[0]}/${imagePath[1]}.png`}
                  alt=""
                  className="min-w-[250px] rounded"
                />
              </div>
              <div className="mt-4 h-full md:mt-0 md:p-4">
                <Heading as="h4" className="text-light-grey-1">
                  Releasing
                </Heading>
                <Heading as="h2" className="mt-4">
                  My Dress-Up Darling
                </Heading>
                <div className="mt-4 flex items-center gap-md">
                  <Button
                    variant="red"
                    className="h-[42px]"
                    size="md"
                    before={<IoEye size={24} className="mr-1" />}
                  >
                    Read Now
                  </Button>
                  <Button className="h-[42px]" variant="secondary">
                    <GoBookmarkFill size={24} />
                  </Button>
                </div>
                <div className="mt-4 flex items-center gap-md">
                  <Tag className="border-light-grey-3" color="white">
                    <Text>Action</Text>
                  </Tag>
                  <Tag className="border-light-grey-3" color="white">
                    <Text>Comedy</Text>
                  </Tag>
                  <Tag className="border-light-grey-3" color="white">
                    <Text>Drama</Text>
                  </Tag>
                </div>
                <Text className="mt-4 line-clamp-2 text-light-grey-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Recusandae expedita sint dolorem est, in dolores iste beatae?
                  Reiciendis, aut. Et explicabo nulla veritatis, delectus est
                  odit deleniti debitis earum consequatur.Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Recusandae expedita sint
                  dolorem est, in dolores iste beatae? Reiciendis, aut. Et
                  explicabo nulla veritatis, delectus est odit deleniti debitis
                  earum consequatur.
                </Text>
                <Text className="cursor-pointer text-light-grey-3 underline underline-offset-4 hover:text-light">
                  Read more+
                </Text>
              </div>
            </div>
          </div>
          <div className="col-span-full mt-4 xl:col-span-3 xl:mt-0">
            <div className="flex flex-col gap-md pr-0 md:p-4">
              <Text className="text-light-grey-1">
                <span className="mr-1 text-light-grey-3">Author: </span>{' '}
                Shinichi Fukuda
              </Text>
              <Text className="text-light">
                <span className="mr-1 text-light-grey-3">Published: </span> Jan
                19, 2018 to ?
              </Text>
              <Text className="text-light-grey-1">
                <span className="mr-1 text-light-grey-3">Genres: </span> Comedy,
                Ecchi, Romance, School, Seinen, Slice of Life
              </Text>
              <Text className="text-light-grey-1">
                <span className="mr-1 text-light-grey-3">Mangazines: </span>{' '}
                Young Gangan
              </Text>
              <Text className="text-light-grey-1">
                <span className="mr-1 text-light-grey-3">Views: </span>{' '}
                1,090,287
              </Text>
              <Card
                className="relative mt-4 overflow-hidden rounded-lg bg-transparent px-4 shadow-none before:absolute before:left-0 before:top-0 before:block before:h-full before:w-1 before:bg-red-1"
                border={false}
              >
                <div className="mb-1 flex items-center gap-sm">
                  <FaStar size={14} className="text-yellow-1" />
                  <Text className="pt-0.5">
                    9.5
                    <small className="text-light-grey-3"> (4657 voted)</small>
                  </Text>
                </div>
                <Text>What do you think about this manga?</Text>
                <div className="mt-4 flex items-center gap-md">
                  <Card className="flex w-full cursor-pointer flex-col items-center justify-center gap-sm hover:bg-dark-2">
                    <Text size="lg">😩</Text>
                    <Text>Boring</Text>
                  </Card>
                  <Card className="flex w-full cursor-pointer flex-col items-center justify-center gap-sm hover:bg-dark-2">
                    <Text size="lg">😃</Text>
                    <Text>Great</Text>
                  </Card>
                  <Card className="flex w-full cursor-pointer flex-col items-center justify-center gap-sm hover:bg-dark-2">
                    <Text size="lg">🤩</Text>
                    <Text>Amazing</Text>
                  </Card>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-12 gap-lg">
          <div className="col-span-full xl:col-span-9">
            <div className="flex items-center">
              <Button
                variant={readBy === ReadBy.CHAPTER ? 'red' : 'secondary'}
                className="h-[42px] w-[150px] rounded-b-none rounded-r-none uppercase"
                onClick={() => handleChangeReadBy(ReadBy.CHAPTER)}
              >
                Chapter
              </Button>
              <Button
                variant={readBy === ReadBy.VOLUME ? 'red' : 'secondary'}
                className="h-[42px] w-[150px] rounded-b-none rounded-l-none uppercase"
                onClick={() => handleChangeReadBy(ReadBy.VOLUME)}
              >
                Volume
              </Button>
            </div>
            <Card className="rounded-tl-none border-t-4 border-t-red-1 p-0">
              <div className="flex flex-col items-start justify-between gap-md p-2 sm:flex-row sm:items-center">
                <Button variant="secondary">Choose Language</Button>
                <div>
                  <Input
                    type="number"
                    placeholder="Chapter number"
                    after={<IoSearchSharp size={20} />}
                    onChange={(value) => debounced(value)}
                  />
                </div>
              </div>
              <div
                className="flex max-h-[420px] flex-col overflow-y-auto scroll-smooth [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-b-dark-2"
                ref={listRef}
              >
                {Array.from({ length: 500 }).map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      'group cursor-pointer bg-dark-4 p-2 hover:bg-dark-3',
                      {
                        'bg-dark-3': search == index + 1,
                      },
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-md overflow-hidden">
                        <FaPlay
                          size={12}
                          className={cn(
                            'w-0 text-red-1 transition-all duration-150 ease-linear group-hover:w-3',
                            {
                              'w-3': search == index + 1,
                            },
                          )}
                        />
                        <Text
                          ellipsis
                          className={cn(
                            'whitespace-nowrap text-light-grey-3 group-hover:text-red-1',
                            {
                              'text-red-1': search == index + 1,
                            },
                          )}
                        >
                          Chapter {index + 1}:{' '}
                          {Math.random().toString(36).slice(2)}
                        </Text>
                      </div>
                      <Text
                        className={cn(
                          'ml-4 whitespace-nowrap text-light-grey-3/60 group-hover:text-red-1',
                          {
                            'text-red-1': search == index + 1,
                          },
                        )}
                      >
                        Jan 01, 2022
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <div className="mt-10">
              <Heading className="mb-4" bold>
                Author's Other Manga
              </Heading>
              <div className="grid grid-cols-1 gap-lg md:grid-cols-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <MangaCard key={index} index={index + 1} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-full mt-4 xl:col-span-3 xl:mt-0 xl:pt-[42px]">
            <Card className="rounded-lg p-0">
              <Heading className="px-2 py-3" bold>
                You may also like
              </Heading>
              <div className="flex flex-col gap-md">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div
                    key={index}
                    className="cursor-pointer overflow-hidden p-2 transition-all duration-150 odd:bg-dark-4 even:bg-dark-5 hover:bg-dark-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="h-full w-full max-w-12">
                        <img
                          src={`/images/${imagePath[0]}/${index + 1}.png`}
                          className="rounded-md"
                        />
                      </div>
                      <div className="flex-1 p-2">
                        <Text className="text-light">
                          Smile Down the Runway
                        </Text>
                        <Text className="text-light-grey-3">
                          Chap 183 - Vol 22
                        </Text>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Manga
