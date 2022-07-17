import { Typography } from '@mui/material';
import { CardContent } from '@mui/material';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Card } from '@mui/material';
import React from 'react';
import BalancoDao from '../../dao/BalancoDao';
import PagamentoDao from '../../dao/PagamentoDao';
import RecebimentoDao from '../../dao/RecebimentoDao';

export default function Balanco() {
    const daoPagamentos = new PagamentoDao();
    const daoRecebimentos = new RecebimentoDao();
    const daoBalanco = new BalancoDao();
    return (
            <Container 
            component={'article'} 
            maxWidth='md'
            >
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <Card sx={{ textAlign: 'center', backgroundColor: "red", height:100}}>
                            <CardContent>
                                <Typography variant='h5'>
                                    Total Pago:
                                </Typography>
                                <Typography variant='h6'>
                                    {daoPagamentos.getTotalPagos()}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={5}>
                        <Card sx={{textAlign: 'center', backgroundColor: "blue", height:100 }}>
                            <CardContent>
                                <Typography variant='h5'>
                                    Total Recebido:
                                </Typography>
                                <Typography variant='h6'>
                                    {daoRecebimentos.getTotalRecebimentos()}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={10} center>
                        <Card sx={{textAlign: 'center', backgroundColor: "green", height:100}}>
                            <CardContent>
                                <Typography variant='h5'>
                                    Total Sobra:
                                </Typography>
                                <Typography variant='h6'>
                                    {daoBalanco.getTotalSobra()}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        );
    
}