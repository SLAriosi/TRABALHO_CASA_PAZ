import type { Metadata } from "next";
import styles from './styles.module.css'
import "./global.css";
import { FaHeart } from "react-icons/fa6";
import { Provider } from "@/components/ui/provider"
import {
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@chakra-ui/react";
import qrcode from "../../public/qrcode.png";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { Poppins } from "next/font/google"
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
    subsets: ["latin"],
    weight: "400"
});


export const metadata: Metadata = {
    title: "Casa da Paz",
    description: "Casa da Paz",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <html lang="en" className={poppins.className} >
            <body suppressHydrationWarning={false} style={{ overflowX: "hidden" }}>
                <>
                    <Provider>
                        <Header />
                    </Provider>
                    <Provider>{children}</Provider>
                    <div className={styles.wpp}>
                        <a target="blank" href="https://api.whatsapp.com/send?phone=5544999760543" ><FaWhatsapp size={35} color="white" /></a>
                    </div>
                    <Provider>
                        <DrawerRoot size={"sm"}>
                            <DrawerBackdrop />
                            <DrawerTrigger asChild>
                                <Button variant="outline" size="sm">
                                    <div className={styles.doe}>
                                        <div className="flex flex-col justify-center items-center pt-6">
                                            <FaHeart size={30} />
                                            <span className="text-md font-bold uppercase leading-5 pt-1">
                                                Doe<br />Agora
                                            </span>
                                        </div>
                                    </div>
                                </Button>
                            </DrawerTrigger>
                            <DrawerContent backgroundColor={"#4970b1"}>
                                <DrawerHeader>
                                    <DrawerTitle className="flex justify-center text-3xl font-bold pt-3 text-white">Ajude a Casa da Paz!</DrawerTitle>
                                </DrawerHeader>
                                <DrawerBody>
                                    <p className="text-lg text-center text-white">
                                        Ajude quem precisa com uma doação via PIX! Sua contribuição transforma vidas e fortalece nossa missão de acolhimento e apoio. Doe agora e faça a diferença!
                                    </p>
                                    <div className={styles.separator}></div>
                                    <p className="text-md pt-12 pl-5 text-white">
                                        <ul className="list-disc">
                                            <li className="font-bold">Banco: SICOOB (756)</li>
                                            <li className="font-bold">Agência: 4379</li>
                                            <li className="font-bold">Conta Corrente: 4586-1</li>
                                            <li className="font-bold">CNPJ: 05.509.404/0001-29</li>
                                            <li className="font-bold">Titular: Associação Assistencial e Promocional<br /> Casa da Paz</li>
                                        </ul>
                                    </p>

                                    <div className="flex justify-center items-center pt-16">
                                        <Image draggable={"false"} className="" src={qrcode} alt="logo" width={220} height={220}></Image>
                                    </div>
                                </DrawerBody>
                                <DrawerCloseTrigger color={"white"} />
                            </DrawerContent>
                        </DrawerRoot>
                        <Footer />
                    </Provider>
                </>
            </body>
        </html>
    );
}
