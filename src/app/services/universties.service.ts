import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Unversity } from '../models/university.model';

@Injectable({
  providedIn: 'root'
})
export class UniverstiesService {

  http = inject(HttpClient);
  url = 'http://universities.hipolabs.com/search?country=jordan';

  getUniversties():Observable<Unversity[]>{
    return this.http.get<Unversity[]>(this.url);
  }

 
}
