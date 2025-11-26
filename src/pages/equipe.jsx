import { useEffect, useState } from "react";
import "../assets/css/style.css";
import "../assets/css/consultasAdm.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import axios from "axios";

import medicosJson from "../data/medicos.json";

export default function Equipe() {
  const [medicos, setMedicos] = useState(medicosJson);  

  return (
    <div>
      <Header></Header>
      <main className="conteudoPrincipal">
        <h2 className="conteudoPrincipal-cadastro-titulo">Equipe</h2>
        <div className="container" id="conteudoPrincipal-lista">
          <table id="tabela-lista">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Especialidade</th>
                <th>CRM</th>
                <th>Telefone</th>
              </tr>
            </thead>

            <tbody id="tabela-lista-equipe">
              {medicos.map((event) => {
                let medicoEquipe = medicos.find(m => m.idMedico === event.idMedico);
                return (
                  <tr key={event.idEquipe}>
                    <td>
                      {
                        medicoEquipe.nome
                      }
                    </td>
                    <td>
                      {
                       medicoEquipe.especialidade
                      }
                    </td>
                    <td>
                      {
                       medicoEquipe.crm
                      }
                    </td>
                    <td>
                      {
                       medicoEquipe.telefone 
                      }
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
      </main>
      <Footer></Footer>
    </div>
  );
}
