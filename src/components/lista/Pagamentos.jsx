import { List } from '@mui/material';
import { ListItemText } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { Checkbox } from '@mui/material';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { AppBar } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { Divider } from '@mui/material';
import React from 'react';
import PagamentoDao from '../../dao/PagamentoDao';

export default function PagamentosLista({pagamentos, handlerCheckbox}) {

    const dao = new PagamentoDao();

    return (
        <Container>
            <AppBar position="static">
                <Typography sx={{ textAlign: 'center'}} variant="h6">
                    {dao.getTotais()}
                </Typography>
            </AppBar>
            <List sx={{marginBottom: '50px'}}>
                {pagamentos.map((value, id)=>{

                    return (
                        <section key={id}>
                            <ListItemButton onClick={() => {handlerCheckbox(id)}} >
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={value.isPago}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary={value.nome}
                                    secondary={value.valor}
                                />
                            </ListItemButton>
                            <Divider/>
                        </section>);
                })}
            </List>

        </Container>
        );
    
}