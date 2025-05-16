'use client'

import { Line } from 'react-chartjs-2'
import { useState, useEffect, useRef } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { Text } from '@/components/shared/Text'
import { Maximize2 } from 'lucide-react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export default function ThisWeekIncome() {
  const [isMounted, setIsMounted] = useState(false)
  const chartRef = useRef(null)
  const [chartData, setChartData] = useState({
    labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'This Week',
        data: [12, 19, 15, 27, 22, 18, 25],
        borderColor: '#4DAF01',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 5,
        backgroundColor: 'rgba(77, 175, 1, 0.2)',
        fill: true,
        cubicInterpolationMode: 'monotone',
      },
    ],
  })

  useEffect(() => {
    setIsMounted(true)

    if (chartRef && chartRef.current) {
      const chart = chartRef.current

      if (chart) {
        const ctx = chart.canvas.getContext('2d')

        if (ctx) {
          const gradient = ctx.createLinearGradient(0, 0, 0, 300)
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)')
          gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.5)')
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

          const newChartData = { ...chartData }
          newChartData.datasets[0].backgroundColor = gradient
          setChartData(newChartData)
        }
      }
    }
  }, [isMounted])

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
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#333',
        bodyColor: '#666',
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 10,
        displayColors: false,
        callbacks: {
          label: function (context) {
            return `${context.raw}`
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          color: '#888',
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          font: {
            size: 12,
          },
          color: '#888',
          callback: function (value) {
            return value
          },
        },
      },
    },
    elements: {
      line: {
        shadowOffsetX: 0,
        shadowOffsetY: 2,
        shadowBlur: 7,
        shadowColor: 'rgba(177, 164, 175, 0.47)',
      },
    },
  }

  if (!isMounted) return null

  return (
    <div className='border rounded-lg bg-white shadow-sm'>
      <div className='flex justify-between items-center px-4 pt-4'>
        <Text style='font-[500] text-[18px] leading-[24px]'>
          This Week's Income
        </Text>
        <Maximize2 className='w-5 h-5 text-gray-300' />
      </div>
      <div className='relative h-64 p-4'>
        <Line ref={chartRef} options={options} data={chartData} />
      </div>
    </div>
  )
}
