import React from 'react'

function VerticalBox({titles ,listitems,image,widths}) {
  return (
    <div className='  text-left flex flex-row h-full'>
        <div className=' mr-4'>
            <img src={image} alt="" width={widths} />
        </div>
        <div>
        <h1 className='text-2xl font-bold'>{titles}</h1>
        
        <ul>
            {listitems.map((listitem, index) => (
                <li key={index}>{listitem}</li>
            ))}
        </ul>
        </div>
    </div>
  )
}

export default VerticalBox