import { register } from 'swiper/element/bundle';
import {Swiper, SwiperSlide} from 'swiper/react';
// import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

import './Slider.sass';

register();



const Slider = () => {
    return (
        <Swiper className='slider'>
            <SwiperSlide className='slide'>1</SwiperSlide>
            <SwiperSlide className='slide'>2</SwiperSlide>
            <SwiperSlide className='slide'>3</SwiperSlide>
            <SwiperSlide className='slide'>4</SwiperSlide>
            <SwiperSlide className='slide'>5</SwiperSlide>
            <SwiperSlide className='slide'>6</SwiperSlide>
        </Swiper>
    );
};

export default Slider;