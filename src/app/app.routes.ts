import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { NaviComponent } from './comps/navi/navi.component';
import { LoginComponent } from './comps/login/login.component';
import { GradeCalculatorComponent } from './comps/grade-calculator/grade-calculator.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'navi', component: NaviComponent },
    { path: 'grade', component: GradeCalculatorComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
