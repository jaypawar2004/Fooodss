import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Plan = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://devserver.apnathali.com/api/v1/get/all/shop')
      .then(response => {
        setData(response.data.data.slice(0, 6));  // Fetch and limit to 6 cards
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the data', error);
        setLoading(false);
      });
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
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  if (loading) {
    return <div className='text-center'>Loading...</div>;
  }

  return (
    <div className='w-full p-4 md:p-12'>
      <h1 className='text-center font-bold capitalize text-2xl mb-5'>
        jaha jaao waha khao <span className='text-red-500'>plans</span>
      </h1>

      <Slider {...settings}>
        {data.map((restaurant, index) => (
          restaurant.plans.slice(0, 1).map((plan) => (
            <div key={index} className="p-4">
              <div className="relative w-full bg-gradient-to-t from-red-200 bottom-[3.7%] z-0 rounded-3xl p-4 hover:transform hover:scale-105 hover:-translate-y-2 transition-transform duration-300">
                <img className='absolute left-2 top-1 w-8 h-8' src="/src/assets/Ellipse 57.png" alt="" />
                <div className="relative">
                  <img className="w-full h-40 object-cover rounded-t-3xl" src={`https://devserver.apnathali.com/${restaurant.logo}`} alt="" />

                  {/* Price Circle */}
                  <div className="absolute top-12 right-12 mt-2 bg-yellow-400 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm">
                    ₹{plan.amount}
                  </div>
                </div>

                <div className='w-full h-full text-center flex items-center justify-center relative mt-4'>
                  <div className="z-0 overflow-hidden relative left-0 w-[40px] h-[40px] rounded-full border-2">
                    <img className='object-cover' src="https://s3-alpha-sig.figma.com/img/add1/75d2/10c497455f79cd54356f8b1580320962?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fdZNNr6ZSQT-uNFRpUwGlFiot9D4v2xrDkxGcMEqJVKUvZ7Q8TfP3JMGsWT0GUk36KHoeT0MxAR618TzaY1XcwUMfzJG-pcZO9O5ZX2Dv9QAEaauyxEUtpNk8qieG-tl05dYU87UJJPMCokiCAMfpFF5M70qBdvRG~UB4mg0kRKBeoXIwXDib8k9Zl3bW9GKY8WVUiVbmYH-UOQse-wbkS8wwQbPy-zxVXMwsrO8JsbugFafw3alGURrkyBjZE8I9yz3YjDSNyq1L-fkkIE~4g-Kn1P2NaqKR4tq0epGLtOXFONfMlmqrzKD2ZvRrOKkYA~2wP08RTxnzlsZJ63tTw__" alt="" />
                  </div>
                  <div className="z-10 overflow-hidden relative -left-4 w-[40px] h-[40px] rounded-full border-2">
                    <img src="https://s3-alpha-sig.figma.com/img/aa80/16c7/675a32b09e0ab55a7d60807c55cf8df5?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m1eJ3-9VZ7Q2u4l-PdwXXLFmDTS4IbU8hQO3s~~L9Y6wSRYBRBWlB6QWAviTwGKoR-8e-HEPa2LApM9WH3EIpi5i2xdVQD1iAYZomyehCNwR~qwZq3RM5oZIJdMR-wMi4mPsIn~wTVXGZGc5HZkhbT6wOIzWCYcyQbRy3R8xNbdJQuNO46RUuF0QCG4FuB02MIzN8Jv0T1SquvbzQw89QaAd3Feu5bYZJr4kUgIB9bGHXqtSGvFqZGsD1zSIquF5BYU24I-f5qu1bljuOkUs997wfPLYs6vTG9b~xcdlP9pFVpefkse4Od3tF2vUFa9XyYQVFntT0a-Re8Mk3mesTQ__" alt="" />
                  </div>
                  <div className="z-20 overflow-hidden relative -left-8 w-[40px] h-[40px] rounded-full border-2">
                    <img className='object-bottom' src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
                  <img className='size-10 relative -left-4' src="/src/assets/icons8-star-48.png" alt="" />
                  <h2 className='font-bold'>({restaurant.averageRating})</h2>
                </div>

                <h1 className='w-full text-center text-xl text-red-500 font-extrabold mt-8'>{plan.planName}</h1>
                <p className='p-4 capitalize text-center font-semibold text-zinc-600 -mt-4'>
                  In this plan, you can get meals for ₹{plan.amount}.
                </p>    

                <button className='p-3 w-full mt-4 bg-red-500 rounded-full text-white'>Purchase Now</button>
              </div>
            </div>
          ))
        ))}
      </Slider>
    </div>
  );
}

export default Plan;
