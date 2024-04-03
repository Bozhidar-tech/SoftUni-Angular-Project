import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/types/exercise';
import { ExerciseService } from 'src/app/shared/exercises.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-strength-training',
  templateUrl: './strength-training.component.html',
  styleUrls: ['./strength-training.component.css']
})
export class StrengthTrainingComponent implements OnInit {

  exercises: Exercise[] = [];
  errorMessage: string = '';

  constructor(private exerciseService: ExerciseService, private sanitizer: DomSanitizer, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadExercises();
  }

  loadExercises(): void {
    this.exerciseService.getAllExercises().subscribe({
      next: (response: any) => {
        if (response && response.success) {
          this.exercises = response.data.map((exercise: Exercise) => ({
            ...exercise,
            videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl(exercise.videoUrl)
          })) || [];
        } else {
          console.error('Failed to fetch exercises:', response);
          this.errorMessage = 'Failed to fetch exercises. Please try again later.';
        }
      },
      error: (error) => {
        console.error('Error fetching exercises:', error);
        this.errorMessage = 'Failed to fetch exercises. Please try again later.';
      }
    });
  }

  logout(){
    localStorage.removeItem("user_id");
    this.authService.isLoggedIn$.next(false);
  }
}