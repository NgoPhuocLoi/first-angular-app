import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerItemComponent } from './server-item/server-item.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlight } from './directives/better-hightlight.directive';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerItemComponent,
    BasicHighlightDirective,
    BetterHighlight,
    UnlessDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
