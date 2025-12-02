import React, { useState, Fragment } from "react";
import styles from "../assets/css/home.module.css";

import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import medicosJson from "../data/medicos.json";
import pacientesJson from "../data/pacientes.json";
import consultasJson from "../data/consultas.json";

const Home = () => {
  const [medicos, setMedicos] = useState(medicosJson);
  const [pacientes, setPacientes] = useState(pacientesJson);
  const [consultas, setConsultas] = useState(consultasJson);

  const totalMedicos = medicos?.length;
  const totalPacientes = pacientes?.length;
  const consultasAgendadas = consultas?.filter(c => c.status === 'Agendada').length;

  return (
    <Fragment>
      <Header/>
      <div className={styles.container}>
        <h2 className={styles.title}>✨ Visão Geral do Sistema</h2>

        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            Total de Médicos: <strong>{totalMedicos}</strong>
          </div>
          <div className={styles.statItem}>
            Total de Pacientes: <strong>{totalPacientes}</strong>
          </div>
        </div>
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            Consultas Agendadas: <strong>{consultasAgendadas}</strong>
          </div>
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default Home;