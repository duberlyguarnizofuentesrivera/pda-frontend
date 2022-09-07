import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Admin} from "../model/admin";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private adminURl = 'http://localhost:8081/api/admin';

  constructor(private httpClient: HttpClient) {
  }

  getAdmins() {
    return this.httpClient.get<Admin[]>(this.adminURl + '/all');
  }

}
