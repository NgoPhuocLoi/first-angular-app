import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { canActivateFn } from './app-guard.service';
import { canDeactiveFn } from './can-deactive.guard';
import { userResolver } from './users/user/user.resolver';
import { UserFormComponent } from './users/user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'servers',
    component: ServersComponent,
    // canActivate: [canActivateFn],
  },
  {
    path: 'users/new',
    component: UserFormComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id',
        component: UserComponent,
        resolve: {
          user: userResolver,
        },
      },
    ],
    canDeactivate: [canDeactiveFn],
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

export default routes;
