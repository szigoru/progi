import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "http://localhost:3000/futasok"



  constructor(private http: HttpClient) { }
  getAPI() {
    return this.http.get(this.url);
  }
  sendAPI(data) {

    return this.http.post(this.url, data)
  }
  deleteAPI(id) {
    return this.http.delete(`${this.url}/${id}`)
}
getcurrentRun(id){
  return this.http.get(`${this.url}/${id}`)
}
updateRun(id, data){
  return this.http.put(`${this.url}/${id}`, data)
  
}

}
