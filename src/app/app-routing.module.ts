// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

// Define the routes for the application
const routes: Routes = [
  // Redirect the root URL (/) to the home page
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Define routes for each component
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

// Create the routing module
@NgModule({
  // Import the RouterModule and provide the configured routes
  imports: [RouterModule.forRoot(routes)],

  // Export the RouterModule so it can be used by other modules
  exports: [RouterModule],
})
export class AppRoutingModule {}