"use client";
import Image from "next/image";
import { useEffect, useState } from 'react';
import axios from "axios";
import { FaHandHoldingHeart } from "react-icons/fa";
import styles from "./styles.module.css";
import { Button, Card } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

interface CardData {
    quantidade: string;
    subtitulo: string;
    borderColor: string;
}

interface FazerDiferencaQuemSomos {
    imagem: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

export const SectionAbout = () => {
    const router = useRouter();

    const [cards, setCards] = useState<CardData[]>([]);
    const [imagemDiferenca, setImagemDiferenca] = useState<FazerDiferencaQuemSomos[]>([]);
    const [imagemQuemSomos, setimagemQuemSomos] = useState<FazerDiferencaQuemSomos[]>([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get(`${API_URL}/inicio-cards-informacionais`);
                const data = response.data;
                setCards(data);
            } catch (error) {
                console.error('Error fetching cards:', error);
            }
        };

        const fetchImagemDiferenca = async () => {
            try {
                const response = await axios.get(`${API_URL}/inicio-fazer-diferenca`);
                const data = response.data;
                setImagemDiferenca(data);
            } catch (error) {
                console.error('Error fetching imagemDiferenca:', error);
            }
        };

        const fetchImagemQuemSomos = async () => {
            try {
                const response = await axios.get(`${API_URL}/inicio-quem-somos`);
                const data = response.data;
                setimagemQuemSomos(data);
            } catch (error) {
                console.error('Error fetching imagemDiferenca:', error);
            }
        };

        fetchCards();
        fetchImagemDiferenca();
        fetchImagemQuemSomos();
    }, []);

    const imagemDiferencaUrl = imagemDiferenca[0]?.imagem ? `${IMAGE_URL}${imagemDiferenca[0].imagem}` : '';
    const imagemQuemSomosUrl = imagemQuemSomos[0]?.imagem ? `${IMAGE_URL}${imagemQuemSomos[0].imagem}` : '';

    return (
        <>
            <section style={{ marginTop: "30px" }} className="flex justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5">
                    {cards.map((card, index) => (
                        <div key={index} className={`${styles.slideTop} flex justify-center`}>
                            <Card.Root
                                width="full"
                                maxWidth="250px"
                                height="250px"
                                md={{ maxWidth: "18rem", height: "300px" }}
                                boxShadow="0px 0px 50px -9px rgba(0,0,0,0.5)"
                                borderTop="xl"
                                borderColor={card.borderColor}
                            >
                                <Card.Body gap="2" justifyContent="center">
                                    <Card.Title textAlign="center" fontWeight="extrabold" fontSize="3xl" md={{ fontSize: "5xl" }} mt="2" mb="10" color="#a2bd30">{card.quantidade}</Card.Title>
                                    <Card.Description textAlign="center" fontSize="md" md={{ fontSize: "lg" }} fontWeight="bold" color="black" lineHeight="23px">
                                        {card.subtitulo}
                                    </Card.Description>
                                </Card.Body>
                            </Card.Root>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex justify-center pt-5 pb-5 md:pt-16 md:pb-14 m-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="flex justify-center lg:justify-end">
                        {imagemQuemSomosUrl && (
                            <Image className="rounded-lg" src={imagemQuemSomosUrl} alt="aboutImage" width={500} height={300} priority />
                        )}
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <div className="flex flex-col justify-between max-w-lg text-center lg:text-left">
                            <h3 className="text-5xl lg:text-6xl font-black pb-5 md:pb-0" style={{ color: "#a2bd30" }}>Quem somos</h3>
                            <span className="text-md text-justify text-wrap text-neutral-700 font-bold">
                                A Associação Assistencial e Promocional Casa da Paz é uma entidade sem fins lucrativos que oferece apoio integral a crianças e adolescentes no município de Umuarama, Paraná. Mantida por doações, parcerias, convênios e voluntários, nossa missão é garantir um ambiente seguro e acolhedor.
                            </span>
                            <Button
                                width="200px"
                                fontSize="lg"
                                bgColor="#a2bd30"
                                variant="outline"
                                size="xl"
                                color="white"
                                className="mt-4 flex items-center justify-center space-x-2"
                                onClick={() => router.push("/sobre")}
                            >
                                <span className="font-bold">Saiba mais</span> <RiArrowRightLine />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex justify-center md:pb-48 m-10">
                <div className="grid grid-cols-1 gap-10 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="flex flex-col justify-between max-w-lg">
                            <h3 className="text-4xl md:text-5xl font-black pb-5 md:pb-0 mb-4 text-left" style={{ color: "#4970b1" }}>E aí, vamos fazer a diferença?</h3>
                            <span className="text-sm text-justify text-wrap text-neutral-700 font-bold text-left">
                                Com apenas <strong>R$ 1,00</strong> por dia você nos ajuda a atuar na garantia de direitos e desenvolvimento integral de crianças e adolescentes em situação de vulnerabilidade social, fazendo com que eles possam se desenvolver de forma segura e acolhedora. Vamos juntos?
                            </span>
                            <Button
                                width="180px"
                                fontSize="lg"
                                bgColor="#4970b1"
                                variant="outline"
                                size="lg"
                                color="white"
                                className="mt-6 flex items-center justify-center space-x-2 self-end"
                                onClick={() => router.push("/doacoes")}
                            >
                                <span className="font-bold">APOIE AGORA!</span> <FaHandHoldingHeart />
                            </Button>
                        </div>
                        <div>
                            {imagemDiferencaUrl && (
                                <Image className="rounded-lg" src={imagemDiferencaUrl} alt="aboutImage" width={500} height={300} priority />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
