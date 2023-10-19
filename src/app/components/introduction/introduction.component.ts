import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
})
export class IntroductionComponent {
  constructor(private router: Router) {}
  getStarted() {
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
