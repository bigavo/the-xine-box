import { AppRoutingModule } from './app-routing.module';
import { MovieDetailsComponent } from './main/movie-details/movie-details.component';
import { MovieService } from './main/movie.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { AuthComponent } from './auth/auth.component';
import { MovieListComponent } from './main/movie-list/movie-list.component';
import { MovieItemComponent } from './main/movie-list/movie-item/movie-item.component';
import { CommonModule } from '@angular/common';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SideNavigationComponent,
    AuthComponent,
    MovieListComponent,
    MovieItemComponent,
    FavoriteListComponent,
    MovieDetailsComponent,
  ],
  
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  exports:[AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
 }
