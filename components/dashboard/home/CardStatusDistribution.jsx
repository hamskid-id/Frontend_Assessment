'use client'
import { useState, useEffect } from 'react'
import { Text } from '@/components/shared/Text'

export default function CardStatusDistribution() {
  const cardData = [
    {
      status: 'Active',
      count: 950,
      color: 'bg-active',
      strokeColor: '#4DAF01',
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

  const calculateSegments = () => {
    const radius = 60
    const circumference = 2 * Math.PI * radius
    const gapSize = 4
    const totalSegments = cardData.length
    const adjustedCircumference = circumference - gapSize * totalSegments
    let currentOffset = 0
    return cardData.map((item) => {
      const percentage = item.count / totalCards
      const strokeLength = percentage * adjustedCircumference
      const segment = {
        stroke: item.strokeColor,
        strokeLength,
        strokeDasharray: `${strokeLength} ${circumference - strokeLength}`,
        strokeDashoffset: -currentOffset,
      }
      currentOffset += strokeLength + gapSize
      return segment
    })
  }

  const [segments, setSegments] = useState([])
  useEffect(() => {
    setSegments(calculateSegments())
  }, [])

  return (
    <div className='border rounded-lg bg-white'>
      <div className='flex justify-between items-center px-4 pt-4'>
        <Text style='font-medium text-lg leading-6'>
          Card Status Distribution
        </Text>
      </div>
      <div className='p-4 flex justify-center'>
        <div className='relative w-48 h-48 my-4'>
          <svg className='w-full h-full' viewBox='0 0 130 130'>
            <circle
              cx='65'
              cy='65'
              r='60'
              fill='none'
              stroke='#ffffff'
              strokeWidth='8'
            />

            {segments.map((segment, index) => (
              <circle
                key={index}
                cx='65'
                cy='65'
                r='60'
                fill='none'
                stroke={segment.stroke}
                strokeWidth='7'
                strokeLinecap='butt'
                strokeDasharray={segment.strokeDasharray}
                strokeDashoffset={segment.strokeDashoffset}
                transform='rotate(-90 65 65)'
                style={{
                  transition:
                    'stroke-dashoffset 0.5s ease, stroke-width 0.3s ease',
                }}
                className='hover:stroke-[8]'
              />
            ))}
          </svg>

          <div className='absolute inset-0 flex items-center justify-center flex-col gap-2'>
            <Text style='text-[12px] font-[400] text-gray-500'>
              Total Cards
            </Text>
            <Text style='text-[24px] font-medium'>{totalCards}</Text>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center gap-4 flex-wrap p-4'>
        {cardData.map((item, index) => (
          <Text
            key={index}
            style='flex items-center gap-1 text-[12px] font-light text-gray-500'
          >
            <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
            {item.status}
          </Text>
        ))}
      </div>
    </div>
  )
}
