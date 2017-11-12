// @Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Routes
import { ROUTES } from './app.routes';

// Components
import { AppComponent } from './app.component';

// Pages
import {
	EntryIndexPage
} from './pages';

@NgModule({
  declarations: [
    AppComponent,
    EntryIndexPage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
