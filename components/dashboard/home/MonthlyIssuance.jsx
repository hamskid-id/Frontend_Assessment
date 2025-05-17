'use client'

import { Bar } from 'react-chartjs-2'
import { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Text } from '@/components/shared/Text'
import { Maximize2 } from 'lucide-react'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function MonthlyIssuance() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const labels = ['May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov']

  const data = {
    labels,
    datasets: [
      {
        label: 'Personalized',
        data: [12, 19, 15, 27, 22, 18, 25],
        backgroundColor: '#014DAF',
        barPercentage: 0.6,
        categoryPercentage: 0.8,
        width: 40,
        borderRadius: {
          topLeft: 8,
          topRight: 8,
          bottomLeft: 0,
          bottomRight: 0,
        },
        stack: 'Stack 0',
        base: 0,
      },
      {
        label: 'Instant',
        data: [8, 15, 10, 20, 18, 12, 22],
        backgroundColor: '#CCE2FF',
        barPercentage: 0.6,
        categoryPercentage: 0.8,
        width: 40,
        borderRadius: {
          topLeft: 8,
          topRight: 8,
          bottomLeft: 0,
          bottomRight: 0,
        },
        stack: 'Stack 0',
        base: 0,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
    },
  }

  if (!isMounted) return null

  return (
    <div className='border rounded-lg bg-white'>
      <div className='flex justify-between items-center px-4 pt-4'>
        <Text style='font-[500] text-[18px] leading-[24px]'>
          Monthly Issuance
        </Text>
        <Maximize2 className='w-5 h-5 text-gray-300 cursor-pointer' />
      </div>
      <div className='relative h-64 p-4'>
        <Bar options={options} data={data} />
      </div>
      <div className='flex items-center justify-center gap-4 border-t p-4'>
        <Text style='flex items-center gap-1 text-[12px] font-[400] text-gray-400'>
          <span className='w-2 h-2 rounded-full bg-blue-900'></span>{' '}
          {'Personalized'}
        </Text>
        <Text style='flex items-center gap-1 text-[12px] font-[400] text-gray-500'>
          <span className='w-2 h-2 rounded-full bg-blue-200'></span> {'Instant'}
        </Text>
      </div>
    </div>
  )
}
