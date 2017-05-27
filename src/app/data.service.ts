import { Injectable } from '@angular/core';

import {RequestOptions, Http, Headers} from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class DataService {

 private requestOptions = new RequestOptions(
    {
      headers: new Headers({
        'authorization':'token b691a66a-172a-47e6-94f9-2be5924eb166'
      })
    }
  )
  constructor(private http:Http) { }

  getTodos()
  {
     return this.http.get('./me/todomvc',this.requestOptions).map(res =>{
       return res.json();
     }).catch(error =>{
       console.log(error);
       return Observable.of<any[]>([]);
     })
  }

saveTodos(newTodos:any[])
  {
     return this.http.post('./me/todomvc',newTodos,this.requestOptions).map(res =>{
       return res.json();
     }).catch(error =>{
       console.log(error);
       return Observable.of<any[]>([]);
     })
  }

}
