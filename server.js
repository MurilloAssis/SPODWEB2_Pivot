const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Caminhos dos arquivos JSON
const medicosPath = path.join(__dirname, 'src/data/medicos.json');
const pacientesPath = path.join(__dirname, 'src/data/pacientes.json');
const consultasPath = path.join(__dirname, 'src/data/consultas.json');

// Funções auxiliares
const readFile = (filePath) => {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const writeFile = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// ===== MÉDICOS =====
app.get('/api/medicos', (req, res) => {
  try {
    const medicos = readFile(medicosPath);
    res.json(medicos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao ler médicos' });
  }
});

app.post('/api/medicos', (req, res) => {
  try {
    const medicos = readFile(medicosPath);
    const newMedico = {
      ...req.body,
      idMedico: medicos.length > 0 ? Math.max(...medicos.map(m => m.idMedico)) + 1 : 1
    };
    medicos.push(newMedico);
    writeFile(medicosPath, medicos);
    res.json(newMedico);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar médico' });
  }
});

app.put('/api/medicos/:id', (req, res) => {
  try {
    const medicos = readFile(medicosPath);
    const index = medicos.findIndex(m => m.idMedico === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).json({ error: 'Médico não encontrado' });
    }
    medicos[index] = { ...medicos[index], ...req.body };
    writeFile(medicosPath, medicos);
    res.json(medicos[index]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar médico' });
  }
});

app.delete('/api/medicos/:id', (req, res) => {
  try {
    let medicos = readFile(medicosPath);
    medicos = medicos.filter(m => m.idMedico !== parseInt(req.params.id));
    writeFile(medicosPath, medicos);
    res.json({ message: 'Médico deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar médico' });
  }
});

// ===== PACIENTES =====
app.get('/api/pacientes', (req, res) => {
  try {
    const pacientes = readFile(pacientesPath);
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao ler pacientes' });
  }
});

app.post('/api/pacientes', (req, res) => {
  try {
    const pacientes = readFile(pacientesPath);
    const newPaciente = {
      ...req.body,
      idPaciente: pacientes.length > 0 ? Math.max(...pacientes.map(p => p.idPaciente)) + 1 : 1
    };
    pacientes.push(newPaciente);
    writeFile(pacientesPath, pacientes);
    res.json(newPaciente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar paciente' });
  }
});

app.put('/api/pacientes/:id', (req, res) => {
  try {
    const pacientes = readFile(pacientesPath);
    const index = pacientes.findIndex(p => p.idPaciente === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).json({ error: 'Paciente não encontrado' });
    }
    pacientes[index] = { ...pacientes[index], ...req.body };
    writeFile(pacientesPath, pacientes);
    res.json(pacientes[index]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar paciente' });
  }
});

app.delete('/api/pacientes/:id', (req, res) => {
  try {
    let pacientes = readFile(pacientesPath);
    pacientes = pacientes.filter(p => p.idPaciente !== parseInt(req.params.id));
    writeFile(pacientesPath, pacientes);
    res.json({ message: 'Paciente deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar paciente' });
  }
});

// ===== CONSULTAS =====
app.get('/api/consultas', (req, res) => {
  try {
    const consultas = readFile(consultasPath);
    res.json(consultas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao ler consultas' });
  }
});

app.post('/api/consultas', (req, res) => {
  try {
    const consultas = readFile(consultasPath);
    const newConsulta = {
      ...req.body,
      idConsulta: consultas.length > 0 ? Math.max(...consultas.map(c => c.idConsulta)) + 1 : 1
    };
    consultas.push(newConsulta);
    writeFile(consultasPath, consultas);
    res.json(newConsulta);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar consulta' });
  }
});

app.put('/api/consultas/:id', (req, res) => {
  try {
    const consultas = readFile(consultasPath);
    const index = consultas.findIndex(c => c.idConsulta === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).json({ error: 'Consulta não encontrada' });
    }
    consultas[index] = { ...consultas[index], ...req.body };
    writeFile(consultasPath, consultas);
    res.json(consultas[index]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar consulta' });
  }
});

app.delete('/api/consultas/:id', (req, res) => {
  try {
    let consultas = readFile(consultasPath);
    consultas = consultas.filter(c => c.idConsulta !== parseInt(req.params.id));
    writeFile(consultasPath, consultas);
    res.json({ message: 'Consulta deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar consulta' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});