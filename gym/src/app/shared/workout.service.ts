import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { apiUrls } from "../api.urls";
import {  Observable } from "rxjs";
import { Workout } from "../types/workout";

@Injectable({
  providedIn: "root"
})
export class WorkoutService {
  constructor(private http: HttpClient) {}

  createWorkoutService(workout: Workout): Observable<Workout> {
    const token = localStorage.getItem('user_id');
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.post<Workout>(`${apiUrls.workoutsServiceApi}create`, workout, { headers });
    } else {
      throw new Error('Authorization token missing!');
    }
  }

  getWorkoutsService(): Observable<Workout[]> {
    const token = localStorage.getItem('user_id'); // Adjust token name if needed
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get<Workout[]>(`${apiUrls.workoutsServiceApi}getAll`, { headers });
    } else {
      throw new Error('Authorization token missing!');
    }
  }

  deleteWorkoutById(id: string): Observable<Workout> {
    const token = localStorage.getItem('user_id'); // Adjust token name if needed
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.delete<Workout>(`${apiUrls.workoutsServiceApi}${id}`, { headers });
    } else {
      throw new Error('Authorization token missing!');
    }
  }
}