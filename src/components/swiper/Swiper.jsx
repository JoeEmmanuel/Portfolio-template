
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './swiper.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const Swiperjs = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide  className='relative group cursor-pointer overflow-hidden transition-all duration-700 ease-in'>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          <div className=" absolute  group-hover:top-0 group-hover:transition-all group-hover:ease-out group-hover:duration-700 left-0 w-full h-full grid place-content-center bg-gradient-to-b from-black_99 to-black_cc backdrop-blur-xl ">
            <h1 className="text-2xl font-extrabold ">KEET CAFE</h1>
            <p className="text-xs pt-2 text-white px-8 sm:p-2  lg:mx-auto">
              Duis aute irure dololr in reprehendrit in volupate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaevat non
              proident , sunt in culpa qui ifficia deserunt mollit.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide  className='relative group cursor-pointer overflow-hidden transition-all duration-700 ease-in'>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          <div className=" absolute  group-hover:top-0 group-hover:transition-all group-hover:ease-out group-hover:duration-700 left-0 w-full h-full grid place-content-center bg-gradient-to-b from-black_99 to-black_cc backdrop-blur-xl ">
            <h1 className="text-2xl font-extrabold ">KEET CAFE</h1>
            <p className="text-xs pt-2 text-white px-8 sm:p-2  lg:mx-auto">
              Duis aute irure dololr in reprehendrit in volupate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaevat non
              proident , sunt in culpa qui ifficia deserunt mollit.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide  className='relative group cursor-pointer overflow-hidden transition-all duration-700 ease-in'>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          <div className=" absolute  group-hover:top-0 group-hover:transition-all group-hover:ease-out group-hover:duration-700 left-0 w-full h-full grid place-content-center bg-gradient-to-b from-black_99 to-black_cc backdrop-blur-xl ">
            <h1 className="text-2xl font-extrabold ">KEET CAFE</h1>
            <p className="text-xs pt-2 text-white px-8 sm:p-2  lg:mx-auto">
              Duis aute irure dololr in reprehendrit in volupate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaevat non
              proident , sunt in culpa qui ifficia deserunt mollit.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}


export default Swiperjs;