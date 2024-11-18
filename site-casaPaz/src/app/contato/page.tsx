"use client";

import { Button, Fieldset, Input, Stack, Textarea } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import {
    NativeSelectField,
    NativeSelectRoot,
} from "@/components/ui/native-select"
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { useEffect } from "react";

export default function Contato() {
    useEffect(() => {
        const telefoneInput = document.querySelector('input[name="telefone"]') as HTMLInputElement;
        const handleTelefoneInput = (event: Event) => {
            let value = telefoneInput.value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            value = value.replace(/(\d)(\d{4})$/, '$1-$2');
            telefoneInput.value = value;
        };
        telefoneInput.addEventListener('input', handleTelefoneInput);
        return () => {
            telefoneInput.removeEventListener('input', handleTelefoneInput);
        };
    }, []);

    const handleSubmit = () => {
        const name = (document.querySelector('input[name="name"]') as HTMLInputElement).value;
        const email = (document.querySelector('input[name="email"]') as HTMLInputElement).value;
        const telefone = (document.querySelector('input[name="telefone"]') as HTMLInputElement).value;
        const mensagem = (document.querySelector('textarea') as HTMLTextAreaElement).value;

        const whatsappMessage = `Nome: ${name}%0AEmail: ${email}%0ATelefone: ${telefone}%0AMensagem: ${mensagem}`;
        const whatsappUrl = `https://wa.me/5544998007067?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            <main className="bg-gray-200">
                <div className="flex justify-center items-center p-3 md:p-12">
                    <Fieldset.Root style={{ boxShadow: "0px 0px 40px 8px rgba(0,0,0,0.1)" }} size="md" maxW="xl" bg={"#fff"} padding={8} borderRadius={8}>
                        <Stack>
                            <Fieldset.Legend fontWeight={"bold"} fontSize={"xl"}>Contato</Fieldset.Legend>
                            <Fieldset.HelperText>
                                Por favor preencha o formulário de contato.
                            </Fieldset.HelperText>
                        </Stack>

                        <Fieldset.Content>
                            <Field label="Nome">
                                <Input padding={2} border={"2px"} borderStyle={"solid"} borderColor={"gray.200"} name="name" placeholder="Digite seu nome" maxLength={50} />
                            </Field>

                            <Field label="Email">
                                <Input padding={2} border={"2px"} borderStyle={"solid"} borderColor={"gray.200"} name="email" type="email" placeholder="Digite seu email" maxLength={50} />
                            </Field>

                            <Field label="Telefone">
                                <Input padding={2} border={"2px"} borderStyle={"solid"} borderColor={"gray.200"} name="telefone" type="telefone" placeholder="(99) 99999-9999" maxLength={15} />
                            </Field>

                            <Field label="Mensagem">
                                <Textarea border={"2px"} borderStyle={"solid"} borderColor={"gray.200"} maxLength={500} />
                            </Field>

                        </Fieldset.Content>

                        <Button marginTop={10} backgroundColor={"#a2bd30"} padding={6} color={"white"} type="button" alignSelf="flex-end" onClick={handleSubmit}>
                            Enviar
                        </Button>
                    </Fieldset.Root>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-5 bg-white py-10">
                    <div className="w-full md:w-auto">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8684.276935377222!2d-53.30330717727882!3d-23.772732696109987!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f2d14cbc291c57%3A0xf219a968cd886f23!2sCasa%20da%20Paz!5e0!3m2!1spt-BR!2sbr!4v1730832447741!5m2!1spt-BR!2sbr"
                            width="100%" height="300" style={{ border: "1px" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="w-full md:w-auto m-5">
                        <div className="text-xl">
                            <h4 className="font-extrabold" style={{ color: "#4970b1" }}>Associação Assistencial e Promocional Casa da Paz</h4>
                            <span className="text-md">CNPJ: 05.509.404/0001-29</span>
                        </div>
                        <div className="pt-7">
                            <div className="flex items-start flex-col gap-2">
                                <div className="flex gap-2">
                                    <IoLocationSharp size={30} color={"#a2bd30"} />
                                    <div className="flex flex-col">
                                        <span className="text-xl">Endereço</span>
                                        <span className="text-sm">R. Mimosa, 3172 - Jardim Panorama<br /> Umuarama - PR, 87501-500</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-3">
                            <div className="flex items-start flex-col gap-2">
                                <div className="flex gap-2">
                                    <FaPhone size={27} color={"#a2bd30"} />
                                    <div className="flex flex-col">
                                        <span className="text-xl">Telefone</span>
                                        <span className="text-sm">(44) 99976-0543</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-3">
                            <div className="flex items-start flex-col gap-2">
                                <div className="flex gap-2">
                                    <MdMailOutline size={30} color={"#a2bd30"} />
                                    <div className="flex flex-col">
                                        <span className="text-xl">Email</span>
                                        <span className="text-sm">casadapaz@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}