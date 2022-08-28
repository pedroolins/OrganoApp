import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/formulario';
import Time from './components/Time';

function App() {
  const [colaboradores, setColaboradores] = useState([])
  const addNovoColaborador = (colaborador) =>{
    setColaboradores([...colaboradores, colaborador])
  }
  const times = [
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E8',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FA95F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]
  return (
    <div className="App">
      <Banner />
      <Formulario colaboradorCadastrado={colaborador => addNovoColaborador(colaborador)} timesLista={times.map(time => time.nome)}/>
      {times.map(time => <Time 
        key={time.nome} 
        nomeTime={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  );
}

export default App;
