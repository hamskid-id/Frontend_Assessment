'use client'

import { TableCell, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { Text } from '@/components/shared/Text'
import { Maximize2 } from 'lucide-react'
import { TableLayout } from '@/components/shared/TableLayout'

export const RecentCardRequest = () => {
  const hideIndexOnMobile = [0,1]

  const data = [
    {
      branch: 'Corporate',
      cardType: 'Instant',
      quantity: '10',
      status: 'Ready',
    },
    {
      branch: 'Corporate',
      cardType: 'Personalized',
      quantity: '20',
      status: 'In Progress',
    },
    {
      branch: 'Corporate',
      cardType: 'Instant',
      quantity: '10',
      status: 'Acknowledged',
    },
    {
      branch: 'Corporate',
      cardType: 'Personalized',
      quantity: '20',
      status: 'Pending',
    },
  ]

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'ready':
        return 'text-success_700 border border-success_200 bg-success_50'
      case 'in progress':
        return 'text-warning_700 border border-warning_200 bg-warning_50'
      case 'acknowledged':
        return 'text-blue_700 border border-blue_200 bg-blue_50'
      case 'pending':
        return 'text-gray_700 border border-gray_200 bg-gray_50'
      default:
        return 'text-gray_700 border border-gray_200 bg-gray_50'
    }
  }

  return (
    <div className='border rounded-lg bg-white'>
      <div className='flex justify-between items-center px-4 pt-4'>
        <Text style='font-[500] text-[18px] leading-[24px]'>
        Recent Card Requests
        </Text>
        <Maximize2 className='w-5 h-5 text-gray-300' />
      </div>
      <div className='p-4'>
        <TableLayout
          dataLength={data.length}
          hideIndexOnMobile={hideIndexOnMobile}
          paginationStyle={'px-4 pb-4'}
          tableHeadStyle='p-4 border-b-2 text-gray-400 text-[12px] font-[500] bg-background'
          tableHeadRowStyle='bg-white p-4 text-gray-500'
          tableHeadRow={['Branch', 'Card Type', 'Quantity', 'Status', 'Action']}
          skeletonCount={7}
        >
          {data?.map((item, index) => {
            const { branch, cardType, quantity, status } = item
            const statusColor = getStatusColor(status)
            return (
              <TableRow
                className='tableRow my-2 rounded-[8px] bg-white pending-table-row p-4'
                key={`${index}_`}
              >
                {[branch, cardType, quantity].map((info, index) => (
                  <TableCell
                    key={`${index}_${info}`}
                    className={cn(
                      'font-[400] text-[10px] bg-white px-4 py-4 text-gray-500',
                      hideIndexOnMobile?.includes(index) &&
                        'md:table-cell hidden'
                    )}
                  >
                    {info}
                  </TableCell>
                ))}
                <TableCell
                  className={cn('font-[400] text-[10px] bg-white px-4 py-4')}
                >
                  <span
                    className={`px-2 py-1 rounded-full font-[400] text-[10px] ${statusColor}`}
                  >
                    {status}
                  </span>
                </TableCell>
                <TableCell
                  className={cn('font-[400] text-[10px] bg-white px-4 py-4')}
                >
                  <Text
                    style='font-[400] text-[10px] text-inactive cursor-pointer'
                    clickFunc={() => {
                      console.log(`Action: ${action} for ${branch}`)
                    }}
                  >
                    View
                  </Text>
                </TableCell>
              </TableRow>
            )
          })}
        </TableLayout>
      </div>
    </div>
  )
}
