import React from 'react'
import Image from 'next/image'

export default function index() {
  return (
    <div className='max-w-2xl'>
      <div className='overflow-hidden shadow-sm bg-dark rounded-xl'>
        <header className='px-4 py-2.5 flex justify-between items-center'>
          <div className='flex items-center justify-center mt-4'>
            <Image alt="" src="/bangjo.png" width={50} height={50} className='rounded-full' />
            <div className='flex flex-col items-start ml-3'>
              <span className='text-lg font-bold text-white'>Jhon Doe</span>
              <span className='text-xs text-gray-400'>@realjohndoe</span>
            </div>
          </div>
          <Image alt="" src="/tw.svg" width={30} height={30} />
        </header>
        <section className='px-4 py-2.5 space-x-1'>
          <span className='text-white'>Why do they call it 'debugging' when it feels more like 'wildly guessing and hoping for the best'?</span>
          <span className='text-secondary'>#programming #coding #debugging</span>
        </section>
        <div className='px-4 py-2.5 text-gray-500 mb-4 flex items-center'>
          <Image alt="" src="/lv-dark.svg" width={24} height={24} />
          <span className='ml-3 text-gray-400'>650</span>
          <span className='ml-3 text-gray-400'>3:40 PM – Feb 24, 2022</span>
        </div>
      </div>
    </div>
  )
}
