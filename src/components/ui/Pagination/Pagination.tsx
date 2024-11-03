import { cn } from '@/utils'
import { useState } from 'react'

type PageItem = {
  index: number
  content?: number
  selected?: boolean
  key: string
  disabled?: boolean
  breakView?: boolean
}

type Props = {
  value?: number
  pageCount: number
  clickHandler?: (page: number) => void
  pageRange?: number
  marginPages?: number
  prevText?: string
  nextText?: string
  pageClass?: string
  prevClass?: string
  nextClass?: string
  breakViewClass?: string
  activeClass?: string
  disabledClass?: string
  firstLastButton?: boolean
  firstButtonText?: string
  lastButtonText?: string
  className?: string
  onChange?: (page: number) => void
}

const Pagination = (props: Props) => {
  const {
    value,
    pageCount,
    pageRange = 3,
    marginPages = 1,
    className,
    firstLastButton = false,
    pageClass,
    prevClass,
    nextClass,
    breakViewClass,
    activeClass = 'active',
    disabledClass = 'disabled',
    firstButtonText,
    prevText,
    nextText,
    lastButtonText,
    onChange,
    clickHandler,
  } = props
  const [innerValue, setInnerValue] = useState(1)
  const [selected, setSelected] = useState(value || innerValue)

  const pages = () => {
    return pageCount <= pageRange
      ? getPageItemsInRange()
      : getPagesWithBreakView()
  }
  const firstPageSelected = () => {
    return selected === 1
  }
  const lastPageSelected = () => {
    return selected === pageCount
  }
  const handlePageSelected = (page: number) => {
    if (selected !== page) {
      setInnerValue(page)
      setSelected(page)
      onChange?.(page)
      clickHandler?.(page)
    }
  }
  const prevPage = () => {
    if (selected >= 1) {
      handlePageSelected(selected - 1)
    }
  }
  const nextPage = () => {
    if (selected <= pageCount) {
      handlePageSelected(selected + 1)
    }
  }
  const selectFirstPage = () => {
    if (selected >= 1) {
      handlePageSelected(1)
    }
  }
  const selectLastPage = () => {
    if (selected <= pageCount) {
      handlePageSelected(pageCount)
    }
  }
  const getPageItemsInRange = () => {
    const pages: PageItem[] = []
    for (let i = 0; i < pageCount; i++) {
      const item = {
        index: i,
        content: i + 1,
        selected: i === selected - 1,
        key: `page-${i + 1}`,
      }
      pages.push(item)
    }
    return pages
  }
  const getPagesWithBreakView = () => {
    const pages: PageItem[] = []
    const halfPageRange = Math.floor(pageRange / 2)
    const setPage = (index: number) => {
      pages[index] = {
        index: index,
        content: index + 1,
        selected: index === selected - 1,
        key: `page-${index + 1}`,
      }
    }
    const setBreakView = (index: number) => {
      pages[index] = {
        index: index,
        disabled: true,
        breakView: true,
        key: `breakView-${index}`,
      }
    }
    for (let i = 0; i < marginPages; i++) {
      setPage(i)
    }
    let start = 0
    if (selected - halfPageRange > 0) {
      start = selected - 1 - halfPageRange
    }
    let end = start + pageRange - 1
    if (end >= pageCount) {
      end = pageCount - 1
      start = end - pageRange + 1
    }
    for (let i = start; i <= end && i <= pageCount - 1; i++) {
      setPage(i)
    }
    if (start > marginPages) {
      setBreakView(start - 1)
    }
    if (end + 1 < pageCount - marginPages) {
      setBreakView(end + 1)
    }
    for (let i = pageCount - 1; i >= pageCount - marginPages; i--) {
      setPage(i)
    }
    return pages
  }

  return (
    <ul className={cn('pagination', className)}>
      {firstLastButton ? (
        <li className={cn(pageClass, firstPageSelected() ? disabledClass : '')}>
          <a
            tabIndex={firstPageSelected() ? -1 : 0}
            onClick={selectFirstPage}
            onKeyUp={selectFirstPage}
          >
            {firstButtonText || 'First'}
          </a>
        </li>
      ) : null}
      {firstPageSelected() ? null : (
        <li className={cn(prevClass, firstPageSelected() ? disabledClass : '')}>
          <a
            tabIndex={firstPageSelected() ? -1 : 0}
            onClick={prevPage}
            onKeyUp={prevPage}
          >
            {prevText || 'Prev'}
          </a>
        </li>
      )}
      {pages().map((page) => (
        <li
          key={page.key}
          className={cn(
            pageClass,
            page.selected ? activeClass : '',
            page.disabled ? disabledClass : '',
            page.breakView ? breakViewClass : '',
          )}
        >
          {page.breakView ? (
            <a>...</a>
          ) : page.disabled ? (
            <a>{page.content}</a>
          ) : (
            <a onClick={() => handlePageSelected(page.index + 1)}>
              {page.content}
            </a>
          )}
        </li>
      ))}
      {lastPageSelected() ? null : (
        <li className={cn(nextClass, lastPageSelected() ? disabledClass : '')}>
          <a
            tabIndex={lastPageSelected() ? -1 : 0}
            onClick={nextPage}
            onKeyUp={nextPage}
          >
            {nextText || 'Next'}
          </a>
        </li>
      )}
      {firstLastButton ? (
        <li className={cn(pageClass, lastPageSelected() ? disabledClass : '')}>
          <a
            tabIndex={lastPageSelected() ? -1 : 0}
            onClick={selectLastPage}
            onKeyUp={selectLastPage}
          >
            {lastButtonText || 'Last'}
          </a>
        </li>
      ) : null}
    </ul>
  )
}

export default Pagination
