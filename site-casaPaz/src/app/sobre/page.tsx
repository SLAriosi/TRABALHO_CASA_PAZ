import aboutImage1 from "../../../public/banner/DSC_0466.jpg";
import aboutImage2 from "../../../public/banner/DSC_0612.jpg";
import aboutImage3 from "../../../public/banner/DSC_0665.jpg";
import Image from "next/image";
import { Card } from "@chakra-ui/react";
import { TbTargetArrow } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import TeamSection from "@/components/TeamSection";

export default function Sobre() {
    return (
        <>
            <section className="flex justify-center pt-16 pb-10 m-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div className="">
                        <Image className="rounded-lg" src={aboutImage1} alt="aboutImage" width={450} height={300} />
                    </div>
                    <div className="flex">
                        <div className="flex flex-col">
                            <h3 className="text-5xl font-black pb-6" style={{ color: "#a2bd30" }}>Quem somos</h3>
                            <span className="text-sm text-justify text-wrap max-w-lg text-neutral-700 font-bold">
                                A Associação Assistencial e Promocional Casa da Paz é uma entidade sem fins lucrativos que oferece apoio integral a crianças e adolescentes no município de Umuarama, Paraná. Mantida por doações, parcerias, convênios e voluntários, nossa missão é garantir um ambiente seguro e acolhedor.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex justify-center pt-10 pb-10 m-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex order-2 md:order-1">
                        <div className="flex flex-col">
                            <h3 className="text-5xl font-black pb-6" style={{ color: "#4970b1" }}>Nossa fundação</h3>
                            <span className="text-sm text-justify text-wrap max-w-lg text-neutral-700 font-bold">
                                Fundada para responder à urgência da alimentação, a Casa da Paz rapidamente percebeu que a questão era mais ampla. Observamos que muitas crianças estavam vulneráveis nas ruas, enfrentando altos índices de repetência escolar e evasão, e expostas a perigos graves como o tráfico de drogas e a prostituição.
                            </span>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <Image className="rounded-lg" src={aboutImage2} alt="aboutImage" width={450} height={300} />
                    </div>
                </div>
            </section>

            <section className="flex justify-center pt-10 pb-10 m-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div className="order-1">
                        <Image className="rounded-lg" src={aboutImage3} alt="aboutImage" width={450} height={300} />
                    </div>
                    <div className="flex order-2">
                        <div className="flex flex-col">
                            <h3 className="text-5xl font-black pb-6" style={{ color: "#a2bd30" }}>Nosso objetivo</h3>
                            <span className="text-sm text-justify text-wrap max-w-lg text-neutral-700 font-bold">
                                Nosso objetivo é proporcionar um ambiente seguro e acolhedor, onde cada jovem possa ter acesso a oportunidades de aprendizado, apoio psicossocial e atividades enriquecedoras. Trabalhamos para oferecer um futuro melhor, garantindo que nossas crianças e adolescentes tenham as ferramentas necessárias para crescer com dignidade e esperança.
                            </span>
                        </div>
                    </div>
                </div>
            </section>


            <section style={{ marginTop: "30px" }} className="flex justify-center bg-gray-200 py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                        <Card.Root width="300px" height="350px" boxShadow="0px 0px 50px -9px rgba(0,0,0,0.2)" borderTop="xl" borderColor="#a2bd30">
                            <Card.Body gap="2" justifyContent="center">
                                <Card.Title textAlign="center" fontWeight="extrabold" fontSize="4xl" mt="2" mb="10" color="#a2bd30">
                                    <div className="flex flex-col justify-center items-center gap-3">
                                        <TbTargetArrow />
                                        <span>Missão</span>
                                    </div>
                                </Card.Title>
                                <Card.Description textAlign="center" fontSize="sm" fontWeight="bold" color="#404040" lineHeight="23px">
                                    Oferecer serviços de convivência e fortalecimento de vínculos por meio de atividades de artes, cultura, esportes e lazer para crianças e adolescentes, e contribuir para a formação de cidadãos de bem.
                                </Card.Description>
                            </Card.Body>
                        </Card.Root>
                    </div>
                    <div>
                        <Card.Root width="300px" height="350px" boxShadow="0px 0px 50px -9px rgba(0,0,0,0.2)" borderTop="xl" borderColor="#4970b1">
                            <Card.Body gap="2" justifyContent="center">
                                <Card.Title textAlign="center" fontWeight="extrabold" fontSize="4xl" mt="2" mb="10" color="#4970b1">
                                    <div className="flex flex-col justify-center items-center gap-3">
                                        <FaEye />
                                        <span>Visão</span>
                                    </div>
                                </Card.Title>
                                <Card.Description textAlign="center" fontSize="sm" fontWeight="bold" color="#404040" lineHeight="23px">
                                    Tornar-se referência no atendimento e na defesa e garantia de direitos de crianças e adolescentes por meio de soluções inovadoras e criativas.
                                </Card.Description>
                            </Card.Body>
                        </Card.Root>
                    </div>
                    <div>
                        <Card.Root width="300px" height="350px" boxShadow="0px 0px 50px -9px rgba(0,0,0,0.2)" borderTop="xl" borderColor="#a2bd30">
                            <Card.Body gap="2" justifyContent="center">
                                <Card.Title textAlign="center" fontWeight="extrabold" fontSize="4xl" mt="2" mb="10" color="#a2bd30">
                                    <div className="flex flex-col justify-center items-center gap-3">
                                        <FaHandHoldingHeart />
                                        <span>Valores</span>
                                    </div>
                                </Card.Title>
                                <Card.Description textAlign="center" fontSize="sm" fontWeight="bold" color="#404040" lineHeight="23px">
                                    Acolhimento, amizade, amor ao próximo conhecimento, companheirismo, disciplina, educação, espiritualidade, ética, honestidade.
                                </Card.Description>
                            </Card.Body>
                        </Card.Root>
                    </div>
                </div>
            </section>
            <section className="container flex justify-center mx-auto">
                <TeamSection />
            </section>
        </>
    );
}