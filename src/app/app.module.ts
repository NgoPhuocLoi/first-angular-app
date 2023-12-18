import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import routes from './app.router';
import { CockpitComponent } from './cockpit/cockpit.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlight } from './directives/better-hightlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ServerItemComponent } from './servers/server-item/server-item.component';
import { ServersComponent } from './servers/servers.component';
import { ShortenPipe } from './shorten.pipe';
import { UserFormReactiveComponent } from './users/user-form-reactive/user-form-reactive.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

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
    ShortenPipe,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
