"use client";
import logo from "../../../public/logo.png";
import Image from "next/image";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { Box, Text, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isApoieOpen, setIsApoieOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const openMenu = () => setIsOpen(true);
    const closeMenu = () => setIsOpen(false);

    const openApoieMenu = () => setIsApoieOpen(true);
    const closeApoieMenu = () => setIsApoieOpen(false);

    return (
        <>
            <header className={`${styles.header} bg-gray-900 p-4`}>
                <div className="container flex justify-between items-center h-full px-4 md:px-10 lg:px-52">
                    <Image draggable="false" src={logo} alt="logo" width={110} height={110} />

                    {/* Menu para desktop */}
                    <div className="hidden md:flex">
                        <nav className="flex flex-row">
                            <ul className="flex flex-row gap-5 text-white text-xl font-semibold pr-20">
                                <li className="cursor-pointer" onClick={() => router.push("/")}>Inicio</li>
                                <li
                                    className="relative"
                                    onMouseEnter={openMenu}
                                    onMouseLeave={closeMenu}
                                >
                                    <Text cursor={"pointer"} className="text-white flex items-center">Espalhe a paz <RiArrowDropDownLine color="white" size={30} /></Text>
                                    {isOpen && (
                                        <Box
                                            p={4}
                                            borderWidth="1px"
                                            borderRadius="md"
                                            bg="white"
                                            mt={0}
                                            position="absolute"
                                            top="100%"
                                            left="0"
                                            zIndex="10"
                                            width="250px"
                                            boxShadow="lg"
                                            onMouseEnter={openMenu}
                                            onMouseLeave={closeMenu}
                                        >
                                            <Box p={2} bg="#a3bd3051" borderRadius="md" mb={2}>
                                                <Text cursor={"pointer"} fontSize="md" fontWeight="bold" color="#a2bd30" onClick={() => {
                                                    router.push("/atuacao");
                                                }}>Atuação</Text>
                                            </Box>
                                            <Box p={2} bg="#a3bd3051" borderRadius="md" mb={2}>
                                                <Text cursor={"pointer"} fontSize="md" fontWeight="bold" color="#a2bd30" onClick={() => { router.push("/galeria") }}>Galeria</Text>
                                            </Box>
                                        </Box>
                                    )}
                                </li>
                                <li
                                    className="relative"
                                    onMouseEnter={openApoieMenu}
                                    onMouseLeave={closeApoieMenu}
                                >
                                    <Text cursor={"pointer"} className="text-white flex items-center">Apoie <RiArrowDropDownLine color="white" size={30} /></Text>
                                    {isApoieOpen && (
                                        <Box
                                            p={4}
                                            borderWidth="1px"
                                            borderRadius="md"
                                            bg="white"
                                            mt={0}
                                            position="absolute"
                                            top="100%"
                                            left="0"
                                            zIndex="10"
                                            width="250px"
                                            boxShadow="lg"
                                            onMouseEnter={openApoieMenu}
                                            onMouseLeave={closeApoieMenu}
                                        >
                                            <Box p={2} bg="#a3bd3051" borderRadius="md" mb={2}>
                                                <Text cursor={"pointer"} fontSize="md" fontWeight="bold" color="#a2bd30" onClick={() => {
                                                    router.push("/doacoes");
                                                }}>Doações</Text>
                                            </Box>
                                            <Box p={2} bg="#a3bd3051" borderRadius="md" mb={2}>
                                                <Text cursor={"pointer"} fontSize="md" fontWeight="bold" color="#a2bd30" onClick={() => {
                                                    router.push("/doacoes/voluntario");
                                                }}>Seja Voluntário</Text>
                                            </Box>
                                            <Box p={2} bg="#a3bd3051" borderRadius="md" mb={2}>
                                                <Text cursor={"pointer"} fontSize="md" fontWeight="bold" color="#a2bd30" onClick={() => {
                                                    router.push("/doacoes/parceiro");
                                                }}>Seja Parceiro</Text>
                                            </Box>
                                            <Box p={2} bg="#a3bd3051" borderRadius="md" mb={2}>
                                                <Text cursor={"pointer"} fontSize="md" fontWeight="bold" color="#a2bd30" onClick={() => {
                                                    router.push("/doacoes/imposto");
                                                }}>Imposto de Renda</Text>
                                            </Box>
                                            <Box p={2} bg="#a3bd3051" borderRadius="md" mb={2}>
                                                <Text cursor={"pointer"} fontSize="md" fontWeight="bold" color="#a2bd30" onClick={() => {
                                                    router.push("/doacoes/nota");
                                                }}>Nota Paraná</Text>
                                            </Box>
                                        </Box>
                                    )}
                                </li>
                                <li className="cursor-pointer" onClick={() => router.push("/sobre")}>Sobre</li>
                                <li className="cursor-pointer" onClick={() => router.push("/contato")}>Contato</li>
                            </ul>
                            <div className="flex gap-2">
                                <a href="https://www.instagram.com/casadapaz_umuarama/"><FaSquareInstagram size={30} color="white" /></a>
                                <a href="https://facebook.com/casadapazoficial/"><FaSquareFacebook size={30} color="white" /></a>
                            </div>
                        </nav>
                    </div>

                    {/* Botão Hamburguer no Mobile */}
                    <IconButton
                        aria-label="Menu"
                        variant="ghost"
                        color="white"
                        className="md:hidden"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <RiCloseLine size={30} /> : <RiMenu3Line size={30} />}
                    </IconButton>
                </div>

                {/* Menu Mobile */}
                {isMenuOpen && (
                    <div style={{ backgroundColor: "#4970b1" }} className="md:hidden text-white p-4 z-50 absolute w-screen">
                        <ul className="flex flex-col gap-4">
                            <li className="cursor-pointer" onClick={() => { router.push("/"); setIsMenuOpen(false); }}>Inicio</li>
                            <li
                                className="relative"
                                onMouseEnter={openMenu}
                                onMouseLeave={closeMenu}
                            >
                                <Text cursor={"pointer"} className="text-white flex items-center">Espalhe a paz <RiArrowDropDownLine color="white" size={30} /></Text>
                                {isOpen && (
                                    <Box
                                        p={4}
                                        borderWidth="1px"
                                        borderRadius="md"
                                        bg="white"
                                        mt={0}
                                        position="absolute"
                                        top="100%"
                                        left="0"
                                        zIndex="10"
                                        width="250px"
                                        boxShadow="lg"
                                        onMouseEnter={openMenu}
                                        onMouseLeave={closeMenu}
                                    >
                                        <Box p={2} bg="#a3bd3051" borderRadius="md" mb={2}>
                                            <Text cursor={"pointer"} fontSize="md" fontWeight="bold" color="#a2bd30">Atuação</Text>
                                        </Box>
                                        <Box p={2} bg="#a3bd3051" borderRadius="md" mb={2}>
                                            <Text cursor={"pointer"} fontSize="md" fontWeight="bold" color="#a2bd30" onClick={() => { router.push("/galeria") }}>Galeria</Text>
                                        </Box>
                                    </Box>
                                )}
                            </li>
                            <li
                                className="relative"
                                onMouseEnter={openApoieMenu}
                                onMouseLeave={closeApoieMenu}
                            >
                                <Text cursor={"pointer"} className="text-white flex items-center">Apoie <RiArrowDropDownLine color="white" size={30} /></Text>
                                {isApoieOpen && (
                                    <Box
                                        p={4}
                                        borderWidth="1px"
                                        borderRadius="md"
                                        bg="white"
                                        mt={0}
                                        position="absolute"
                                        top="100%"
                                        left="0"
                                        zIndex="10"
                                        width="250px"
                                        boxShadow="lg"
                                        onMouseEnter={openApoieMenu}
                                        onMouseLeave={closeApoieMenu}
                                    >
                                        <Box p={2} bg="#a3bd3051" borderRadius="md" mb={2}>
                                            <Text cursor={"pointer"} fontSize="md" fontWeight="bold" color="#a2bd30" onClick={() => {
                                                router.push("/doacoes");
                                            }}>Doações</Text>
                                        </Box>
                                        <Box p={2} bg="#a3bd3051" borderRadius="md" mb={2}>
                                            <Text cursor={"pointer"} fontSize="md" fontWeight="bold" color="#a2bd30" onClick={() => {
                                                router.push("/doacoes/voluntario");
                                            }}>Seja Voluntário</Text>
                                        </Box>
                                        <Box p={2} bg="#a3bd3051" borderRadius="md" mb={2}>
                                            <Text cursor={"pointer"} fontSize="md" fontWeight="bold" color="#a2bd30" onClick={() => {
                                                router.push("/doacoes/parceiro");
                                            }}>Seja Parceiro</Text>
                                        </Box>
                                        <Box p={2} bg="#a3bd3051" borderRadius="md" mb={2}>
                                            <Text cursor={"pointer"} fontSize="md" fontWeight="bold" color="#a2bd30" onClick={() => {
                                                router.push("/doacoes/imposto");
                                            }}>Imposto de Renda</Text>
                                        </Box>
                                        <Box p={2} bg="#a3bd3051" borderRadius="md" mb={2}>
                                            <Text cursor={"pointer"} fontSize="md" fontWeight="bold" color="#a2bd30" onClick={() => {
                                                router.push("/doacoes/nota");
                                            }}>Nota Paraná</Text>
                                        </Box>
                                    </Box>
                                )}
                            </li>
                            <li className="cursor-pointer" onClick={() => { router.push("/sobre"); setIsMenuOpen(false); }}>Sobre</li>
                            <li className="cursor-pointer" onClick={() => { router.push("/contato"); setIsMenuOpen(false); }}>Contato</li>

                        </ul>
                    </div>
                )}
            </header>
        </>
    );
};
