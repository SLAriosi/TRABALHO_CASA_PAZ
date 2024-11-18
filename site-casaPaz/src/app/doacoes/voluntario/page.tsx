'use client'; // Marca este componente como um componente do cliente

import React, { useState, useEffect } from 'react';
import styles from './Voluntariado.module.css';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

const VoluntariadoPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const images = [
    '/banner/DSC_0466.jpg',
    '/banner/DSC_0612.jpg',
    '/banner/DSC_0665.jpg',
  ];

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // Função para alterar a imagem do carrossel automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = `Nome Completo: ${name}%0AEmail: ${email}%0ACargo de Voluntário Desejado: ${role}`;
    const whatsappURL = `https://wa.me/44997492632?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Seja um Voluntário</h1>
        <p className={styles.subtitle}>
          Junte-se a nós para fazer a diferença na vida das crianças!
        </p>
      </header>

      <div className={styles.carousel}>
        <img
          className={styles.carouselImage}
          src={images[currentImage]}
          alt="Imagem de voluntariado"
        />
        <div className={styles.carouselControls}>
          <IconButton
            className="hidden md:flex"
            aria-label="left-arrow"
            colorScheme="messenger"
            bg={"#496fb1b5"}
            borderRadius="full"
            position="absolute"
            left={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() =>
              setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length)
            }
          >
            <BiLeftArrowAlt color="#fff" size={20} />
          </IconButton>
          <IconButton
            className="hidden md:flex"
            aria-label="right-arrow"
            colorScheme="messenger"
            borderRadius="full"
            position="absolute"
            bg={"#496fb1b5"}
            right={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() =>
              setCurrentImage((prevIndex) => (prevIndex + 1) % images.length)
            }
          >
            <BiRightArrowAlt color="#fff" />
          </IconButton>
        </div>
      </div>

      <section className={styles.impactSection}>
        <h2 className={styles.impactTitle}>O Impacto do Seu Voluntariado</h2>
        <p className={styles.impactText}>
          Seu tempo e dedicação podem transformar vidas. Ao se tornar um voluntário, você contribui diretamente
          para o crescimento e bem-estar de crianças e jovens em situação de vulnerabilidade social.
        </p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>150+</span>
            <p className={styles.statDescription}>Crianças atendidas mensalmente</p>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>300+</span>
            <p className={styles.statDescription}>Voluntários ao redor do Brasil</p>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>50+</span>
            <p className={styles.statDescription}>Projetos de apoio em andamento</p>
          </div>
        </div>
      </section>

      <section className={styles.volunteerRoles}>
        <h2 className={styles.rolesTitle}>Cargos de Voluntário</h2>
        <ul className={styles.rolesList}>
          <li className={styles.roleItem}>
            <h3 className={styles.roleTitle}>Mentor de Crianças</h3>
            <p className={styles.roleDescription}>
              Apoie crianças em atividades educacionais e emocionais, sendo uma figura de inspiração para o seu
              desenvolvimento.
            </p>
          </li>
          <li className={styles.roleItem}>
            <h3 className={styles.roleTitle}>Assistente de Eventos</h3>
            <p className={styles.roleDescription}>
              Ajude na organização de eventos para arrecadação de fundos e promoção da instituição.
            </p>
          </li>
          <li className={styles.roleItem}>
            <h3 className={styles.roleTitle}>Apoio Logístico</h3>
            <p className={styles.roleDescription}>
              Preste assistência na logística e na coordenação de atividades internas e externas da instituição.
            </p>
          </li>
        </ul>
      </section>

      <section className={styles.formSection}>
        <h2 className={styles.formTitle}>Inscreva-se como Voluntário</h2>
        <p className={styles.formDescription}>
          Complete o formulário abaixo para fazer parte do nosso time de voluntários.
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.formLabel} htmlFor="name">
            Nome Completo
          </label>
          <input
            className={styles.formInput}
            type="text"
            id="name"
            placeholder="Seu nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className={styles.formLabel} htmlFor="email">
            E-mail
          </label>
          <input
            className={styles.formInput}
            type="email"
            id="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className={styles.formLabel} htmlFor="role">
            Cargo de Voluntário Desejado
          </label>
          <select
            className={styles.formSelect}
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Selecione uma opção</option>
            <option value="Mentor de Crianças">Mentor de Crianças</option>
            <option value="Assistente de Eventos">Assistente de Eventos</option>
            <option value="Apoio Logístico">Apoio Logístico</option>
          </select>

          <button className={styles.formSubmit} type="submit">
            Enviar Inscrição
          </button>
        </form>
      </section>
    </div>
  );
};

export default VoluntariadoPage;
