import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/shared/article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  articleForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      tags: ['', Validators.required],
    });
  }

  submitForm(): void {
    if (this.articleForm.valid) {
      const newArticle = this.articleForm.value;
      this.articleService.createArticle(newArticle).subscribe({
        next: () => {
          alert('Article created successfully');
          this.router.navigate(['/nutrition']);
        },
        error: (err) => {
          console.error('Error creating article:', err);
          alert('Failed to create article. Please try again later.');
        }
      });
    }
  }
}
