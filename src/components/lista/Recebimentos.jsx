import { List } from '@mui/material';
import { ListItemText } from '@mui/material';
import { AppBar } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { ListItem } from '@mui/material';
import { Divider } from '@mui/material';
import React from 'react';
import RecebimentoDao from '../../dao/RecebimentoDao';

export default function RecebimentosLista() {

    const dao = new RecebimentoDao();

    return (
        <Container>
            <AppBar position="static">
                <Typography sx={{ textAlign: 'center'}} variant="h6">
                    Total: {dao.getTotalRecebimentos()}
                </Typography>
            </AppBar>
            <List sx={{marginBottom: '50px'}}>
                {dao.findAll().map((value, index)=>{
                    return (
                    <section>
                        <ListItem key={index}>
                            <ListItemText
                                primary={value.nome}
                                secondary={value.valor}
                            />
                        </ListItem>
                        <Divider/> 
                    </section>);
                })}
            </List>
        </Container>
        );
    
}