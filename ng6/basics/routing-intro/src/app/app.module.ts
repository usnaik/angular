import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    NoPageFoundComponent,
    ProfileComponent,
    ContactComponent,
    MainComponent,
    AboutComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
