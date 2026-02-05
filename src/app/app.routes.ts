import { Routes } from '@angular/router';
import { AboutComponent } from './comps/about/about.component';
import { LoginComponent } from './comps/login/login.component';
import { HomeComponent } from './comps/home/home.component';
import { NaviComponent } from './comps/navi/navi.component';

export const routes: Routes = [
   { 
    path: 'login',
    component: LoginComponent,
   },
    {   
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    { 
        path: 'navi',
        component: NaviComponent,
    }
];
