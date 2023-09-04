import "./form.css";
import TextField from "../TextField";
import Dropdown from "../Dropdown";
import Button from "../Button";
import { useState } from 'react';

export const  Form = (props) => {

  const teams = [
    'Programação',
    'Front-End',
    'Data-Science',
    'DevOps',
    'Ux e Design',
    'Mobile',
    'Inovação e Gestão',
  ]

  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const onSave = (e) => {
    e.preventDefault();
    console.log("form sended", name, cargo, image, team);
    props.registerEmployee({
      name: name, 
      cargo: cargo, 
      image: image, 
      team: team,
    });
  }
  
  return (
    <section className="form-box">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField 
        obrigatory={true} 
        label="Nome" 
        placeholder="Digite seu nome" 
        val={name}
        onChangex={val => setName(val)}
        />
        <TextField 
        obrigatory={true} 
        label="Cargo" 
        placeholder="Digite seu cargo"
        val={cargo}
        onChangex={val => setCargo(val)} 
        />
        <TextField 
        label="Imagem" 
        placeholder="Digite o endereço da sua imagem"
        val={image}
        onChangex={val => setImage(val)}
        />
        <Dropdown 
        obrigatory={true} 
        label="Time" 
        items={teams}
        val={team}
        onChangex={val => setTeam(val)}
        />
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  );
};
