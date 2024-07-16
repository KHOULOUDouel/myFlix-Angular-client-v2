import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-director-dialog',
  template: `
    <h1 mat-dialog-title>Director: {{ data.director }}</h1>
    <div mat-dialog-content>
      <p>{{ data.bio }}</p>
      <p><strong>Birth: </strong>{{ data.birth }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </div>
  `,
  styles: [`
    h1 {
      margin: 0;
      font-size: 24px;
    }
    div {
      font-size: 16px;
    }
  `]
})
export class DirectorDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { director: string, bio: string, birth: string }) {}
}
