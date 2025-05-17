'use client'
import { Text } from '@/components/shared/Text'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

export default function CardStatusDistribution() {
  const cardData = [
    {
      status: 'Active',
      count: 950,
      color: 'bg-active',
      strokeColor: '#01A4AF',
    },
    {
      status: 'Expired',
      count: 520,
      color: 'bg-expire',
      strokeColor: '#FFB800',
    },
    {
      status: 'Inactive',
      count: 430,
      color: 'bg-inactive',
      strokeColor: '#8C8C8C',
    },
    {
      status: 'Blocked',
      count: 350,
      color: 'bg-blocked',
      strokeColor: '#FF4D4F',
    },
    { status: 'Lost', count: 200, color: 'bg-lost', strokeColor: '#FF7850' },
  ]

  const totalCards = cardData.reduce((sum, item) => sum + item.count, 0)

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className='bg-white p-2 shadow-md rounded-md border border-gray-200'>
          <p className='font-medium'>{data.status}</p>
          <p className='text-gray-600'>{data.count} cards</p>
          <p className='text-gray-500 text-sm'>
            {((data.count / totalCards) * 100).toFixed(1)}%
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className='border rounded-lg bg-white'>
      <div className='flex justify-between items-center px-4 pt-4'>
        <h3 className='font-medium text-lg leading-6'>
          Card Status Distribution
        </h3>
      </div>

      <div className='p-4 flex flex-col items-center'>
        <div className='w-48 h-48 my-4 relative'>
          <ResponsiveContainer width='100%' height='100%'>
            <PieChart>
              <Pie
                data={cardData}
                cx='50%'
                cy='50%'
                innerRadius={80}
                outerRadius={90}
                paddingAngle={2}
                dataKey='count'
                startAngle={90}
                endAngle={-270}
                cornerRadius={10}
              >
                {cardData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.strokeColor}
                    stroke='none'
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>

          <div className='absolute inset-0 flex items-center justify-center flex-col gap-2'>
            <Text style='text-[12px] font-[400] text-gray-500'>
              Total Cards
            </Text>
            <Text style='text-[24px] font-[500]'>{totalCards}</Text>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center gap-4 flex-wrap p-4'>
        {cardData.map((item, index) => (
          <Text
            key={index}
            style='flex items-center gap-1 text-[12px] font-[400] text-gray-500'
          >
            <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
            {item.status}
          </Text>
        ))}
      </div>
    </div>
  )
}
