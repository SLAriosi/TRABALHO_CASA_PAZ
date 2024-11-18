'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './NotaParana.module.css'; // Importa o CSS isolado
import { FaDesktop, FaMobileAlt, FaStore } from 'react-icons/fa';
import notaParana from '../../../../public/images/NOTA_PARANA.jpg'; // Importa a imagem

interface Loja {
  nome: string;
  responsavel: string;
}

interface FormData {
  nomeEstabelecimento: string;
  razaoSocial: string;
  nomeResponsavel: string;
  endereco: string;
  lojas: Loja[];
}

// Componente para cada loja
const LojaForm: React.FC<{ index: number; loja: Loja; handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void }> = ({ index, loja, handleInputChange }) => (
  <div className={styles.storeDetails}>
    <label>
      Nome da Loja {index + 1}:
      <input
        type="text"
        name="nome"
        value={loja.nome}
        onChange={(e) => handleInputChange(e, index)}
      />
    </label>
    <label>
      Responsável da Loja {index + 1}:
      <input
        type="text"
        name="responsavel"
        value={loja.responsavel}
        onChange={(e) => handleInputChange(e, index)}
      />
    </label>
  </div>
);

const NotaParana: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showDonationOptions, setShowDonationOptions] = useState<boolean>(false);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    nomeEstabelecimento: '',
    razaoSocial: '',
    nomeResponsavel: '',
    endereco: '',
    lojas: [{ nome: '', responsavel: '' }],
  });

  const handleOptionSelection = (option: string) => setSelectedOption(option);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number | null = null) => {
    const { name, value } = e.target;
    if (index !== null) {
      const updatedLojas = [...formData.lojas];
      updatedLojas[index][name as keyof Loja] = value;
      setFormData({ ...formData, lojas: updatedLojas });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddLoja = () => setFormData({ ...formData, lojas: [...formData.lojas, { nome: '', responsavel: '' }] });

  // Função para verificar se todos os campos estão preenchidos
  const validateForm = () => {
    if (
      !formData.nomeEstabelecimento ||
      !formData.razaoSocial ||
      !formData.nomeResponsavel ||
      !formData.endereco ||
      formData.lojas.some((loja) => !loja.nome || !loja.responsavel)
    ) {
      alert('Por favor, preencha todos os campos antes de enviar.');
      return false;
    }
    return true;
  };

  const handleSubmitForm = () => {
    if (!validateForm()) return;

    const message = `Olá! Aqui estão os dados do meu estabelecimento para a caixinha de doações do Nota Paraná:
    Nome do Estabelecimento: ${formData.nomeEstabelecimento}
    Razão Social: ${formData.razaoSocial}
    Nome do Responsável: ${formData.nomeResponsavel}
    Endereço: ${formData.endereco}
    Lojas: ${formData.lojas
        .map((loja, index) => ` Loja ${index + 1}: ${loja.nome} (Responsável: ${loja.responsavel})`)
        .join('')}`;

    const whatsappUrl = `https://wa.me/44997492632?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsFormVisible(false);
  };

  const steps: { [key: string]: string[] } = {
    site: [
      'Acesse o site do Nota Paraná e faça login ou crie uma conta.',
      "Vá até o menu 'MINHAS DOAÇÕES' e clique em 'Doar Notas'.",
      'Escolha a Casa da Paz como beneficiário e finalize o processo.',
    ],
    app: [
      "Baixe o aplicativo 'Nota Paraná' e faça login ou crie uma conta.",
      "Acesse a seção 'Doações' no menu principal e escolha 'Doar Notas'.",
      'Selecione a Casa da Paz como beneficiário e finalize a doação.',
    ],
    fisicamente: [
      'Entre em contato com a Casa da Paz para solicitar a caixinha de doações.',
      'Coloque a caixinha em seu estabelecimento e incentive os clientes a doarem.',
      'A Casa da Paz irá recolher as doações periodicamente.',
    ],
  };

  const toggleDonationOptions = () => {
    setShowDonationOptions(!showDonationOptions);
    if (showDonationOptions) {
      setSelectedOption(null);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image src={notaParana} alt="Nota Paraná Logo" className={styles.logo} />
        <h1>Como Ajudar a Casa da Paz com Suas Notas Fiscais</h1>
        <p>
          Com sua colaboração por meio do sistema Nota Paraná, você pode ajudar a Casa da Paz a impactar a vida de centenas de crianças e adolescentes.
        </p>
      </header>

      <section className={styles.infoCard}>
        <h2>Como Funciona a Doação de Notas Fiscais?</h2>
        <p>
          As notas fiscais sem CPF podem ser doadas para entidades como a Casa da Paz, ajudando a transformar a vida de crianças e adolescentes por meio de projetos sociais.
        </p>
      </section>

      <section className={styles.donationSection}>
        <button
          className={styles.donateButton}
          onClick={toggleDonationOptions}
        >
          Doar Notas Fiscais
        </button>

        {showDonationOptions && (
          <div className={styles.donationOptions}>
            <div
              className={styles.donationOption}
              onClick={() => handleOptionSelection('site')}
            >
              <FaDesktop size={30} />
              <h3>Pelo Site</h3>
            </div>
            <div
              className={styles.donationOption}
              onClick={() => handleOptionSelection('app')}
            >
              <FaMobileAlt size={30} />
              <h3>Pelo App</h3>
            </div>
            <div
              className={styles.donationOption}
              onClick={() => handleOptionSelection('fisicamente')}
            >
              <FaStore size={30} />
              <h3>Fisicamente</h3>
            </div>
          </div>
        )}
      </section>

      {selectedOption && (
        <section className={styles.accordionContainer}>
          <div className={styles.accordion}>
            <h2>
              Passo a Passo para Doação{' '}
              {selectedOption === 'site'
                ? 'pelo Site'
                : selectedOption === 'app'
                  ? 'pelo App'
                  : 'Fisicamente'}
            </h2>
            <div className={styles.stepContent}>
              {steps[selectedOption as keyof typeof steps].map((step, index) => (
                <div key={index} className={styles.stepItem}>
                  {selectedOption === 'site' && <FaDesktop size={20} />}
                  {selectedOption === 'app' && <FaMobileAlt size={20} />}
                  {selectedOption === 'fisicamente' && <FaStore size={20} />}
                  <span className={styles.stepNumber}>{index + 1}</span>
                  {step}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.formSection}>
        <button
          className={styles.addBoxButton}
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          Colocar Caixinha no Estabelecimento
        </button>

        {isFormVisible && (
          <div className={`${styles.formContainer} ${isFormVisible ? styles.fadeInVisible : styles.fadeIn}`}>
            <h2>Formulário de Doação</h2>
            <label>
              Nome do Estabelecimento:
              <input
                type="text"
                name="nomeEstabelecimento"
                value={formData.nomeEstabelecimento}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Razão Social:
              <input
                type="text"
                name="razaoSocial"
                value={formData.razaoSocial}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Nome do Responsável:
              <input
                type="text"
                name="nomeResponsavel"
                value={formData.nomeResponsavel}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Endereço:
              <input
                type="text"
                name="endereco"
                value={formData.endereco}
                onChange={handleInputChange}
              />
            </label>

            {formData.lojas.map((loja, index) => (
              <LojaForm
                key={index}
                index={index}
                loja={loja}
                handleInputChange={handleInputChange}
              />
            ))}

            <button className={styles.addLojaButton} onClick={handleAddLoja}>
              Adicionar Loja
            </button>

            <button className={styles.submitButton} onClick={handleSubmitForm}>
              Enviar
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default NotaParana;
