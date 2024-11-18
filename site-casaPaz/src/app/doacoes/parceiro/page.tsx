'use client';

import React, { useState } from 'react';
import styles from './parceiros.module.css';

const CasaDaPazParceiro = () => {
  // Estado para controle dos modais
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [isReferralModalOpen, setIsReferralModalOpen] = useState(false);
  const [partnerName, setPartnerName] = useState(''); // Estado para armazenar o nome do parceiro indicado

  // Função para abrir e fechar os modais
  const openPartnerModal = () => setIsPartnerModalOpen(true);
  const closePartnerModal = () => setIsPartnerModalOpen(false);
  
  const openReferralModal = () => setIsReferralModalOpen(true);
  const closeReferralModal = () => setIsReferralModalOpen(false);

  // Mensagens para WhatsApp
  const partnerMessage = 'Gostaria de me tornar um parceiro da Casa da Paz. Por favor, me envie mais informações.';
  const referralMessage = partnerName 
    ? `Gostaria de indicar um parceiro para a Casa da Paz. O nome do indicado é ${partnerName}.` 
    : 'Gostaria de indicar um parceiro para a Casa da Paz. O nome do indicado é [Nome do Parceiro].';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPartnerName(e.target.value); // Atualiza o nome do parceiro no estado
  };

  return (
    <div className={styles.container}>
      {/* Seção de Nossos Parceiros */}
      <section className={styles.partnersSection}>
        <h2 className={styles.sectionTitle}>Nossos Parceiros</h2>
        <p className={styles.missionText}>
          A parceria com a Casa da Paz fortalece a transformação social. Conheça as empresas que estão fazendo a diferença.
        </p>

        <div className={styles.partnersLogos}>
          {/* Logo dos parceiros */}
          <div className={styles.logoWrapper}>
            <img src="/images/ALFALOGO.png" alt="ALFA" className={styles.partnerLogo} />
          </div>
          <div className={styles.logoWrapper}>
            <img src="/images/AMAZON.jpg" alt="Amazon" className={styles.partnerLogo} />
          </div>
          <div className={styles.logoWrapper}>
            <img src="/images/MICROSOFT.jpg" alt="Microsoft" className={styles.partnerLogo} />
          </div>
          <div className={styles.logoWrapper}>
            <img src="/images/APPLE.jpg" alt="Apple" className={styles.partnerLogo} />
          </div>
          <div className={styles.logoWrapper}>
            <img src="/images/WALMART.JPG" alt="Walmart" className={styles.partnerLogo} />
          </div>
        </div>
      </section>

      {/* Seção de Benefícios da Parceria */}
      <section className={styles.benefitsSection}>
        <h2 className={styles.sectionTitle}>Por Que Ser Parceiro?</h2>
        <div className={styles.benefits}>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Aumente sua Visibilidade</h3>
            <p className={styles.benefitDescription}>
              Associe sua marca a uma causa social importante e ganhe visibilidade positiva.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Transformação Social</h3>
            <p className={styles.benefitDescription}>
              Faça parte de um movimento que impacta positivamente crianças, adolescentes e suas famílias.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Cresça Junto Conosco</h3>
            <p className={styles.benefitDescription}>
              Juntos, podemos alcançar mais pessoas e gerar mais resultados transformadores.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Apelo para Novos Parceiros */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Seja um Parceiro Transformador</h2>
        <p className={styles.ctaText}>
          Sua contribuição pode transformar a vida de mais de 60 crianças e adolescentes em nossa comunidade. Faça a diferença!
        </p>
        <div className={styles.ctaButtons}>
          <button className={styles.partnerButton} onClick={openPartnerModal}>Quero Ser Parceiro</button>
          <button className={styles.contactButton} onClick={openReferralModal}>Indique um Parceiro</button>
        </div>
      </section>

      {/* Modal - Quero Ser Parceiro */}
      {isPartnerModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.closeModal} onClick={closePartnerModal}>X</button>
            <h3>Quero Ser Parceiro</h3>
            <p>Obrigado pelo seu interesse em se tornar um parceiro da Casa da Paz. Envie uma mensagem pelo WhatsApp para obter mais informações.</p>
            <a 
              href={`https://wa.me/5544997492632?text=${encodeURIComponent(partnerMessage)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.whatsappButton}
            >
              Enviar Mensagem no WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Modal - Indique um Parceiro */}
      {isReferralModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.closeModal} onClick={closeReferralModal}>X</button>
            <h3>Indique um Parceiro</h3>
            <p>Indique um parceiro para a Casa da Paz. Preencha o nome do parceiro abaixo.</p>
            <input 
              type="text" 
              placeholder="Nome do Parceiro" 
              className={styles.referralInput} 
              value={partnerName}
              onChange={handleInputChange} // Atualiza o nome conforme o usuário digita
            />
            <a 
              href={`https://wa.me/5544997492632?text=${encodeURIComponent(referralMessage)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.whatsappButton}
            >
              Enviar Indicação
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CasaDaPazParceiro;
