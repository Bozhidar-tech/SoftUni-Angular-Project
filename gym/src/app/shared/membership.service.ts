import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Membership } from '../types/membership';
import { apiUrls } from "../api.urls";

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(private http: HttpClient) { }

  getAllMemberships(): Observable<Membership[]> {
    return this.http.get<Membership[]>(`${apiUrls.membershipsServiceApi}getAll`);
  }
}