'use client'

import React, { useState, useEffect } from 'react'
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick';
import axios from 'axios';
import Image from 'next/image';

const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
}

interface Carrossel {
    imagem: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

export default function Carrosel() {
    const [slider, setSlider] = React.useState<Slider | null>(null)
    const [carrosselImage, setCarrosselImage] = useState<Carrossel[]>([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get(`${API_URL}/inicio-carrossel-images`);

                const data = response.data;
                setCarrosselImage(data);

            } catch (error) {
                console.error('Error fetching cards:', error);
            }
        };

        fetchCards();
    }, []);

    const top = useBreakpointValue({ base: '90%', md: '50%' })
    const side = useBreakpointValue({ base: '30%', md: '10px' })

    return (
        <Box position={'relative'} width={'full'} height={"50vh"} md={{ height: "80vh" }} overflow={'hidden'}>
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <IconButton
                className='hidden md:flex'
                aria-label="left-arrow"
                colorScheme="messenger"
                bg={"#496fb1b5"}
                borderRadius="full"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt color='#fff' size={20} />
            </IconButton>
            <IconButton
                className='hidden md:flex'
                aria-label="right-arrow"
                colorScheme="messenger"
                borderRadius="full"
                position="absolute"
                bg={"#496fb1b5"}
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt color='#fff' />
            </IconButton>
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {carrosselImage.map((image, index) => (
                    <Box key={index} _before={{
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(194, 223, 85, 0.6) 100%)',
                        zIndex: 1,
                    }}>
                        <Image
                            className="rounded-lg"
                            src={`${IMAGE_URL}${image.imagem}` || '/path/to/default/image.jpg'}
                            priority
                            width={1920}
                            height={1080}
                            alt={`slide${index + 1}`}
                        />
                    </Box>
                ))}
            </Slider>
        </Box >
    )
}