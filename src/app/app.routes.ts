import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DefaultComponent } from './shared/layout/default/default.component';
import { MasterComponent } from './shared/layout/master/master.component';

export const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    canActivate: [],
    children: [{ path: '', component: HomeComponent }],
  },
  {
    path: '',
    canActivate: [],
    component: DefaultComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
