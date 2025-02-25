"use client";

import React from "react";

import SwiperCards from "@/ui/components/swiperCards/swiperCards";
import SwiperCardsEmphasis from "@/ui/components/swiperCardsEmphasis/swiperCardsEmphasis";

export default function Pacotes() {

  const destaque = [
    {
        titulo: "Praia Bela",
        descricao: "Localizada no litoral norte, essa bela praia oferece uma atmosfera paradisíaca.",
        preco: "300,00",
        imagem: "/praia1.jpg"
    },
    {
        titulo: "Praia Maravilha",
        descricao: "Localizada no litoral sul, essa bela praia oferece uma atmosfera paradisíaca.",
        preco: "300,00",
        imagem: "/praia2.jpg"
    },
    {
        titulo: "Praia Maravilha",
        descricao: "Localizada no litoral sul, essa bela praia oferece uma atmosfera paradisíaca.",
        preco: "300,00",
        imagem: "/praia3.jpg"
    },
  ]

  const praiasParaiba = [
    {
        titulo: "Praia de Tambaba",
        descricao: "Famosa por sua beleza natural e por ser a primeira praia de naturismo do Nordeste.",
        preco: "250,00",
        imagem: "/praia3.jpg"
    },
    {
        titulo: "Praia de Coqueirinho",
        descricao: "Uma das mais belas da Paraíba, com falésias coloridas e águas cristalinas.",
        preco: "300,00",
        imagem: "/praia4.jpg"
    },
    {
        titulo: "Praia do Jacaré",
        descricao: "Conhecida pelo pôr do sol ao som do Bolero de Ravel, um espetáculo inesquecível.",
        preco: "280,00",
        imagem: "/praia1.jpg"
    },
    {
        titulo: "Praia de Tambaú",
        descricao: "Localizada na capital João Pessoa, é uma das praias mais movimentadas e urbanizadas.",
        preco: "400,00",
        imagem: "/praia2.jpg"
    },
    {
        titulo: "Praia do Cabo Branco",
        descricao: "Ponto mais oriental das Américas, com falésias e uma bela orla para caminhadas.",
        preco: "400,00",
        imagem: "/praia3.jpg"
    },
];

const praiasRN = [
    {
        titulo: "Praia de Pipa",
        descricao: "Um dos destinos mais famosos do RN, com falésias, mar azul e uma vida noturna animada.",
        preco: "400,00",
        imagem: "/praia1.jpg"
    },
    {
        titulo: "Praia de Genipabu",
        descricao: "Famosa por suas dunas e passeios emocionantes de buggy com opção de 'com ou sem emoção'.",
        preco: "400,00",
        imagem: "/praia2.jpg"
    },
    {
        titulo: "Praia do Amor",
        descricao: "Vizinha à Praia de Pipa, tem formato de coração visto do alto e é muito procurada por surfistas.",
        preco: "400,00",
        imagem: "/praia3.jpg"
    },
    {
        titulo: "Praia de Maracajaú",
        descricao: "Conhecida como 'Caribe do RN', é um paraíso para mergulho com piscinas naturais incríveis.",
        preco: "400,00",
        imagem: "/praia2.jpg"
    },
    {
        titulo: "Praia de São Miguel do Gostoso",
        descricao: "Destino perfeito para quem busca tranquilidade, águas mornas e ótimas condições para esportes náuticos.",
        preco: "400,00",
        imagem: "/praia1.jpg"
    }
];

const praiasPernambuco = [
    {
        titulo: "Porto de Galinhas",
        descricao: "Uma das praias mais famosas do Brasil, com piscinas naturais e águas cristalinas.",
        preco: "400,00",
        imagem: "/praia1.jpg"
    },
    {
        titulo: "Praia dos Carneiros",
        descricao: "Conhecida por suas águas mornas e coqueiros, um dos destinos mais paradisíacos do estado.",
        preco: "400,00",
        imagem: "/praia3.jpg"
    },
    {
        titulo: "Ilha de Itamaracá",
        descricao: "Praia tranquila e histórica, com o famoso Forte Orange e ótimas opções de passeio de barco.",
        preco: "400,00",
        imagem: "/praia2.jpg"
    },
    {
        titulo: "Praia de Boa Viagem",
        descricao: "Principal praia urbana do Recife, com ótima infraestrutura e um belo calçadão à beira-mar.",
        preco: "400,00",
        imagem: "/praia1.jpg"
    },
    {
        titulo: "Praia de Calhetas",
        descricao: "Pequena e charmosa, rodeada por falésias e perfeita para quem busca um cenário paradisíaco.",
        preco: "400,00",
        imagem: "/praia2.jpg"
    }
];

    return (
      <div className="bg-gradient-to-b from-blue-50 to-blue-100 text-textDarkBlue-100 flex flex-col items-center pt-6">

          <div className="w-full flex flex-col items-center p-4">
            <div className="w-full flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-3xl font-extrabold text-blue-800">Pacotes destaque</h2>
              <SwiperCardsEmphasis passeios={destaque} />
            </div>
          </div>

          <div className="w-full flex flex-col items-center p-4">
            <div className="w-full flex flex-col items-center  bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-blue-800">Pacotes Praias da Paraiba</h2>
                <SwiperCards passeios={praiasParaiba} />
            </div>
          </div>

          <div className="w-full flex flex-col items-center p-4 mt-8">
              <div className="w-full flex flex-col items-center  bg-white shadow-lg rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-blue-800">Pacotes Praias do Rio grande do norte</h2>
                  <SwiperCards passeios={praiasRN} />
              </div>
          </div>

          <div className="w-full flex flex-col items-center p-4 mt-8">
            <div className="w-full flex flex-col items-center  bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-blue-800">Pacotes Praias de pernambuco</h2>
                <SwiperCards passeios={praiasPernambuco} />
            </div>
          </div>
      </div>
    );
  }