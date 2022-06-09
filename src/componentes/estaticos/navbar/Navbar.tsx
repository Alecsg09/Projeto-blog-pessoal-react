import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { addToken } from '../../../store/tokens/Actions';
import {toast} from 'react-toastify';



function Navbar() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const dispatch = useDispatch();


    function goLogout() {
        dispatch(addToken(''))
        toast.success('Usuario Desligado', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            });
        navigate('/login')
    }

    var navbarComponent;
    if (token != "") {
        navbarComponent = <AppBar position="static">
            <Toolbar variant="dense" style={{ backgroundColor: "black" }}>
                <Box className='cursor'>
                    <Typography variant="h5" color="inherit">
                        BlogPessoal
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="start">
                    <Link to="/home" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/posts" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/formularioTema" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                    </Link>

                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            logout
                        </Typography>
                    </Box>

                </Box>

            </Toolbar>
        </AppBar>

    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;