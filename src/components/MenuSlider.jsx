import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MenuSlider = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('https://devserver.apnathali.com/api/v1/get/all/shop');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setRestaurants(result.data.slice(0, 6));  // Fetch and limit to 6 cards
      } catch (error) {
        setError(error.message);
      }
    };

    fetchRestaurants();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (restaurants.length === 0) {
    return <div className='text-center'>Loading...</div>;
  }

  return (
    <div className='w-full p-10'>
      <h1 className='font-bold text-2xl text-center'>Featured Restaurants</h1>
      <Slider {...settings} className='mt-10'>
        {restaurants.map((restaurant) => (
          <div key={restaurant._id} className='p-5'>
            <div className='img w-full h-[200px] sm:h-[250px] md:h-[300px]'>
              <img 
                className='w-full h-full rounded-3xl object-cover transition-transform duration-300 hover:scale-105' 
                src={`https://devserver.apnathali.com/images/${restaurant.logo}`} 
                alt={restaurant.name} 
              />
            </div>
            <h2 className='font-semibold text-xl mt-2'>{restaurant.name}</h2>
            <div className='flex flex-wrap items-center justify-center gap-3 text-orange-300 mt-5'>
              {restaurant.plans.map((plan, index) => (
                <h2 key={index} className='flex items-center justify-center px-5 border-2 rounded-md'>
                  <img 
                    className='w-[25px] h-[25px]' 
                    src='https://s3-alpha-sig.figma.com/img/6ad7/c397/4c1b43b8243a0bc710970b820964567a?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PK2Cc9R6QW5FyUBBRFDoqAsJXPn7jabz4xOC8VK0iZIqIfJZ0ZbfpKKR~M5clUhEwoqTY0G8jZoNJBJo8~qvu~d8l3ijMPgPzdaROqecx6EMBP3wNxGEb1zPExLWCm4-HuVDXuSz-SgKAeSdjxaB~CoyTsHw337xuqiq8ub-g7InHzIamcWPd8AMgw5Cad7DF-aSMKLhgAPOUIJzq2Jof-rOE7vEey2iiH~OxZXIMuTanBIxVxwS7iGBltuUJ84cg3tp-SyGMjz6Wuez-lo7BWJCaiTChpcqtUD6Hp9ijOXFX1xZmCXzRyJLKQXThjFuoRcemEhZALXiCA5dck3pyQ__' 
                    alt='' 
                  />
                  {plan.amount}
                </h2>
              ))}
            </div>
          </div>
        ))}
      </Slider>
      <div className='mt-20 flex justify-center'>
        <h1 className='bg-[#FF4B3C] px-3 py-2 border-2 rounded-full'>
          See All Restaurants
          <i className="ml-2 text-2xl bg-white p-2 text-[#FF4B3C] rounded-full ri-arrow-right-s-line"></i>
        </h1>
      </div>
    </div>
  );
};

export default MenuSlider;
