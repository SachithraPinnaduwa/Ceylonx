import React from 'react'

function Box({colour, headings, lists, maxWordsPerRow, image}) {
  const listItemStyle = {
    maxWidth: `${maxWordsPerRow * 100}ch`, 
    overflowWrap: 'break-word',
  };

  return (
    <div className={`rounded-3xl px-6 pb-10 pt-6 ${colour[0]}`} >
        <div className='flex flex-row justify-center items-center mb-4'>
            <img src={image} alt="" width={100} />
      <h1 className=' text-[18px] font-bold text-left'>{headings}</h1>
      </div>
      <div>
        <ul className={`text-left list-square font-semibold text-sm ${colour[1]}`}>
          {lists.map((list, index) => (
            <li className='mb-2' style={listItemStyle} key={index}>{list}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Box;
