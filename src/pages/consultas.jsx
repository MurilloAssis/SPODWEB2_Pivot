import { useEffect, useState } from "react";
import "../assets/css/style.css";
import "../assets/css/consultasAdm.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { consultaService, medicoService, pacienteService } from "../services/apiService";

export default function Consultas() {
  const [consultas, setConsultas] = useState([]);
  const [medicos, setMedicos] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    idMedico: "",
    idPaciente: "",
    dataHora: "",
    status: "Agendada",
    observacoes: ""
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try {
      setLoading(true);
      const [consultasRes, medicosRes, pacientesRes] = await Promise.all([
        consultaService.getAll(),
        medicoService.getAll(),
        pacienteService.getAll()
      ]);
      setConsultas(consultasRes.data);
      setMedicos(medicosRes.data);
      setPacientes(pacientesRes.data);
    } catch (error) {
      alert("Erro ao carregar dados: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (editingId) {
        await consultaService.update(editingId, formData);
        alert("Consulta atualizada com sucesso!");
        setEditingId(null);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        await consultaService.create(formData);
        alert("Consulta agendada com sucesso!");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
      
      carregarDados();
      setFormData({
        idMedico: "",
        idPaciente: "",
        dataHora: "",
        status: "Agendada",
        observacoes: ""
      });
    } catch (error) {
      alert("Erro: " + error.message);
    }
  };

  const handleEdit = (consulta) => {
    setFormData(consulta);
    setEditingId(consulta.idConsulta);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Deseja deletar esta consulta?")) {
      try {
        await consultaService.delete(id);
        alert("Consulta deletada com sucesso!");
        carregarDados();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        alert("Erro ao deletar: " + error.message);
      }
    }
  };

  if (loading) {
    return (
      <div>
        <Header></Header>
        <main className="conteudoPrincipal">
          <p>Carregando...</p>
        </main>
        <Footer></Footer>
      </div>
    );
  }

  return (
    <div>
      <Header></Header>
      <main className="conteudoPrincipal">
        <h2 className="conteudoPrincipal-cadastro-titulo">Consultas</h2>
        
        <div id="conteudoPrincipal-cadastro">
          <div className="container">
            <h3>{editingId ? "Editar Consulta" : "Agendar Nova Consulta"}</h3>
            <form className="form_cadastrar" onSubmit={handleSubmit}>
              <input
                type="text"
                className="input_form"
                name="observacoes"
                placeholder="Descrição"
                value={formData.observacoes}
                onChange={handleInputChange}
                required
              />
              <select
                className="input_form"
                name="idMedico"
                value={formData.idMedico}
                onChange={handleInputChange}
                required
              >
                <option value="">Selecione um Médico</option>
                {medicos.map(m => (
                  <option key={m.idMedico} value={m.idMedico}>{m.nome}</option>
                ))}
              </select>
              <select
                className="input_form"
                name="idPaciente"
                value={formData.idPaciente}
                onChange={handleInputChange}
                required
              >
                <option value="">Selecione um Paciente</option>
                {pacientes.map(p => (
                  <option key={p.idPaciente} value={p.idPaciente}>{p.nome}</option>
                ))}
              </select>
              <input
                type="datetime-local"
                className="input_form"
                name="dataHora"
                value={formData.dataHora}
                onChange={handleInputChange}
                required
              />
              <select
                className="input_form"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
              >
                <option value="Agendada">Agendada</option>
                <option value="Realizada">Realizada</option>
                <option value="Cancelada">Cancelada</option>
              </select>
              <textarea
                className="input_form"
                name="observacoes"
                placeholder="Observações"
                value={formData.observacoes}
                onChange={handleInputChange}
              ></textarea>
              <button type="submit" className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro">
                {editingId ? "Atualizar" : "Agendar"}
              </button>
              {editingId && (
                <button
                  type="button"
                  className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                  onClick={() => {
                    setEditingId(null);
                    setFormData({
                      idMedico: "",
                      idPaciente: "",
                      dataHora: "",
                      status: "Agendada",
                      observacoes: ""
                    });
                  }}
                >
                  Cancelar
                </button>
              )}
            </form>
          </div>
        </div>

        <div className="container" id="conteudoPrincipal-lista">
          <table id="tabela-lista">
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Paciente</th>
                <th>Médico</th>
                <th>Data</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody id="tabela-lista-corpo">
              {consultas.map((consulta) => {
                let medicoConsulta = medicos.find(m => m.idMedico === parseInt(consulta.idMedico));
                let pacienteConsulta = pacientes.find(p => p.idPaciente === parseInt(consulta.idPaciente));
                return (
                  <tr key={consulta.idConsulta}>
                    <td>{consulta.observacoes}</td>
                    <td>{pacienteConsulta?.nome}</td>
                    <td>{medicoConsulta?.nome}</td>
                    <td>
                      {new Date(consulta.dataHora).toLocaleString('pt-BR')}
                    </td>
                    <td>{consulta.status}</td>
                    <td>
                      <button onClick={() => handleEdit(consulta)} className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro" style={{width: '80px', padding: '5px', marginRight: '5px'}}>
                        Editar
                      </button>
                      <button onClick={() => handleDelete(consulta.idConsulta)} className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro" style={{width: '80px', padding: '5px', background: '#e74c3c'}}>
                        Deletar
                      </button>
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