import { Text } from '@/components/shared/Text'
import {
  BankNoteSvg,
  CreditCardCheckSvg,
  CreditCardEditSvg,
  HourglassSvg,
} from '@/components/svg'
import { AnalyticsCard } from './AnalyticsCard'
import MonthlyIssuance from './MonthlyIssuance'
import { RecentCardRequest } from './RecentCardRequest'
import ThisWeekIncome from './ThisWeekIncome'
import CardStatusDistribution from './CardStatusDistribution'

export const Analytics = () => {
  return (
    <div className='md:px-6  px-4 mt-5'>
      <div className='flex gap-2 items-center mb-5'>
        <Text style='font-[600] text-[18px] leading-[18px]'>Analytics</Text>
        <div className='bg-gray-200 h-[0.1rem] flex-grow'></div>
      </div>
      <div className='grid md:grid-col-3 lg:grid-cols-4 grid-cols-2 gap-3'>
        <AnalyticsCard
          svgIcon={<CreditCardCheckSvg />}
          title='Total Active Cards'
          amount='26,478'
          percentage='+9'
          text='this month'
        />
        <AnalyticsCard
          svgIcon={<CreditCardEditSvg />}
          title='Total Personalized Cards'
          amount='15,703'
          percentage='8.5'
          text='this month'
        />
        <AnalyticsCard
          svgIcon={<BankNoteSvg />}
          title='Today’s Revenue'
          amount='₦9.3M'
          percentage='+6'
          text='vs yesterday'
        />
        <AnalyticsCard
          svgIcon={<HourglassSvg />}
          title='Pending Requests'
          amount='38'
        />
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-3 mt-3'>
        <MonthlyIssuance />
        <RecentCardRequest />
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-3 mt-3'>
        <ThisWeekIncome />
        <CardStatusDistribution />
      </div>
    </div>
  )
}
