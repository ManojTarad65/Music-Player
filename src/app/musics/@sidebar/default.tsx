import React from 'react'
import { Clock, HomeIcon, TrendingUp } from 'lucide-react'

const Default = () => {
  return (
    
         <aside className='w-64 bg-[#111111] text-white flex flex-col justify-between min-h-screen p-4'>

<section>
    <h2>MENU</h2>
    <nav className='mt-4'>
        <ul>
            <li className='flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer'>
                <HomeIcon />
                <span>Home</span>
            </li>
            <li className='flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer'>
                <TrendingUp />
                <span>Trending</span>
            </li>
            <li className='flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer'>
                <Clock/>
                <span>Recent</span>
            </li>
        </ul>
    </nav>
</section>
<section>
    <h2 className='mt-10 text-xl font-bold'>FAVORITE</h2>
    <ul className=' mb-[2rem]'>

       {[1,2,3,4,5].map((i) => (
        <div key={i} className='flex mt-[2rem] gap-4'>
            <img src="https://png.pngtree.com/png-vector/20240529/ourmid/pngtree-the-square-music-note-symbol-looks-colorful-and-abstract-vector-png-image_6969865.png" alt="" className='h-15 w-15 bg-gray-700 rounded-md'/>
            <div>
                <p className='text-white'>Random</p>
                <p className='text-gray-400 text-sm'>Person</p>
            </div>
        </div>
       ))}
    </ul>
</section>
</aside>
    
  )
}

export default Default