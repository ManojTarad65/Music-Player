import React, { ReactNode } from 'react'


const Musiclayout = ({childern, sidebar, songs}: 
    {childern: ReactNode, 
    sidebar: ReactNode,
    songs: ReactNode
}) => {
  return (
    <div className='flex'>
        {sidebar}
        <div className='flex-1 p-6 bg-[#564c4c]'>{songs}</div>
        {childern}
    </div>
  )
}

export default Musiclayout