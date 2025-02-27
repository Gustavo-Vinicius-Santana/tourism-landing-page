"use client";

import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import CardPromo from '@/ui/components/cardPromo/cardPromo';


interface Passeio {
    titulo: string;
    descricao: string;
    preco: string;
    imagem: string;
  }
  
  interface ListaPasseios {
    passeios: Passeio[];
  }

export default function SwiperCardsEmphasis({ passeios }: ListaPasseios) {
    const swiperRef = useRef<any>(null);

    return(
        <>
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                effect="coverflow"
                initialSlide={1}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 150,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="w-full"
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
                {passeios.map((pacote, index) => (
                    <SwiperSlide
                        key={index}
                        className="cursor-pointer"
                        onClick={() => {
                            if (swiperRef.current && swiperRef.current.slideTo) {
                            swiperRef.current.slideTo(index);
                            }
                        }}
                    >
                        <div className="flex justify-center p-4">
                            <CardPromo
                                titulo={pacote.titulo}
                                descricao={pacote.descricao}
                                preco={pacote.preco}
                                imagem={pacote.imagem}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}