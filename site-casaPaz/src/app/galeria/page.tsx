"use client"
import { Box, Container, Flex, Heading, Link, Stack, Text, } from '@chakra-ui/react';
import Image from 'next/image';
import axios from "axios";
import { useState, useEffect } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

interface EventoImage {
   evento_id: number;
   url: string;
}
interface Eventos {
   id: number;
   nome: string;
   descricao: string;
}

export default function Galeria() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedImage, setSelectedImage] = useState('');
   const [imagensEventos, setImagensEventos] = useState<EventoImage[]>([]);
   const [eventos, setEventos] = useState<Eventos[]>([]);

   const handleImageClick = (src: string) => {
      setSelectedImage(src);
      setIsModalOpen(true);
   };

   const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedImage('');
   };

   useEffect(() => {
      const fetchCards = async () => {
         try {
            const response = await axios.get(`${API_URL}/imagem-eventos`);

            const data = response.data;
            setImagensEventos(data);

         } catch (error) {
            console.error('Error fetching cards:', error);
         }
      };

      const fetchEventos = async () => {
         try {
            const response = await axios.get(`${API_URL}/eventos`);

            const data = response.data;
            setEventos(data);

         } catch (error) {
            console.error('Error fetching cards:', error);
         }
      };

      fetchEventos();
      fetchCards();
   }, []);

   return (
      <Box bg="gray.50" minH="100vh">
         {/* Cabeçalho */}
         <Box bg="#4970b1" color="white" py={3} textAlign="center">
            <Heading fontSize="2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>Eventos</Heading>
            <Flex justify="center" mt={4} gap={4}>
               {eventos.map((evento) => (
                  <Link style={{ fontFamily: 'Poppins, sans-serif' }} key={evento.id} href={`#${evento.nome.toLowerCase().replace(/\s+/g, '')}`} fontWeight="bold">
                     {evento.nome}
                  </Link>
               ))}
            </Flex>
         </Box>

         <Container maxW="container.xl" py={10}>
            {eventos.map((evento) => (
               <Stack key={evento.id} mb={3} textAlign="center">
                  <h2 id={evento.nome.toLowerCase().replace(/\s+/g, '')} className="text-2xl sm:text-2xl md:text-3xl font-extrabold pb-3" style={{ color: "#4970b1", fontFamily: 'Poppins, sans-serif' }}>
                     {evento.nome}
                  </h2>
                  <Text fontSize="lg" color="gray.600" maxW="800px" mx="auto" textAlign="justify" mb={5} style={{ fontFamily: 'Poppins, sans-serif' }}>
                     {evento.descricao}
                  </Text>

                  <Flex direction="row" justify="center" align="center" wrap="wrap" gap={12} py={5}>
                     {imagensEventos.filter(imagem => imagem.evento_id === evento.id).map((imagem, index) => (
                        <Image
                           key={`${imagem.evento_id}-${index}`}
                           src={`${IMAGE_URL}${imagem.url}`}
                           alt={`Imagem ${imagem.evento_id}`}
                           width="150"
                           height="300"
                           objectFit="cover"
                           style={{ borderRadius: '8px', cursor: 'pointer', transition: 'filter 0.3s', fontFamily: 'Poppins, sans-serif' }}
                           onClick={() => handleImageClick(`${IMAGE_URL}/${imagem.url}`)}
                           onMouseOver={(e) => (e.currentTarget.style.filter = 'brightness(0.8)')}
                           onMouseOut={(e) => (e.currentTarget.style.filter = 'brightness(1)')}
                        />
                     ))}
                  </Flex>
                  <Flex justify="center" my={4} pb={4}>
                     <Box bg="#a2bd30" height="6px" width="15%" />
                  </Flex>
               </Stack>
            ))}
            <Box borderBottom="1px" borderColor="gray.200" my={4} />
         </Container>

         {isModalOpen && (
            <div style={{
               position: 'fixed',
               top: 0,
               left: 0,
               width: '100vw',
               height: '100vh',
               backgroundColor: 'rgba(0, 0, 0, 0.8)',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               zIndex: 1000
            }} onClick={handleCloseModal}>
               <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }} onClick={(e) => e.stopPropagation()}>
                  <Image src={selectedImage} alt="Imagem em tela cheia" width={600} height={600} objectFit="contain" />
                  <div style={{
                     position: 'absolute',
                     top: '10px',
                     right: '10px',
                     cursor: 'pointer',
                     color: 'white',
                     fontSize: '2xl'
                  }} onClick={handleCloseModal}>
                     &times;
                  </div>
               </div>
            </div>
         )}
      </Box>
   );
}