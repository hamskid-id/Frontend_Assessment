'use client'

import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableCell,
  TableRow,
} from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { Text } from './Text'

export const TableLayout = ({
  emptyState = {},
  dataLength,
  tableHeadRow,
  tableHeadRowStyle,
  hideIndexOnMobile,
  children,
  tableHeadRowChildren,
  caption,
  tableHead,
  tableHeadStyle,
  totalPageNumber =0,
  activePage,
  loading = false,
  skeletonCount = 5,
  skeletonRow,
  paginationStyle,
}) => {

  // Default skeleton row if none provided
  const defaultSkeletonRow = (
    <TableRow>
      {tableHeadRow?.map((_, index) => (
        <TableCell key={index}>
          <Skeleton className='h-4 w-[80%]' />
        </TableCell>
      ))}
    </TableRow>
  )

  const renderSkeletons = () => {
    return Array.from({ length: skeletonCount }).map((_, index) => (
      <React.Fragment key={index}>
        {skeletonRow || defaultSkeletonRow}
      </React.Fragment>
    ))
  }

  return (
    <div className='w-full text-darkblue font-medium flex flex-col justify-between h-full'>
      {tableHead && <div className='my-4'>{tableHead}</div>}

      <div className='block w-full mb-7'>
        <Table>
          {caption && <TableCaption>{caption}</TableCaption>}
          <TableHeader>
            {loading ? (
              <TableRow
                className={cn(
                  'font-[600] text-[16px] bg-none border-none shadow-none',
                  tableHeadRowStyle
                )}
              >
                {tableHeadRow?.map((heading, index) => (
                  <TableHead
                    className={cn(
                      tableHeadStyle,
                      hideIndexOnMobile?.includes(index) && 'hidden'
                    )}
                    key={index}
                  >
                    <Skeleton className='h-4 w-[60%]' />
                  </TableHead>
                ))}
              </TableRow>
            ) : tableHeadRowChildren ? (
              tableHeadRowChildren
            ) : (
              <TableRow
                className={cn(
                  'font-[600] text-[16px] bg-light-grey border-none shadow-none',
                  tableHeadRowStyle
                )}
              >
                {tableHeadRow?.map((heading, index) => (
                  <TableHead
                    className={cn(
                      tableHeadStyle,
                      hideIndexOnMobile?.includes(index) &&
                        'md:table-cell hidden'
                    )}
                    key={index}
                  >
                    {heading}
                  </TableHead>
                ))}
              </TableRow>
            )}
          </TableHeader>
          <TableBody className='font-[400] text-[14px]'>
            {loading ? renderSkeletons() : children}
          </TableBody>
        </Table>
      </div>

      {!loading && dataLength < 1 && (
        <div className='flex flex-col items-center justify-center my-[3rem] text-darkblue mx-auto'>
          {emptyState?.subText && (
            <Text style='text-md mb-8' value={emptyState.subText} />
          )}
          {emptyState?.component}
        </div>
      )}

      {!loading && totalPageNumber > 1 && (
        <div
          className={cn(
            paginationStyle,
            'flex flex-wrap-reverse justify-end items-end mt-auto md:flex-wrap-nowrap gap-2'
          )}
        >
          hello pagination
        </div>
      )}
    </div>
  )
}
