import React from 'react'

const DownloadInfo = () => {
  return (
    <div className='w-full h-screen p-12 flex '>
    <img className='absolute' src="/src/assets/Rectangle 4599.png" alt="" />
     
      {/* <img className='w-full h-full object-cover' src="/src/assets/Screenshot 2024-06-19 160619.png" alt="" /> */}
    <div className="txt w-1/2 p-12">
      <h1 className='font-bold text-5xl w-[70%] mt-20'>It’s Now <span className='text-red-500'>More Easy</span> to <span className='text-red-500'>Purchase Plan</span> by Our Mobile <span className='text-red-500'>App</span></h1>
      <p className='w-[70%] mt-10 font-semibold'>All you need to do is downlode one of the best delivery apps, make a and most companies are opting  for mobile app devlopment for food delivery</p>
     <div className='flex mt-5'>

      <a href="#"><img className='w-40' src="/src/assets/Mobile app store badge.png" alt="" /></a>
      <a href="#"><img className='w-36 ml-4' src="/src/assets/Mobile app store badge (1).png" alt="" /></a>
     </div>
    </div>
    <div className="imgs w-1/2 relative mt-20">
    <img className='absolute z-30 left-44 -top-32' src="/src/assets/Group 33331.png" alt="" />
    <img className='absolute z-20 left-32 -top-12' src="/src/assets/Ellipse 44.png" alt="" />
    <img className='absolute z-10 left-44' src="/src/assets/unsplash_jWU9FpLW7fI.png" alt="" />
    <img className='absolute z-0 -bottom-40 w-[150%] h-[100%] -rotate-4' src="/src/assets/Group 8441.png" alt="" />
    </div>
    </div>
  )
}

export default DownloadInfo
