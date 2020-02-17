import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsAPIService {

  constructor(private _http:HttpClient) { }
   
  getNews():Observable<any>
  {
    return this._http.get("https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4")
  }
  
}
