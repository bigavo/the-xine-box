import { MovieDetailsComponent } from './main/movie-details/movie-details.component';
import { MovieListComponent } from './main/movie-list/movie-list.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router"

const appRoutes: Routes = [
    {
        path: 'main', 
        component: MainComponent,
    
    },
    // { path: '', redirectTo: '/main', pathMatch: 'full'},
    { path: 'details', component: MovieDetailsComponent},
    
    
    { path:'favorite-list', component: FavoriteListComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)], 
    exports: [RouterModule]
})
export class AppRoutingModule{
}