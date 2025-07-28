import { Routes } from '@angular/router';
import { Master } from './shared/layouts/master/master';
import { Login } from './pages/login/login'
import { Messages } from './pages/messages/messages'
import { Register } from './pages/register/register'
import { Compose } from './pages/compose/compose';

export const routes: Routes = [
    {path:'', 
        component: Master, 
        children:[
        {path: '', component: Login},
        {path: 'register', component: Register},    
        {path: 'messages', component: Messages},
        {path: 'compose', component: Compose}
    ]}
];
