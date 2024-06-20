import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='p-12 w-full h-[80px] relative flex items-center justify-between px-4 md:px-20 '>
      <div className='flex items-center'>
        <img className='p-1 h-[50px] md:h-[95px] rounded-full' src="https://s3-alpha-sig.figma.com/img/47cd/d9ac/c42642e25117c4c1900830382a32f75b?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JX2z4CMQgblH4Rd8Zd95Ci0cJICFw0kDLHVOq3FJH~X7HyWraiYMR7dwPhgjo~~Ne8Zs8H4-l-sg3d8pUIY2QvUAxvLVAq2jTfJkbUVZzQyWr0SH2ID5R4F27ouOTI80uztVGczPP4bUU8Q2SCUqhtcqsLmo84hQfLkExx5rVd15YktxOauusR85U6X5DcAmBlz~h0FGAOSeJLw2HTZqBVH59T8VkH0I-PepViAPVE76QkyTqUkwVDlcI60fVfoCKNqMrVwpXoJZoLLUBhevGFZG3aMET0~wCPRHE~cZETsDNQhV14--Fu3-bNAJ3qG4Roc-wFGszmCv4mYKyzIz8w__" alt="Apna Thali Logo" />
        <h1 className='font-extrabold text-xl md:text-2xl ml-4'>Apna <span className='text-red-600'>Thali</span></h1>
      </div>
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-gray-500 focus:outline-none'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
          </svg>
        </button>
      </div>
      <div className={`absolute top-full left-0 w-full  md:static md:flex md:items-center md:w-auto transition-all duration-300 ease-in ${isOpen ? 'block' : 'hidden'}`}>
        <div className='flex flex-col md:flex-row md:gap-4'>
          <a href="#" className='block px-2 py-1 text-gray-700 hover:text-red-600'>Home</a>
          <a href="#" className='block px-2 py-1 text-gray-700 hover:text-red-600'>Plans</a>
          <a href="#" className='block px-2 py-1 text-gray-700 hover:text-red-600'>Restaurants</a>
          <a href="#" className='block px-2 py-1 text-gray-700 hover:text-red-600'>Shop</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
