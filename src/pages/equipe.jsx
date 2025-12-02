import { useEffect, useState } from "react";
import "../assets/css/style.css";
import "../assets/css/consultasAdm.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { medicoService } from "../services/apiService";

export default function Equipe() {
  const [medicos, setMedicos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    nome: "",
    especialidade: "",
    crm: "",
    telefone: ""
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    carregarMedicos();
  }, []);

  const carregarMedicos = async () => {
    try {
      setLoading(true);
      const response = await medicoService.getAll();
      setMedicos(response.data);
    } catch (error) {
      alert("Erro ao carregar médicos: " + error.message);
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
        await medicoService.update(editingId, formData);
        alert("Médico atualizado com sucesso!");
        setEditingId(null);
        setTimeout(() => {
            window.location.reload();
          }, 1000);
      } else {
        await medicoService.create(formData);
        alert("Médico adicionado com sucesso!");
        setTimeout(() => {
            window.location.reload();
          }, 1000);
      }
      
      carregarMedicos();
      setFormData({ nome: "", especialidade: "", crm: "", telefone: "" });
    } catch (error) {
      alert("Erro: " + error.message);
    }
  };

  const handleEdit = (medico) => {
    setFormData(medico);
    setEditingId(medico.idMedico);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Deseja deletar este médico?")) {
      try {
        await medicoService.delete(id);
        alert("Médico deletado com sucesso!");
        carregarMedicos();
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
        <h2 className="conteudoPrincipal-cadastro-titulo">Equipe</h2>
        
        <div id="conteudoPrincipal-cadastro">
          <div className="container">
            <h3>{editingId ? "Editar Médico" : "Adicionar Novo Médico"}</h3>
            <form className="form_cadastrar" onSubmit={handleSubmit}>
              <input
                type="text"
                className="input_form"
                name="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                className="input_form"
                name="especialidade"
                placeholder="Especialidade"
                value={formData.especialidade}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                className="input_form"
                name="crm"
                placeholder="CRM"
                value={formData.crm}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                className="input_form"
                name="telefone"
                placeholder="Telefone"
                value={formData.telefone}
                onChange={handleInputChange}
                required
              />
              <button type="submit" className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro">
                {editingId ? "Atualizar" : "Adicionar"}
              </button>
              {editingId && (
                <button
                  type="button"
                  className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                  onClick={() => {
                    setEditingId(null);
                    setFormData({ nome: "", especialidade: "", crm: "", telefone: "" });
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
                <th>Nome</th>
                <th>Especialidade</th>
                <th>CRM</th>
                <th>Telefone</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody id="tabela-lista-equipe">
              {medicos.map((medico) => (
                <tr key={medico.idMedico}>
                  <td>{medico.nome}</td>
                  <td>{medico.especialidade}</td>
                  <td>{medico.crm}</td>
                  <td>{medico.telefone}</td>
                  <td>
                    <button onClick={() => handleEdit(medico)} className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro" style={{width: '80px', padding: '5px', marginRight: '5px'}}>
                      Editar
                    </button>
                    <button onClick={() => handleDelete(medico.idMedico)} className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro" style={{width: '80px', padding: '5px', background: '#e74c3c'}}>
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}