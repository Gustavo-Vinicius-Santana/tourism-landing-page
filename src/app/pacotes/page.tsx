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

  const praiasNordeste = [
    {
        titulo: "Jacumã",
        descricao: "Principal praia do litoral norte, com belezas naturais.",
        preco: "250,00",
        imagem: "/praia3.jpg"
    },
    {
        titulo: "Pipa",
        descricao: "Uma das praias mais famosas do RN, cheia de vida e natureza.",
        preco: "300,00",
        imagem: "/praia4.jpg"
    },
    {
        titulo: "Genipabu",
        descricao: "Dunas incríveis e passeios emocionantes de buggy.",
        preco: "280,00",
        imagem: "/praia1.jpg"
    },
    {
        titulo: "Porto de Galinhas",
        descricao: "Uma cidade paradisiáca com uma atmosfera unica.",
        preco: "400,00",
        imagem: "/praia2.jpg"
    },
    {
        titulo: "Jericoacoara",
        descricao: "Uma cidade paradisiáca com uma atmosfera unica.",
        preco: "400,00",
        imagem: "/praia1.jpg"
    },
];

 const praiasSudeste = [
    {
        titulo: "Rio de Janeiro",
        descricao: "Uma cidade paradisiáca com uma atmosfera unica.",
        preco: "400,00",
        imagem: "/praia1.jpg"
    },
    {
        titulo: "Sao Paulo",
        descricao: "Uma cidade paradisiáca com uma atmosfera unica.",
        preco: "400,00",
        imagem: "/praia1.jpg"
    },
    {
        titulo: "Porto Alegre",
        descricao: "Uma cidade paradisiáca com uma atmosfera unica.",
        preco: "400,00",
        imagem: "/praia1.jpg"
    },
    {
        titulo: "Curitiba",
        descricao: "Uma cidade paradisiáca com uma atmosfera unica.",
        preco: "400,00",
        imagem: "/praia1.jpg"
    },
    {
        titulo: "Belo Horizonte",
        descricao: "Uma cidade paradisiáca com uma atmosfera unica.",
        preco: "400,00",
        imagem: "/praia1.jpg"
    }
];

const praiasSul = [
    {
        titulo: "Rio de Janeiro",
        descricao: "Uma cidade paradisiáca com uma atmosfera unica.",
        preco: "400,00",
        imagem: "/praia1.jpg"
    },
    {
        titulo: "Sao Paulo",
        descricao: "Uma cidade paradisiáca com uma atmosfera unica.",
        preco: "400,00",
        imagem: "/praia1.jpg"
    },
    {
        titulo: "Porto Alegre",
        descricao: "Uma cidade paradisiáca com uma atmosfera unica.",
        preco: "400,00",
        imagem: "/praia1.jpg"
    },
    {
        titulo: "Curitiba",
        descricao: "Uma cidade paradisiáca com uma atmosfera unica.",
        preco: "400,00",
        imagem: "/praia1.jpg"
    },
    {
        titulo: "Belo Horizonte",
        descricao: "Uma cidade paradisiáca com uma atmosfera unica.",
        preco: "400,00",
        imagem: "/praia1.jpg"
        }
    ];

    return (
      <div className="bg-gradient-to-b from-blue-50 to-blue-100 text-textDarkBlue-100 flex flex-col items-center pt-6">
        <h1 className="text-3xl font-semibold text-buttonYellow-500">Nossos pacotes</h1>

          <div className="w-full flex flex-col items-center p-4">
            <div className="w-full flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Pacotes destaque</h2>
              <SwiperCardsEmphasis passeios={destaque} />
            </div>
          </div>

          <div className="w-full flex flex-col items-center p-4">
            <div className="w-full flex flex-col items-center  bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Pacotes Praias do Nordeste</h2>
                <SwiperCards passeios={praiasNordeste} />
            </div>
          </div>

          <div className="w-full flex flex-col items-center p-4 mt-8">
              <div className="w-full flex flex-col items-center  bg-white shadow-lg rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-4">Pacotes Praias do Nordeste</h2>
                  <SwiperCards passeios={praiasNordeste} />
              </div>
          </div>

          <div className="w-full flex flex-col items-center p-4 mt-8">
            <div className="w-full flex flex-col items-center  bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Pacotes Praias do sul</h2>
                <SwiperCards passeios={praiasSudeste} />
            </div>
          </div>
      </div>
    );
  }