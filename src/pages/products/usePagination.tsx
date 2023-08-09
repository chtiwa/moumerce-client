import { useMemo } from "react"

export const DOTS = '...'

export const usePagination = ({ totalPages, pageSize, siblingCount, currentPage }: any) => {

  const paginationRange = useMemo(() => {
    const range = (start: any, end: any) => {
      let length = end - start + 1
      // Create an array of certain length and set the elements within it from start value to end value
      return Array.from({ length }, (_, idx) => idx + start)
    }
    // const totalPageCount = Math.ceil(totalPages / pageSize)
    const totalPageCount = totalPages


    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5

    // Case 1: If the number of pages is less than the totalPageNumbers => return the range [1..totalPageCount]
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    // Calculate left and right sibling index and make sure they are within range 1 and totalPageCount

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount)

    // don't show dots when there is only one page between the left and right index leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    // Case 2: Only show right dots  (at the start of the pages)
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount
      let leftRange = range(1, leftItemCount)
      return [...leftRange, DOTS, totalPageCount]
    }

    // Case 3: Only show left dots (at the end of the pages)
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      )
      return [firstPageIndex, DOTS, ...rightRange]
    }


    // Case 4: Show both left and right dots (at the middle of the pages)

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
  }, [totalPages, pageSize, siblingCount, currentPage])

  return paginationRange
}