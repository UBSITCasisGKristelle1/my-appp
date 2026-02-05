import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from '.comps/navi/navi.component';

@Component({
  selector: 'app-root',
  imports: [NaviComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class CompsComponent {
title = 'my-appp';
}
