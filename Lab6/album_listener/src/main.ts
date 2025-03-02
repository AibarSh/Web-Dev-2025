import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter, withHashLocation } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { AlbumsComponent } from './app/albums/albums.component';
import { AlbumPhotosComponent } from './app/albums-photos/albums-photos.component';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id/photos', component: AlbumPhotosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes,withHashLocation()),
    provideHttpClient()
  ]
}).catch(err => console.error(err));