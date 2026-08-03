import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup';
import { AboutComponent } from './about/about';


export const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent }
];
