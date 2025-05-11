import React from 'react'
import Customer from '@/components/Customer'
import ExperienceCustom from '@/components/ExperienceCustom'

const Customers = () => {
  return (
    <>
    <ExperienceCustom/>
    <div className='flex flex-col gap-10'>
        <Customer/>
        <Customer/>
        <Customer/>
        <Customer/>
        <Customer/>
        <Customer/>
        <Customer/>
        <Customer/>
        <Customer/>
    </div>
  
    </>
  )
}

export default Customers