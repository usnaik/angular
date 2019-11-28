import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
      { path: 'about', component: AboutComponent },
      { path: 'support', component: SupportComponent },
      { path: '**', redirectTo: 'main', pathMatch: 'full' }
    ]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: 'profile', pathMatch: 'full' }
    ]
  },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
