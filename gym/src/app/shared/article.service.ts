import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../types/article';
import { apiUrls } from "../api.urls";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('user_id');
    if (token) {
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    } else {
      throw new Error('Authorization token missing!');
    }
  }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${apiUrls.articleServiceApi}getAll`);
  }

  getArticleById(id: string): Observable<Article> {
    return this.http.get<Article>(`${apiUrls.articleServiceApi}${id}`);
  }

  createArticle(articleData: Article): Observable<Article> {
    return this.http.post<Article>(`${apiUrls.articleServiceApi}create`, articleData, { headers: this.getHeaders() });
  }

  updateArticle(id: string, articleData: Article): Observable<Article> {
    return this.http.put<Article>(`${apiUrls.articleServiceApi}${id}`, articleData, { headers: this.getHeaders() });
  }

  deleteArticle(id: string): Observable<Article> {
    return this.http.delete<Article>(`${apiUrls.articleServiceApi}${id}`, { headers: this.getHeaders() });
  }
}
