import { Routes } from '@angular/router';
import { RelatoriosComponent } from './components/relatorios/relatorios.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'relatorios', component: RelatoriosComponent },
  { path: 'usuarios', component: UsersComponent },
];
