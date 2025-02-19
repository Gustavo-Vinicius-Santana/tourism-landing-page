"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function Carrousel() {

    return(
        <>
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                className="w-full max-w-5xl"
            >
                {['praia1.jpg', 'praia2.jpg', 'praia3.jpg', 'praia4.jpg'].map((img, index) => (
                <SwiperSlide key={index}>
                    <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                        <Image
                            src={`/${img}`}
                            alt={`Imagem ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 bg-black bg-opacity-40">
                            <h3 className="text-3xl font-bold">Descubra Lugares Incríveis</h3>
                            <p className="mt-2 text-lg">Explore praias paradisíacas ao redor do mundo!</p>
                        </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}