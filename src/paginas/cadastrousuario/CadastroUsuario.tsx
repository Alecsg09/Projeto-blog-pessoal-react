import React, { useState, ChangeEvent, useEffect } from "react";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import { TextField } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastrousuario } from "../../service/Service";


import './CadastroUsuario.css';


function CadastroUsuario() {
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>('')
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',


        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',


        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha === user.senha && user.senha.length >= 8) {

            try {
                await cadastrousuario(`usuarios/cadastrar`, user, setUserResult)
                alert('Usuário cadastrado com sucesso')

            } catch (error) {


                alert("Usuário já existente")

            }

        } else {
            alert('Por favor, verifique os dados.')
            setUser({ ...user, senha: "" })
            setConfirmarSenha("")
        }
    }


    return (
        <Grid container direction='row' justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component='h3' align='center' style={{ fontWeight: 'bold' }}>Entrar</Typography>
                        <TextField
                            value={user.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='nome'
                            label='nome'
                            variant='outlined'
                            name='nome'
                            margin='normal'
                            fullWidth required />

                        <TextField
                            value={user.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='usuario'
                            label='email'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            type='email'
                            fullWidth required />

                        <TextField
                            value={user.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='senha'
                            label='senha'
                            variant='outlined'
                            name='senha'
                            margin='normal'
                            type='password'
                            fullWidth required />

                        <TextField
                            value={confirmarSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id='confirmarSenha'
                            label='confirmar senha'
                            variant='outlined'
                            name='confirmarSenha'
                            margin='normal'
                            type='password'
                            fullWidth required />

                        <TextField
                            value={user.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='foto'
                            label='foto'
                            variant='outlined'
                            name='foto'
                            margin='normal'
                            fullWidth />

                        <Box marginTop={2} textAlign='center'>

                            <Button type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>

                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                           
                        </Box>
                        
                    </Box>

                </Box>

            </Grid>
            <Grid xs={6} style={{
                backgroundImage: `url(https://imgur.com/WUPUNBy.jpg)`,
                backgroundRepeat: 'no-repeat', width: "100vh", minHeight: "100vh", backgroundSize: "cover", backgroundPosition: "center"
            }}>

            </Grid>

        </Grid>



    );


}


export default CadastroUsuario;