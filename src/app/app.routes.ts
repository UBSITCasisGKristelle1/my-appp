import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { NaviComponent } from './comps/navi/navi.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'navi', component: NaviComponent},
    
    
];
