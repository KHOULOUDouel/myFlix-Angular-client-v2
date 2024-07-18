import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user: any = {};
  userData = { Username: '', Password: '', Email: '', Birthday: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.fetchApiData.getUser().subscribe((res: any) => {
        this.user = res;
        this.userData.Username = this.user.Username;
        this.userData.Email = this.user.Email;
        this.userData.Birthday = new Date(this.user.Birthday)
          .toISOString()
          .split('T')[0];
        console.log('User data fetched:', this.userData); // Log the fetched user data
      });
    } else {
      this.router.navigate(['welcome']);
    }
  }

  updateUserProfile(): void {
    console.log('Updating user profile with data:', this.userData); // Log the data before making the API call
    this.fetchApiData.editUser(this.userData).subscribe(
      (res) => {
        console.log('Response from update user API:', res); // Log the response from the API
        localStorage.setItem('user', JSON.stringify(res));
        localStorage.setItem('username', res.Username);
        this.snackBar.open('Profile updated successfully', 'OK', {
          duration: 2000,
        });
      },
      (err) => {
        console.error('Error updating profile:', err); // Log the error encountered
        this.snackBar.open(
          'Something bad happened; please try again later.',
          'OK',
          {
            duration: 2000,
          }
        );
      }
    );
  }
}