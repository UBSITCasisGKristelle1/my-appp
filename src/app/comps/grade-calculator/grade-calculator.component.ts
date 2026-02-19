import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grade-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './grade-calculator.component.html',
  styleUrls: ['./grade-calculator.component.css']
})
export class GradeCalculatorComponent {
  studentName: string = 'Yael Gale';
  score: number = 75;
  gradeColor: string = '#2E75B6';
  passing: boolean = true;
  colSpan: number = 2;
  isHighlighted: boolean = false;

  getLetterGrade(): string {
    if (this.score >= 90) return 'A';
    else if (this.score >= 80) return 'B';
    else if (this.score >= 70) return 'C';
    else if (this.score >= 60) return 'D';
    else return 'F';
  }

  onScoreInput(event: Event) {
    const v = +(event.target as HTMLInputElement).value;
    this.score = isNaN(v) ? 0 : v;
    if (this.score > 100) this.score = 100;
    if (this.score < 0) this.score = 0;
    this.passing = this.score >= 60;
    this.updateGradeColor();
  }

  updateGradeColor() {
    if (this.score >= 90) this.gradeColor = '#28a745';
    else if (this.score >= 80) this.gradeColor = '#2E75B6';
    else if (this.score >= 70) this.gradeColor = '#FFC107';
    else if (this.score >= 60) this.gradeColor = '#fd7e14';
    else this.gradeColor = '#dc3545';
  }

  onSubmit() {
    this.isHighlighted = !this.isHighlighted;
  }
}
