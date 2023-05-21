import React from 'react'
const SideNav = () => {
  return (
    <div className='h-screen'>
        <div>
            <div className='mt-10  w-[70%] m-auto'>
            <h3 className='border bg-gray-200 p-4 rounded-md text-center '>Manoj Kumar</h3>
            <div className='mt-4'>
                <p className='font-bold'>PEOPLE CARE SYSTEM</p>
                <button className='mt-4 border w-[100%] p-2 rounded-lg font-bold text-green-500 bg-green-200'>HOME</button>
                <h2 className='mt-8 font-bold'>MANAGEMENT</h2>
                <h2 className='cursor-pointer mt-6 relative'>Employee <span className='absolute right-0'> {">"}</span> </h2>
                <h2 className='mt-6 cursor-pointer relative'>Attendance  <span className='absolute right-0'> {">"}</span></h2>
                <h2 className='cursor-pointer mt-6 relative'>Leaves  <span className='absolute right-0'> {">"}</span></h2>
                <h2 className='cursor-pointer mt-6 relative'>Payroll  <span className='absolute right-0'> {">"}</span></h2>
                <h2 className='mt-6 '>Seperation</h2>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SideNav