import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MyHttpService {

  constructor(private http: HttpClient) { }

  getBreweries() {
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }
}
