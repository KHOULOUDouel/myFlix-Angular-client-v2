import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

/**
 * AppComponent is the root component of the application.
 * It handles the main structure and routing of the application.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * The title of the application.
   * @type {string}
   */
  title = 'myFlix-Angular-client';

  /**
   * Constructor function that initializes the dialog service.
   * @param {MatDialog} dialog - The dialog service for opening modal dialogs.
   */
  constructor(public dialog: MatDialog) {}

  /**
   * Opens the user registration dialog.
   * This method is triggered when the user wants to register a new account.
   */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '280px'
    });
  }

  /**
   * Opens the user login dialog.
   * This method is triggered when the user wants to log in to their account.
   */
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      width: '280px'
    });
  }

  /**
   * Opens the movies dialog.
   * This method is triggered when the user wants to view the movie cards.
   */
  openMoviesDialog(): void {
    this.dialog.open(MovieCardComponent, {
      width: '500px'
    });
  }
}
