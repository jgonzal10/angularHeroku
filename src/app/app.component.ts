import { Component } from '@angular/core';
import { MoviesService } from './movie.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[MoviesService]
})
export class AppComponent {
  title = 'stars';
  movies : any[]

  constructor(private _movieService: MoviesService) {  
    this._movieService.getMovies(1).subscribe(data =>{  
      console.log(data) 
    });
  }; 
}
