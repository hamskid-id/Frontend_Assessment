import { Text } from '@/components/shared/Text'

import { ArrowDownLeft, ArrowUpRight, Clock } from 'lucide-react'

export const AnalyticsCard = ({
  svgIcon,
  title,
  amount,
  action = 'increase',
  percentage,
  text,
}) => (
  <div className='border bg-white rounded-[10px] p-3 flex flex-col justify-between gap-3 min-h-[110px]'>
    <div>{svgIcon}</div>
    <Text style='font-[500] text-[14px] text-gray-500'>{title}</Text>
    <div className='flex justify-between items-center gap-3 flex-wrap'>
      <Text style='font-[600] text-[22px]'>{amount}</Text>
      {title !== 'Pending Requests' ? (
        <div className='flex gap-4 items-center text-[12px] font-[400] text-gray-500'>
          <div className='flex items-center rounded py-[0.1rem] px-1 bg-success_50 text-success_700'>
            {action === 'increase' ? (
              <ArrowUpRight className='w-4 h-4 text-success_700' />
            ) : (
              <ArrowDownLeft className='w-4 h-4 text-lost' />
            )}
            {percentage}%
          </div>
          {text}
        </div>
      ) : (
        <Text style='flex gap-1 items-center font-[400] text-[12px] text-expire'>
          <Clock className='w-4 h-4 text-expire' />
          Requires attention
        </Text>
      )}
    </div>
  </div>
)
