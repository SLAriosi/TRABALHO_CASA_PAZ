"use client"
import { useEffect, useState } from 'react';
import { Card } from "@chakra-ui/react";
import Image from "next/image";
import axios from 'axios';
import styles from './styles.module.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

interface CardData {
    nome: string;
    imagem: string;
    descricao: string;
}

export const SectionAction = () => {

    const [cards, setCards] = useState<CardData[]>([]);
    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get(`${API_URL}/inicio-areas-atuacao`);

                const data = response.data;
                setCards(data);

            } catch (error) {
                console.error('Error fetching cards:', error);
            }
        };

        fetchCards();
    }, []);

    return (
        <>
            <section className={`${styles.section} p-10 sm:p-16 md:p-20 flex flex-col justify-between items-center w-full text-white`}>
                <div>
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold pb-3" style={{ color: "#fff" }}>
                            Nossas áreas de atuação
                        </h1>
                    </div>
                    <div className="w-full mb-6" style={{ backgroundColor: "#a2bd30", height: "3px" }}></div>
                    <div className="text-center max-w-xl sm:max-w-2xl md:max-w-3xl pt-1 pb-10">
                        <span className="text-sm sm:text-base md:text-lg">
                            Por meio do fortalecimento de vínculos, promovemos a interação, colaboração e o desenvolvimento mútuo que integra a criança e o adolescente com a família e a comunidade. Para isso, oferecemos oficinas socioeducativas de arte, esporte, cultura e lazer.
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-7 gap-5">
                    {cards.map((card, index) => (
                        <div key={index}>
                            <Card.Root maxW="350px" overflow="hidden" className="mx-auto">
                                <Image
                                    src={`${IMAGE_URL}${card.imagem}`}
                                    alt={card.nome}
                                    className="w-full h-auto"
                                    width={350}
                                    height={200}
                                />
                                <Card.Body gap="2" textAlign="center">
                                    <Card.Title fontSize="xl" fontWeight="extrabold" color="#4970b1">{card.nome}</Card.Title>
                                    <Card.Description fontWeight="bold">
                                        {card.descricao}
                                    </Card.Description>
                                </Card.Body>
                                <Card.Footer gap="2" />
                            </Card.Root>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}