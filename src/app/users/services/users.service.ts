import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<any> {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.httpClient.get(`PATH`, { headers: headers });
  }
}
