"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

import Link from "next/link";

export default function Carrousel() {
    const slides = [
        {
            'img': 'praia1.jpg',
            'title': 'Descubra Lugares Incríveis',
            'description': 'Explore praias paradisíacas ao redor do mundo!'
        },
        {
            'img': 'praia2.jpg',
            'title': 'Sinta a natureza',
            'description': 'Passeie por locais com rica natureza!'
        },
        {
            'img': 'praia3.jpg',
            'title': 'Conheça as praias do nordeste',
            'description': 'Litoral de joão pessoa - Pernambuco - Natal'
        },
        {
            'img': 'praia4.jpg',
            'title': 'Tenha novas experiências',
            'description': 'Explore praias paradisíacas ao redor do mundo!'
        },
    ];

    return(
        <>
            <Swiper
                modules={[Autoplay]}
                centeredSlides={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                className="w-full"
            >
                {slides.map(({ img, title, description }, index) => (
                <SwiperSlide key={index}>
                    <div className="relative w-full h-[500px] overflow-hidden">
                        <Image
                            src={`/${img}`}
                            alt={`Imagem ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 bg-black bg-opacity-40">
                            <h3 className="text-3xl font-bold">{title}</h3>
                            <p className="mt-2 text-lg">{description}</p>

                            <Link href="/pacotes">
                                <button className="mt-4 px-6 py-3 bg-blue-500 text-white text-base font-medium rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all">
                                        Conheça nossos passeios
                                </button>
                            </Link>

                        </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}