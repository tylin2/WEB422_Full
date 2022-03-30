import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { CustomEventButtonComponent } from './custom-event-button/custom-event-button.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OutputMessageComponent } from './output-message/output-message.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    CustomEventButtonComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    OutputMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
