import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {MenuComponent} from './core/menu/menu.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login',pathMatch:'full'},
  { path: 'menu', children: [
      {
        path: 'home',
        component: HomeComponent,
      }

    ],component: MenuComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'login'}
];
