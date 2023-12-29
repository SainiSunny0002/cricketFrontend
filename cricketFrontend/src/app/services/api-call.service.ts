import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private _httpClient:HttpClient) { }

  getAllMatches(){
    return this._httpClient.get(`${environment.apiUrl}/matches`);
  }

  getLiveMatches(){
    return this._httpClient.get(`${environment.apiUrl}/live`);
  }

  getPointTable(){
    return this._httpClient.get(`${environment.apiUrl}/point-table`);
  }
}
