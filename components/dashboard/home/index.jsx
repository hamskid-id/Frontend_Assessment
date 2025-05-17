import { Calendar } from 'lucide-react'
import { Text } from '../../shared/Text'
import { QuickAccessContainer } from './QuickAccess'
import { Analytics } from './Analytics'

export const DashboardHome = () => {
  return (
    <div>
      <div className='flex flex-wrap justify-between items-start mb-4 md:px-6 px-4'>
        <div className='flex flex-col gap-2'>
          <Text style='font-[600] text-[18px] leading-[24px]'>
            Hi Nazeer, what would you like to do today?
          </Text>
          <Text style='text-[12px] font-[500] leading-[100%]'>
            Last login:
            <span className='font-[400] ms-2'>26/11/2024 14:39:58</span>
          </Text>
        </div>
        <div className='rounded items-center border py-2 divide-x divide-x-gray px-3 font-[500] text-[11px] md:flex hidden ms-auto'>
          <Text style='flex items-center gap-2 pe-1'>
            <Calendar className='w-4 h-4' />
            Today
          </Text>
          <Text style='font-[400] ps-1'>11 Nov 2024</Text>
        </div>
      </div>
      <QuickAccessContainer />
      <Analytics />
    </div>
  )
}
