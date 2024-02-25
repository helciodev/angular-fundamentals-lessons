import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
    <p>my favorite movies</p>
    <ol>
      <li>Spider-man Into The Spider Verse</li>
      <li>Matrix</li>
      <li>Pirate of Caribbean</li>
    </ol>
  `,
  styles: `ol {
  list-style-type: upper-roman;
  
  }`,
})
export class AppComponent {
  user = 'codingChamp';
}
