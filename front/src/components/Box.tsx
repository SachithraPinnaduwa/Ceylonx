
function Box({colour, headings, lists, maxWordsPerRow, image}:
   {colour: string[], headings: string, lists: string[], maxWordsPerRow: number, image: string}) {
  const listItemStyle = {
    maxWidth: `${maxWordsPerRow * 100}ch`, 
    overflowWrap: 'break-word',
  };

  return (
    <div className={`rounded-3xl px-6 pb-10 pt-6 ${colour[0]}`} >
        <div className='flex flex-row justify-center items-center mb-4'>
            <img src={image} alt="" width={100} className=' lg:block hidden'/>
      <h1 className=' text-[18px] font-bold lg:text-left text-center'>{headings}</h1>
      </div>
      <div className=''>
        <ul className={`lg:text-left list-square font-semibold text-center text-sm ${colour[1]}`}>
          {lists.map((list, index) => (
            <li className='mb-2' style={listItemStyle} key={index}>{list}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Box;
