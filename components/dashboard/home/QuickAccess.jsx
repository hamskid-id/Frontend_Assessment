import { Text } from '@/components/shared/Text'
import {
  CardRequestSvg,
  IssueInstantCardSvg,
  ManageCardSvg,
  PersonalizedCardSvg,
} from '@/components/svg'
import { ChevronRight } from 'lucide-react'

export const QuickAccessContainer = () => {
  return (
    <div className='md:px-6  px-0'>
      <div className='border bg-white p-4 rounded-none md:rounded-[10px] gap-3 flex flex-col'>
        <Text style='font-[400] text-[16px] leading-[18px]'>
          Your Quick Access
        </Text>
        <div className='grid md:grid-col-3 lg:grid-cols-4 grid-cols-2 gap-4'>
          <QuickAccessCard text='Manage a Card' svgIcon={<ManageCardSvg />} />
          <QuickAccessCard
            text='Issue Instant Card'
            svgIcon={<IssueInstantCardSvg />}
          />
          <QuickAccessCard
            text='Issue Personalized Card'
            svgIcon={<PersonalizedCardSvg />}
          />
          <QuickAccessCard
            text='Review Card Requests'
            svgIcon={<CardRequestSvg />}
          />
        </div>
      </div>
    </div>
  )
}

const QuickAccessCard = ({ text, svgIcon }) => (
  <div className='py-2 px-4 flex items-center gap-4 cursor-pointer bg-background rounded'>
    <div>{svgIcon}</div>
    <Text style='md:text-[12px] text-[10px] gap-2 font-[400] flex items-center'>
      {text}
      <ChevronRight className='w-4 h-4 text-gray-400' />
    </Text>
  </div>
)
