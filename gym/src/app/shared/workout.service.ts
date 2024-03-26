import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { apiUrls } from "../api.urls";
import { Observable } from "rxjs";
import { Workout } from "../types/workout";

@Injectable({
  providedIn: "root"
})
export class WorkoutService {
  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('user_id');
    if (token) {
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    } else {
      throw new Error('Authorization token missing!');
    }
  }

  createWorkoutService(workout: Workout): Observable<Workout> {
    return this.http.post<Workout>(`${apiUrls.workoutsServiceApi}create`, workout, { headers: this.getHeaders() });
  }

  getWorkoutsService(): Observable<Workout[]> {
    return this.http.get<Workout[]>(`${apiUrls.workoutsServiceApi}getAll`, { headers: this.getHeaders() });
  }

  deleteWorkoutById(id: string): Observable<Workout> {
    return this.http.delete<Workout>(`${apiUrls.workoutsServiceApi}${id}`, { headers: this.getHeaders() });
  }
}