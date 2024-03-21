import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { apiUrls } from "../api.urls";
import { BehaviorSubject, Observable } from "rxjs";
import { Login } from "../types/login";
import { Register } from "../types/register";
import { UpdateUser } from "../types/update";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    constructor(private http: HttpClient) {}
    isLoggedIn$ = new BehaviorSubject<boolean>(false);

    registerService(registerObj: Register): Observable<Register>{
        return this.http.post<any>(`${apiUrls.authServiceApi}register`, registerObj); 
    }

    loginService(loginObj: Login): Observable<Login>{
        return this.http.post<any>(`${apiUrls.authServiceApi}login`, loginObj); 
    }

    sendEmailService(email:string){
        return this.http.post<any>(`${apiUrls.authServiceApi}send-email`, {email : email});
    }

    resetPasswordService(resetObj:any){
        return this.http.post<any>(`${apiUrls.authServiceApi}reset-password`, resetObj);
    }

    updateService(dataObj: UpdateUser): Observable<UpdateUser> {
        const token = localStorage.getItem('user_id');
        if (token) {
          const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
          return this.http.put<UpdateUser>(`${apiUrls.authServiceApi}/update-data`, dataObj, { headers });
        } else {
          throw new Error('Authorization token missing!');
        }
      }

    isLoggedIn(){
        return !!localStorage.getItem("user_id");
    }
}