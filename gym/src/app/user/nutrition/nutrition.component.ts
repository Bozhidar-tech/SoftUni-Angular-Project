import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ArticleService } from 'src/app/shared/article.service';
import { Article } from 'src/app/types/article';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent implements OnInit {
  articles: Article[] = [];
  errorMessage: string = '';
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor(
    private articleService: ArticleService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loadArticles();
    this.authService.isLoggedIn$.subscribe(res => {
      this.isLoggedIn = this.authService.isLoggedIn();
      this.isAdmin = this.authService.isAdmin();
    });
  }

  loadArticles(): void {
    this.articleService.getAllArticles().pipe(
      catchError(error => {
        console.error('Error fetching articles:', error);
        this.errorMessage = 'Failed to fetch articles. Please try again later.';
        throw this.errorMessage;
      })
    ).subscribe({
      next: (response: any) => {
        if (response && response.success) {
          this.articles = response.data || [];
        } else {
          console.error('Failed to fetch articles:', response);
          this.errorMessage = 'Failed to fetch articles. Please try again later.';
          throw this.errorMessage;
        }
      }
    });
  }

  deleteArticle(id: string): void {
    if (confirm("Are you sure you want to delete the article?")) {
      this.articleService.deleteArticle(id).pipe(
        tap(() => {
          this.articles = this.articles.filter(article => article._id !== id);
          alert('Article deleted successfully');
        }),
        catchError(error => {
          console.error('Error deleting article:', error);
          this.errorMessage = 'Failed to delete article. Please try again later.';
          alert(this.errorMessage);
          return throwError(() => new Error(this.errorMessage));
        })
      ).subscribe();
    }
  }
}
