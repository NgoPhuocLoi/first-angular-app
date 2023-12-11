import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'servers',
    component: ServersComponent,
  },
  {
    path: 'users',
    component: UserComponent,
  },
];

export default routes;
