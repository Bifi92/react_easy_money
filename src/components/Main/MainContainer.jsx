import { Container } from '@mui/material';
import React from 'react';
import Balanco from '../lista/Balanco';
import GuardadosLista from '../lista/Guardados';
import GuardadosFormulario from '../formulario/Guardados';
import PagamentosLista from '../lista/Pagamentos';
import RecebimentosLista from '../lista/Recebimentos';
import { Grid } from '@mui/material';
import RecebimentosFormulario from '../formulario/Recebimentos';
import PagamentosFormulario from '../formulario/Pagamentos';

export default function MainContainer({value,
                                        pagamentos,
                                        setPagamentos,
                                        handlerCheckbox,
                                        guardados,
                                        setGuardados,
                                        guardadoDao}) {
    
    if(value === 'guardados'){
        return (
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <GuardadosFormulario guardadoDao={guardadoDao}/>
                    </Grid>
                    <Grid item xs={8}>
                        <GuardadosLista guardados={guardados}/>
                    </Grid>
                </Grid>
                );
    }
    if(value === 'pagamentos'){
        return ( <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <PagamentosFormulario/>
                    </Grid>
                    <Grid item xs={8}>
                        <PagamentosLista pagamentos={pagamentos} handlerCheckbox={handlerCheckbox}/>
                    </Grid>
                </Grid>
                );
    }
    if(value === 'recebimentos'){
        return (
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <RecebimentosFormulario/>
                </Grid>
                <Grid item xs={8}>
                    <RecebimentosLista/>
                </Grid>
            </Grid>
            );
    }
    if(value === 'balanco'){
        return (<Balanco/>);
    }

    return (<Container/>);

}