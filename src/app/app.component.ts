import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from './comps/navi/navi.component';
import { LoginComponent } from './comps/login/login.component';
import { HomeComponent } from "./comps/home/home.component";
import { GradeCalculatorComponent } from './comps/grade-calculator/grade-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NaviComponent, LoginComponent, HomeComponent, GradeCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Angular App";
  score: number = 95;
  span: number = 2;
  ariaDesc: string = 'Submit button';
  userId: string = '12345';
  isWide: boolean = true;
  
  getGrade(): string { return this.score >= 60 ? "PASS" : "FAIL"; }
}

