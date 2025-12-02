import React, { Fragment } from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import styles from "../assets/css/contatenos.module.css";
import contatos from "../data/contatos.json"

const Contatenos = () => {

  return (
    <Fragment>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>📞 Entre em Contato</h1>
          <p className={styles.subtitle}>
            Estamos aqui para ajudar você. Escolha a melhor forma de entrar em contato conosco.
          </p>
        </div>

        <div className={styles.contactsGrid}>
          {contatos.map((contato, index) => (
            <div key={index} className={styles.contactCard}>
              <div className={styles.contactIcon}>{contato.icone}</div>
              <h3 className={styles.contactType}>{contato.tipo}</h3>
              <p className={styles.contactValue}>{contato.valor}</p>
              <p className={styles.contactDescription}>{contato.descricao}</p>
            </div>
          ))}
        </div>

        <div className={styles.emergencySection}>
          <div className={styles.emergencyCard}>
            <h2 className={styles.emergencyTitle}>🚨 Emergências</h2>
            <p className={styles.emergencyText}>
              Para casos de emergência fora do horário comercial, 
              ligue para: <strong>(11) 99999-9999</strong>
            </p>
            <p className={styles.emergencyNote}>
              Atendimento 24 horas para situações críticas
            </p>
          </div>
        </div>

        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>📝 Envie uma Mensagem</h2>
          <form className={styles.contactForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="nome" className={styles.formLabel}>Nome Completo</label>
                <input 
                  type="text" 
                  id="nome" 
                  className={styles.formInput}
                  placeholder="Seu nome completo"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className={styles.formInput}
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="assunto" className={styles.formLabel}>Assunto</label>
              <input 
                type="text" 
                id="assunto" 
                className={styles.formInput}
                placeholder="Assunto da mensagem"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="mensagem" className={styles.formLabel}>Mensagem</label>
              <textarea 
                id="mensagem" 
                className={styles.formTextarea}
                rows="5"
                placeholder="Descreva sua dúvida ou solicitação..."
              ></textarea>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contatenos;