// components/TeamCard.js
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";


interface TeamMember {
    nome: string;
    cargo: string;
    foto: string;
}

export default function TeamCard({ foto, nome, cargo }: TeamMember) {
    return (
        <Box
            className="min-w-lg mx-auto"
            borderTop={"lg"}
            borderColor={"#a2bd30"}
            bg="white"
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            p={10}
            textAlign="center"
        >
            <Image
                src={foto}
                alt={`Foto de ${nome}`}
                className="w-36 h-36 rounded-full mx-auto"
                objectFit="cover"
                width={144}
                height={144}

            />
            <Text fontSize="xl" color="gray.700" paddingTop={"15px"} fontWeight="bold" mb={1}>
                {nome}
            </Text>
            <Text fontSize="md" color="gray.600">
                {cargo}
            </Text>
        </Box>
    );
}
