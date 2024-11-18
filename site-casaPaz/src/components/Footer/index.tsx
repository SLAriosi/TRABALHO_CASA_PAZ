import Image from "next/image";
import logo from "../../../public/logo.png";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <>
            <footer className="flex justify-center w-screen" style={{ backgroundColor: "#4970b1" }}>
                <div className="flex justify-around p-8 w-full">
                    <div>
                        <Image src={logo} width={80} height={80} alt="logo"></Image>
                    </div>
                    <div className="text-white flex items-center text-sm md:text-lg text-center">© 2024 Casa da Paz. Todos os direitos reservados.</div>
                    <div className="flex items-center">
                        <div className="flex flex-row justify-center items-center gap-2">
                            <a href="https://www.instagram.com/casadapaz_umuarama/"><FaSquareInstagram size={30} color="white" /></a>
                            <a href="https://facebook.com/casadapazoficial/"><FaSquareFacebook size={30} color="white" /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}