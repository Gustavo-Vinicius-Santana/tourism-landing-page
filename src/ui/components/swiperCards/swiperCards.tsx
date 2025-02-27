"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
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

export default function SwiperCards({ passeios }: ListaPasseios) {

    return(
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{ clickable: true }}
                modules={[Pagination]}
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
                {passeios.map((passeio, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex justify-center p-4'>
                            <CardPromo titulo={passeio.titulo} descricao={passeio.descricao} preco={passeio.preco} imagem={passeio.imagem} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}