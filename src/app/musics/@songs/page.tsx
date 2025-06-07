
import { Clock, Heart} from 'lucide-react';
import React from 'react'
import Link from 'next/link';

const SongsList = async() => {
    await new Promise((resolve) => 
        setTimeout(() => {
            resolve("content is currently loading...");
        }, 3000)
    );
    const songs = [
        {
            id: 1,
            title: "Since Tum",
            artist: "Artist 1",
            album: "Album 1",
            duration: "3:45",
        },
        {
            id: 2,
            title: "Sajna",
            artist: "Artist 2",
            album: "Album 2",
            duration: "4:30",
        },
        {
            id: 3,
            title: "Lapata",
            artist: "Artist 3",
            album: "Album 3",
            duration: "5:15",
        },
    ];
  return (
    <div className='w-[96%] mx-auto px-4 '>
        <h2 className='text-3xl  text-white mt-8 font-bold mb-6'>Songs Collections</h2>
        <ul className='space-y-4'>
        {songs.map((song) => (
            <Link href={`/musics/${song.id}`} key={song.id}>
         
                 <li className="flex items-center justify-between  gap-2 p-3 hover:bg-[#2A2929] rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105" >
                    <div className='flex items-center gap-5 '>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxWxcERumyX0gGuc0OC2Zk1tNHAPeVQAPZCA&s" 
                        className='h-15 w-15 bg-gray-700 rounded-md flex-shrink-0' />
                        <div>
                            <h3 className='text-white font-medium'>{song.title}</h3>
                            <p className='text-gray-400 text-sm'>{song.artist}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-6 text-gray-400 '>
                        <div className='flex items-center gap-1'>
                            <Clock size={16} />
                            <span>{song.duration}</span>
                        </div>
                        <Heart size={16}  className='cursor-pointer hover:text-red-500'/>
                        <button className='text-lg font-bold'>⋮</button>
                    </div>
                </li>
            </Link>
           
            ))}
        </ul>
    </div>
  )
}

export default SongsList