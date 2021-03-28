import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../app/User';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient) { }

  createUser(user: any){
  	return this._http.post("http://localhost:3000/users", user);
  }
  getAllUsers(){
  	return this._http.get("http://localhost:3000/users");
  }
}
