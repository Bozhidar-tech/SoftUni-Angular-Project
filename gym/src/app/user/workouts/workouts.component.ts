import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, tap } from 'rxjs/operators';
import { WorkoutService } from 'src/app/shared/workout.service';
import { Router } from '@angular/router';
import { Workout } from 'src/app/types/workout';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
  workouts: Workout[] = [];
  workoutForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder, 
    private workoutService: WorkoutService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.workoutForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      duration: [0, Validators.required]
    });

    this.getAllWorkouts();
  }

  getAllWorkouts(): void {
    this.workoutService.getWorkoutsService().pipe(
      catchError(error => {
        console.error('Error fetching workouts:', error);
        this.errorMessage = 'Failed to fetch workouts. Please try again later.';
        throw this.errorMessage;
      })
    ).subscribe({
      next: (response: any) => {
        if (response && response.success) {
          this.workouts = response.data || [];
        } else {
          console.error('Failed to fetch workouts:', response);
          this.errorMessage = 'Failed to fetch workouts. Please try again later.';
          throw this.errorMessage;
        }
      }
    });
  }

  addWorkout(): void {
    if (this.workoutForm.valid) {
      const newWorkout = this.workoutForm.value;
      this.workoutService.createWorkoutService(newWorkout)
        .pipe(
          tap(() => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/workouts']);
            });
          }),
          catchError(error => {
            console.error('Error adding workout:', error);
            this.errorMessage = 'Failed to add workout. Please try again later.';
            throw this.errorMessage;
          })
        )
        .subscribe();
    }
  }

  deleteWorkout(id: string): void {
    this.workoutService.deleteWorkoutById(id).pipe(
      tap(() => this.workouts = this.workouts.filter(workout => workout._id !== id)),
      catchError(error => {
        console.error('Error deleting workout:', error);
        this.errorMessage = 'Failed to delete workout. Please try again later.';
        throw this.errorMessage;
      })
    ).subscribe();
  }

  dismissError(): void {
    this.errorMessage = '';
  }
}