import { Routes } from '@angular/router';
import { canDeactiveFn } from './can-deactive.guard';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ServersComponent } from './servers/servers.component';
import { UserFormReactiveComponent } from './users/user-form-reactive/user-form-reactive.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserComponent } from './users/user/user.component';
import { userResolver } from './users/user/user.resolver';
import { UsersComponent } from './users/users.component';

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
    path: 'users/new-reactive',
    component: UserFormReactiveComponent,
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
    path: 'posts',
    component: PostsComponent,
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
