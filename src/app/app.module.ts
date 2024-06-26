import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FetchApiDataService } from './fetch-api-data.service';  // Make sure this is correctly imported

const routes: Routes = [
  // Define your routes here
];

@NgModule({
  declarations: [
    AppComponent,
    // Other components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FetchApiDataService],  // Add your services here
  bootstrap: [AppComponent]
})
export class AppModule { }
