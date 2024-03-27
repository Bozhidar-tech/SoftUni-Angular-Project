import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/shared/article.service';
import { Article } from 'src/app/types/article';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  articleId?: string;
  article?: Article;
  articleForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.articleId = this.route.snapshot.params['id'];
    if (this.articleId) {
      this.loadArticle();
    }
    this.initForm();
  }

  loadArticle(): void {
    this.articleService.getArticleById(this.articleId!).subscribe({
      next: (article: Article) => {
        this.article = article;
        this.articleForm.patchValue(article);
      },
      error: (error) => {
        console.error('Error fetching article:', error);
        this.errorMessage = 'Failed to fetch article. Please try again later.';
      }
    });
  }

  initForm(): void {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required],
      tags: ['']
    });
  }

  submitForm(): void {
    if (this.articleForm.valid) {
      const updatedArticleData = this.articleForm.value;
      if (this.articleId) {
        this.articleService.updateArticle(this.articleId, updatedArticleData).subscribe({
          next: () => {
            alert('Article updated successfully');
            this.router.navigate(['/nutrition']);
          },
          error: (err) => {
            console.error('Error updating article:', err);
            this.errorMessage = 'Failed to update article. Please try again later.';
            alert(this.errorMessage);
          }
        });
      }
    }
  }
}
