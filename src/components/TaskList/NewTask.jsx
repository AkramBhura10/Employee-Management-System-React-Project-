import React from 'react'

const NewTask = () => {
  return (
    <div className='shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-500 text-sm py-1 rounded'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold '>Make a youtube video</h2>
        <p className='text-sm mt-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, cumque eaque nesciunt natus ipsum enim atque nobis amet deleniti unde soluta ut minima architecto animi nulla aut, dolorem possimus porro?
        </p>
        <div className='mt-6'>
          <button className='bg-blue-500 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask
