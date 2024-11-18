import { Button, Card } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";

export default function Doacoes() {
    return (
        <>

            <section className="flex justify-center items-center flex-col bg-gray-200 py-10">
                <div>
                    <h1 style={{ color: "#4970b1" }} className="text-4xl pb-8 font-bold">Conheça nossas formas de doações</h1>
                </div>
                <div className="grid grid-cols-3 gap-4 ">
                    <div>
                        <Card.Root width="300px" height="400px" boxShadow="0px 0px 50px -9px rgba(0,0,0,0.2)" backgroundColor={"#a2bd30"}>
                            <Card.Body gap="2" justifyContent="center">
                                <Card.Title textAlign="center" fontWeight="bold" fontSize="3xl" mt="2" mb="5" color="#fff">
                                    <div className="flex flex-col justify-center items-center gap-1">
                                        <RiMoneyDollarCircleLine size={50} />
                                        <span>Doações</span>
                                    </div>
                                </Card.Title>
                                <Card.Description textAlign="center" fontSize="sm" fontWeight="bold" color="#fff" lineHeight="23px">
                                    Ajude quem precisa com uma doação via PIX! Sua contribuição transforma vidas e fortalece nossa missão de acolhimento e apoio. Doe agora e faça a diferença!
                                </Card.Description>
                            </Card.Body>
                        </Card.Root>
                    </div>
                    <div>
                        <Card.Root width="300px" height="400px" boxShadow="0px 0px 50px -9px rgba(0,0,0,0.2)" backgroundColor={"#a2bd30"}>
                            <Card.Body gap="2" justifyContent="center">
                                <Card.Title textAlign="center" fontWeight="bold" fontSize="3xl" mt="2" mb="10" color="#fff">
                                    <div className="flex flex-col justify-center items-center gap-1">
                                        <IoIosPeople size={50} />
                                        <span>Seja Voluntário</span>
                                    </div>
                                </Card.Title>
                                <Card.Description textAlign="center" fontSize="sm" fontWeight="bold" color="#fff" lineHeight="23px">
                                    Seja um voluntário e ajude a fazer a diferença na vida de nossas crianças e adolescentes. Descubra como você pode contribuir com seu tempo e habilidades.
                                </Card.Description>
                                <Button fontSize="md" bgColor="#4970b1" variant="outline" size="sm" color="#fff">
                                    <span className="font-bold">Saiba mais</span> <RiArrowRightLine width="50" />
                                </Button>
                            </Card.Body>
                        </Card.Root>
                    </div>
                    <div>
                        <Card.Root width="300px" height="400px" boxShadow="0px 0px 50px -9px rgba(0,0,0,0.2)" backgroundColor={"#a2bd30"}>
                            <Card.Body gap="2" justifyContent="center">
                                <Card.Title textAlign="center" fontWeight="bold" fontSize="3xl" mt="2" mb="10" color="#fff">
                                    <div className="flex flex-col justify-center items-center gap-1">
                                        <IoIosPeople size={50} />
                                        <span>Seja Parceiro</span>
                                    </div>
                                </Card.Title>
                                <Card.Description textAlign="center" fontSize="sm" fontWeight="bold" color="#fff" lineHeight="23px">
                                    Sua empresa pode ajudar a promover eventos, fornecer recursos ou apoiar projetos específicos. Apoio em Eventos: Participe dos nossos eventos e ajude a divulgar nossa causa.
                                </Card.Description>
                                <Button fontSize="md" bgColor="#4970b1" variant="outline" size="sm" color="#fff">
                                    <span className="font-bold">Saiba mais</span> <RiArrowRightLine width="50" />
                                </Button>
                            </Card.Body>
                        </Card.Root>
                    </div>
                    <div>
                        <Card.Root width="300px" height="400px" boxShadow="0px 0px 50px -9px rgba(0,0,0,0.2)" backgroundColor={"#a2bd30"}>
                            <Card.Body gap="2" justifyContent="center">
                                <Card.Title textAlign="center" fontWeight="bold" fontSize="3xl" mt="2" mb="5" color="#fff">
                                    <div className="flex flex-col justify-center items-center gap-1">
                                        <RiMoneyDollarCircleLine size={50} />
                                        <span>Imposto de Renda</span>
                                    </div>
                                </Card.Title>
                                <Card.Description textAlign="center" fontSize="sm" fontWeight="bold" color="#fff" lineHeight="23px">
                                    Sua empresa pode ajudar a promover eventos, fornecer recursos ou apoiar projetos específicos. Apoio em Eventos: Participe dos nossos eventos e ajude a divulgar nossa causa.
                                </Card.Description>
                                <Button fontSize="md" bgColor="#4970b1" variant="outline" size="sm" color="#fff">
                                    <span className="font-bold">Saiba mais</span> <RiArrowRightLine width="50" />
                                </Button>
                            </Card.Body>
                        </Card.Root>
                    </div>
                    <div>
                        <Card.Root width="300px" height="400px" boxShadow="0px 0px 50px -9px rgba(0,0,0,0.2)" backgroundColor={"#a2bd30"}>
                            <Card.Body gap="2" justifyContent="center">
                                <Card.Title textAlign="center" fontWeight="bold" fontSize="3xl" mt="2" mb="10" color="#fff">
                                    <div className="flex flex-col justify-center items-center gap-1">
                                        <CgNotes size={50} />
                                        <span>Nota Paraná</span>
                                    </div>
                                </Card.Title>
                                <Card.Description textAlign="center" fontSize="sm" fontWeight="bold" color="#fff" lineHeight="23px">
                                    Sua empresa pode ajudar a promover eventos, fornecer recursos ou apoiar projetos específicos. Apoio em Eventos: Participe dos nossos eventos e ajude a divulgar nossa causa.
                                </Card.Description>
                                <Button fontSize="md" bgColor="#4970b1" variant="outline" size="sm" color="#fff">
                                    <span className="font-bold">Saiba mais</span> <RiArrowRightLine width="50" />
                                </Button>
                            </Card.Body>
                        </Card.Root>
                    </div>

                </div>
            </section>
        </>
    )
}