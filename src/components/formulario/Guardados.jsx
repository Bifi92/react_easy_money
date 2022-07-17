import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { AppBar } from "@mui/material";
import React from "react";
import { useState } from "react";
import Guardados from "../../models/Guardados";

export default function GuardadosFormulario({guardadoDao}){

    const [nome, setNome] = useState("");
    const [valor, setValor] = useState(0);
    return (
        <>
            <AppBar position="static">
                <Typography sx={{ textAlign: 'center'}} variant="h6">
                    Novo guardado
                </Typography>
            </AppBar>
            <form onSubmit={(event)=>{
                event.preventDefault();
                guardadoDao.inserir(new Guardados(nome, valor));
            }}
            >
                <TextField 
                    value = {nome}
                    onChange={(event) => setNome(event.target.value) }
                    id='nome' 
                    label='Nome'
                    variant='outlined' 
                    margin='normal' 
                    fullWidth
                />
                
                <TextField 
                    value={valor}
                    onChange={(event) => setValor(event.target.value) }
                    id='valor' 
                    label='Valor' 
                    variant='outlined' 
                    margin='normal'
                    type="number"
                    fullWidth
                />

                <Button type='submit' variant='contained' color='primary'>Cadastrar</Button>
            </form>
        </>

    );

}