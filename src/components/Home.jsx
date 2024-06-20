import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full h-screen p-8 lg:p-20'>
      <div className='lg:w-1/2 h-full flex flex-col items-center lg:items-start justify-center mt-10 lg:mt-20'>
        <h1 className='mb-5 text-4xl lg:text-6xl xl:text-8xl font-bold text-center lg:text-left'>
          Eat Any <br /> where <br />
          <span className='text-zinc-400 '>at just</span>
          <span className='text-red-400'> ₹350</span>
        </h1>
        <p className='mt-5 font-semibold text-lg lg:text-xl text-center lg:text-left'>
          When you purchase the plan "Jaha Jao Waha Khao", you can easily eat by only scanning the QR code in restaurants.
        </p>
        <div className='mt-5'>
          <button className='bg-red-500 px-5 py-2 rounded-3xl mr-5 text-white'>Download App</button>
          <button className='bg-transparent border-2 border-red-500 px-5 py-2 rounded-3xl text-red-500'>Watch Video</button>
        </div>
      </div>
      <div className='w-[15%]'>
        <h1 className='bg-[#F5DDC4] p-2 text-center uppercase font-semibold text-sm rounded-3xl text-red-600'>
          jaha jao waha khao
        </h1>
      </div>
      <div className='w-full lg:w-1/2 h-full flex items-center justify-center mt-10 lg:mt-0'>
        <img className='border-2 rounded-full w-3/4 lg:w-[40vw] h-auto lg:h-[75vh] object-cover' src="https://s3-alpha-sig.figma.com/img/42ec/f8de/9af7810ee18096de9cb4727dbba52472?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kB0CURS6QJZsiv-v262vEBJ2oGzzwPBHR3eOYJaA2zS2ByrrX3pP~ttgQeKQc-YmrjzusnJ3rCbQlBCPXrWXRqlI33gVeg6A6LeV0fTMpBEejxgMV9R3gfQDGUgVFom-ZWjfdwxDYYeRVVk7q-XmfRsx1czm~XO4Djcshhb4qd2ECAT72ZhKwGaSVkFvGf4Ixj~q4sbjt1NH-qAu0jl4K3hZLIt6wG9hZ-Aq86vL4k8RsQhvdmiqVdf6SkS22XumIz9mHCwF47cTgo8Vk6ioyPuXdDbyme1BZfgB8dNf6k1OpAYHWIMM26mSq3gcGXSPhzyKfmBp9YjWkhwDUA7SIw__" alt="" />
      </div>
    </div>
  )
}

export default Home
