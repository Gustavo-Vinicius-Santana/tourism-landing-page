"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import CardPromo from '../cardPromo/cardPromo';

export default function SwiperCardPromo() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={false}
        className="w-full"
        pagination={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
            <div className='flex justify-center p-4'>
                <CardPromo 
                    titulo={"Praia Bela"} 
                    descricao={"Localizada no litoral norte, essa bela praia oferece uma atmosfera paradisíaca."} 
                    preco={"300,00"} 
                    imagem="/praia1.jpg" 
                />
            </div>

        </SwiperSlide>
    
        <SwiperSlide>
            <div className='flex justify-center p-4'>
                <CardPromo 
                    titulo={"Carapibus"} 
                    descricao={"Bela praia do litoral norte, com belezas naturais."} 
                    preco={"350,00"} 
                    imagem="/praia2.jpg" 
                />
            </div>
        </SwiperSlide>
    
        <SwiperSlide>
        <div className='flex justify-center p-4'>
            <CardPromo 
                titulo={"Jacumã"} 
                descricao={"Principal praia do litoral norte, com belezas naturais."} 
                preco={"250,00"} 
                imagem="/praia3.jpg" 
            />
        </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}