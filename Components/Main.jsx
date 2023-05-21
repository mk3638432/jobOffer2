"use client"
import React from 'react'
import SideNav from './SideNav'
import SearchIcon from '@mui/icons-material/Search';
import ToggleOffSharpIcon from '@mui/icons-material/ToggleOffSharp';
import InterpreterModeSharpIcon from '@mui/icons-material/InterpreterModeSharp';
import DirectionsBikeSharpIcon from '@mui/icons-material/DirectionsBikeSharp';
import Person4SharpIcon from '@mui/icons-material/Person4Sharp';
import EmojiPeopleSharpIcon from '@mui/icons-material/EmojiPeopleSharp';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Main = () => {
  return (
    <div className='w-[100%]  flex'>
        <div className='w-[20%]  border-r-2'>
        <SideNav/>
        </div>
        <div className='w-[80%]  ml-4 mr-4'>
            <div className='flex justify-between m-2'> 
                <div>
                <SearchIcon />
                </div>
                <div>
                    <p className='bg-green-600 rounded-full w-8 text-center h-7 font-bold text-white'>A</p>
                </div>
            </div>
            <div className='flex justify-between mt-10'>
                
            <div> 
                <h2 className='font-bold'>Job Offer</h2>
                <ol className='flex'>
                    <li className='mr-10 font-bold'> Dashboard</li>
                    <li className='list-disc mr-10 font-semibold'>Job</li>
                    <li className='mr-10 list-disc font-light'>Offers</li>
                </ol>
            </div>
            <div> 
                <button className='bg-green-600 font-bold rounded text-white w-[130px] p-2'>+ New Offer</button>
            </div>
            </div>
            <div className='border w-[90%] m-auto rounded-xl shadow-xl border-gray-400 border-t-0 border-b-2 mt-10 grid grid-cols-3 gap-10 p-10'> 
               <div className='relative'>
                <p className='absolute top-6 left-[-30px]'>💼</p>
                <p className='font-bold'>Total Offered</p>
                <p>20 invoice</p>
                <p className='text-blue-400 font-bold'>$1,205,75</p>
               </div>
               <div className='relative'>
                <p className='absolute top-6 left-[-30px]'>🗒️</p>
                <p className='font-bold'>Pending Offe</p>
                <p>20 invoice</p>
                <p className='text-yellow-400 font-bold'>$1,205,75</p>
               </div>
               <div className='relative'>
                <p className='absolute top-6 left-[-30px]'>📝</p>
                <p className='font-bold'>Pending Onbording</p>
                <p>20 invoice</p>
                <p className='text-orange-400 font-bold'>$1,205,75</p>
               </div>
               <div className='relative'>
                <p className='absolute top-6 left-[-30px]'>🔔</p>
                <p className='font-bold'>Joined Overdue</p>
                <p>20 invoice</p>
                <p className='text-orange-600 font-bold'>$1,205,75</p>
               </div>
               <div className='relative'>
                <p className='absolute top-6 left-[-30px]'>✅</p>
                <p className='font-bold'>Joined</p>
                <p>20 invoice</p>
                <p className='text-green-400 font-bold'>$1,205,75</p>
               </div>
               <div className='relative'>
                <p className='absolute top-6 left-[-30px]'>❌</p>
                <p className='font-bold'>Not Joined</p>
                <p>20 invoice</p>
                <p className=' font-bold'>$1,205,75</p>
               </div>
            </div>
            {/* Totals offered */}
            <div className='border w-[90%] m-auto mt-5 rounded-lg'> 
            <div className='flex justify-evenly gap-10 mt-4 h-10 items-center bg-gray-200'> 
            <p className='font-bold'> <span className='border bg-blue-300 p-1 rounded-md'> 20 </span> Total offered</p>
             <p><span className='border bg-yellow-400 p-1 rounded-md'> 20 </span> Total offered</p>
             <p><span className='border bg-orange-400 p-1 rounded-md'> 20 </span> Total offered</p>
             <p><span className='border bg-orange-600 p-1 rounded-md'> 20 </span> Total offered</p>
             <p><span className='border bg-green-300 p-1 rounded-md'> 20 </span> Total offered</p>
             <p><span className='border bg-black/10 p-1 rounded-md'> 20 </span> Total offered</p>
             </div>
             {/* Data */}
             <div className=''>
                <div className='h-20 flex items-center justify-evenly'>
                <select className='h-10 border '>
                    <option>All</option>
                    <option>Name</option>
                    <option>Joinig Date</option>
                    <option>Designation</option>
                </select>
                <input type='date' className='w-[20%] h-10'/>
                <input type='date' className='w-[20%] h-10'/>
                <SearchIcon />
                <input type='text' placeholder='Search' className='border w-[30%] rounded-lg h-10'/>
                </div>
             </div>
             {/* Adding Emlopyee */}
             <div className='flex justify-evenly  m-auto bg-gray-200 p-4'>
             <div className=''> 
                <p className='font-bold'>Name</p>
                <p>Role</p>
             </div>
             <div> 
                <p className='font-bold'>Joining Date</p>
                <p>offering Date</p>
             </div>
             <div> 
                <p className='font-bold'>Designation</p>
                <p>Department</p>
             </div>
             <div> 
                <p className='font-bold'>Phone no</p>
                <p>Email</p>
             </div>
             <div> 
                <p className='font-bold'>Location</p>
                <p>Business Function</p>
             </div>
             <div> 
                <p className='font-bold'>Status</p>
                <p>Employment Type</p>
             </div>
             </div>
        {/* Adding Emlopeee Details */}
         <div className='border-b-2 py-4'> 
             <div className='flex justify-evenly mt-10'> 
             <div>
               <PersonPinIcon color="secondary" fontSize="large"/>
             </div>
                <div> 
                    <p>Emloyee Name</p>
                    <p>Role</p>
                </div>
                <div> 
                    <p>Joining Date</p>
                    <p>Employee Code</p>
                </div>
                <div> 
                    <p>Designation</p>
                    <p>Department</p>
                </div>
                <div> 
                    <p>Phone Number</p>
                    <p>Email</p>
                </div>
                <div> 
                    <p>Location</p>
                    <p>Business</p>
                    <p>Function</p>
                </div>
                <div> 
                    <button className='text-green-500 bg-green-100 p-1 rounded-md'>Joined</button>
                    <p>Full Time</p>
                </div>
             </div>
             <div className='flex justify-evenly mt-10'> 
             <div>
               <EmojiPeopleSharpIcon color="secondary" fontSize="large"/>
             </div>
                <div> 
                    <p>Emloyee Name</p>
                    <p>Role</p>
                </div>
                <div> 
                    <p>Joining Date</p>
                    <p>Employee Code</p>
                </div>
                <div> 
                    <p>Designation</p>
                    <p>Department</p>
                </div>
                <div> 
                    <p>Phone Number</p>
                    <p>Email</p>
                </div>
                <div> 
                    <p>Location</p>
                    <p>Business</p>
                    <p>Function</p>
                </div>
                <div> 
                    <button className='text-green-500 bg-green-100 p-1 rounded-md'>Joined</button>
                    <p>Full Time</p>
                </div>
             </div> <div className='flex justify-evenly mt-10'> 
             <div>
               <EmojiPeopleSharpIcon color="primary" fontSize="large"/>
             </div>
                <div> 
                    <p>Emloyee Name</p>
                    <p>Role</p>
                </div>
                <div> 
                    <p>Joining Date</p>
                    <p>Employee Code</p>
                </div>
                <div> 
                    <p>Designation</p>
                    <p>Department</p>
                </div>
                <div> 
                    <p>Phone Number</p>
                    <p>Email</p>
                </div>
                <div> 
                    <p>Location</p>
                    <p>Business</p>
                    <p>Function</p>
                </div>
                <div> 
                    <button className='text-green-500 bg-green-100 p-1 rounded-md'>Joined</button>
                    <p>Full Time</p>
                </div>
             </div> <div className='flex justify-evenly mt-10'> 
             <div>
               <InterpreterModeSharpIcon color="primary" fontSize="large"/>
             </div>
                <div> 
                    <p>Emloyee Name</p>
                    <p>Role</p>
                </div>
                <div> 
                    <p>Joining Date</p>
                    <p>Employee Code</p>
                </div>
                <div> 
                    <p>Designation</p>
                    <p>Department</p>
                </div>
                <div> 
                    <p>Phone Number</p>
                    <p>Email</p>
                </div>
                <div> 
                    <p>Location</p>
                    <p>Business</p>
                    <p>Function</p>
                </div>
                <div> 
                    <button className='text-green-500 bg-red-100 p-1 rounded-md'>pending</button>
                    <p>Full Time</p>
                </div>
             </div> <div className='flex justify-evenly mt-10'> 
             <div>
               <InterpreterModeSharpIcon color="secondary" fontSize="large"/>
             </div>
                <div> 
                    <p>Emloyee Name</p>
                    <p>Role</p>
                </div>
                <div> 
                    <p>Joining Date</p>
                    <p>Employee Code</p>
                </div>
                <div> 
                    <p>Designation</p>
                    <p>Department</p>
                </div>
                <div> 
                    <p>Phone Number</p>
                    <p>Email</p>
                </div>
                <div> 
                    <p>Location</p>
                    <p>Business</p>
                    <p>Function</p>
                </div>
                <div> 
                    <button className='text-green-500 bg-green-100 p-1 rounded-md'>Joined</button>
                    <p>Full Time</p>
                </div>
             </div> <div className='flex justify-evenly mt-10'> 
             <div>
               <DirectionsBikeSharpIcon color="secondary" fontSize="large"/>
             </div>
                <div> 
                    <p>Emloyee Name</p>
                    <p>Role</p>
                </div>
                <div> 
                    <p>Joining Date</p>
                    <p>Employee Code</p>
                </div>
                <div> 
                    <p>Designation</p>
                    <p>Department</p>
                </div>
                <div> 
                    <p>Phone Number</p>
                    <p>Email</p>
                </div>
                <div> 
                    <p>Location</p>
                    <p>Business</p>
                    <p>Function</p>
                </div>
                <div> 
                    <button className='text-green-500 bg-green-100 p-1 rounded-md'>Joined</button>
                    <p>Full Time</p>
                </div>
             </div> <div className='flex justify-evenly mt-10'> 
             <div>
               <DirectionsBikeSharpIcon color="primary" fontSize="large"/>
             </div>
                <div> 
                    <p>Emloyee Name</p>
                    <p>Role</p>
                </div>
                <div> 
                    <p>Joining Date</p>
                    <p>Employee Code</p>
                </div>
                <div> 
                    <p>Designation</p>
                    <p>Department</p>
                </div>
                <div> 
                    <p>Phone Number</p>
                    <p>Email</p>
                </div>
                <div> 
                    <p>Location</p>
                    <p>Business</p>
                    <p>Function</p>
                </div>
                <div> 
                    <button className='text-green-500 bg-green-100 p-1 rounded-md'>Joined</button>
                    <p>Full Time</p>
                </div>
             </div> <div className='flex justify-evenly mt-10'> 
             <div>
               <Person4SharpIcon color="primary" fontSize="large"/>
             </div>
                <div> 
                    <p>Emloyee Name</p>
                    <p>Role</p>
                </div>
                <div> 
                    <p>Joining Date</p>
                    <p>Employee Code</p>
                </div>
                <div> 
                    <p>Designation</p>
                    <p>Department</p>
                </div>
                <div> 
                    <p>Phone Number</p>
                    <p>Email</p>
                </div>
                <div> 
                    <p>Location</p>
                    <p>Business</p>
                    <p>Function</p>
                </div>
                <div> 
                    <button className='text-green-500 bg-green-100 p-1 rounded-md'>Joined</button>
                    <p>Full Time</p>
                </div>
             </div>
             <div className='flex justify-evenly mt-10'> 
             <div>
               <Person4SharpIcon color="secondary" fontSize="large"/>
             </div>
                <div> 
                    <p>Emloyee Name</p>
                    <p>Role</p>
                </div>
                <div> 
                    <p>Joining Date</p>
                    <p>Employee Code</p>
                </div>
                <div> 
                    <p>Designation</p>
                    <p>Department</p>
                </div>
                <div> 
                    <p>Phone Number</p>
                    <p>Email</p>
                </div>
                <div> 
                    <p>Location</p>
                    <p>Business</p>
                    <p>Function</p>
                </div>
                <div> 
                    <button className='text-green-500 bg-green-100 p-1 rounded-md'>Joined</button>
                    <p>Full Time</p>
                </div>
             </div>
              <div className='flex justify-evenly mt-10'> 
             <div>
               <PersonPinIcon color="secondary" fontSize="large"/>
             </div>
                <div> 
                    <p>Emloyee Name</p>
                    <p>Role</p>
                </div>
                <div> 
                    <p>Joining Date</p>
                    <p>Employee Code</p>
                </div>
                <div> 
                    <p>Designation</p>
                    <p>Department</p>
                </div>
                <div> 
                    <p>Phone Number</p>
                    <p>Email</p>
                </div>
                <div> 
                    <p>Location</p>
                    <p>Business</p>
                    <p>Function</p>
                </div>
                <div> 
                    <button className='text-green-500 bg-green-100 p-1 rounded-md'>Joined</button>
                    <p>Full Time</p>
                </div>
                </div>   
             </div>
              {/* Footer  */}
              <div className='flex justify-between h-20 shadow-lg items-center'> 
                    <div className='flex gap-10 items-center'>
                        <ToggleOffSharpIcon fontSize="large" />
                        <h2>Dense</h2>
                    </div>
                    <div className='flex gap-10'>
                        <p>Rows Per Pages</p>
                        <p>10</p>
                        <p>{"^"}</p>
                        <p>1-5 of 24</p>
                        <p>{"<"} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main