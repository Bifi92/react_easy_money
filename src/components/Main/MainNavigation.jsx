import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import {AttachMoney, Calculate, Savings} from '@mui/icons-material'
import React from 'react';
import { Paper } from '@mui/material';

function MainNavigation({value, handlerChange}) {
    
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation value={value} onChange={handlerChange} >
                <BottomNavigationAction
                    label="Pagamentos"
                    value="pagamentos"
                    icon={<AttachMoney/>}
                />
                <BottomNavigationAction
                    label="Recebimentos"
                    value="recebimentos"
                    icon={<AttachMoney/>}
                />
                <BottomNavigationAction
                    label="Balanço"
                    value="balanco"
                    icon={<Calculate/>}
                />
                <BottomNavigationAction
                    label="Guardado"
                    value="guardados"
                    icon={<Savings/>}
                />
            </BottomNavigation>
        </Paper>

    );

}

export default MainNavigation;