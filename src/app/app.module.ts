import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerItemComponent } from './servers/server-item/server-item.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlight } from './directives/better-hightlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { RouterModule } from '@angular/router';
import routes from './app.router';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserFormReactiveComponent } from './users/user-form-reactive/user-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerItemComponent,
    BasicHighlightDirective,
    BetterHighlight,
    UnlessDirective,
    HeaderComponent,
    HomeComponent,
    UserComponent,
    ServersComponent,
    UsersComponent,
    NotFoundComponent,
    UserFormComponent,
    UserFormReactiveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
