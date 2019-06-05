import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  private _url: string = "/api";

  /**
   * Function to get the list of movies
   * @param page 
   * @return movies
   */
  getMovies(page:number): Observable<any[]>{
  
    return this.http.get<any[]>(this._url+'/movies?page='+page)
                    .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
