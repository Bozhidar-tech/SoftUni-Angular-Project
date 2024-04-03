import { Component } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  schedule = [
    { day: 'morning', classes: [{ name: 'Boxing', trainer: 'Canelo Alvarez', time: '08:00 - 09:30' }, { name: 'Bodybuilding', trainer: 'Chris Bumstead', time: '10:00 - 11:30' }] },
    { day: 'noon', classes: [{ name: 'Boxing', trainer: 'Canelo Alvarez', time: '12:00 - 13:30' }] },
    { day: 'afternoon', classes: [{ name: 'Nutrition Class', trainer: 'Greg Doucette', time: '13:00 - 14:30' }, { name: 'Bodybuilding', trainer: 'Chris Bumstead', time: '15:00 - 16:30' }, { name: 'Boxing', trainer: 'Canelo Alvarez', time: '17:00 - 18:00' }] },
    { day: 'evening', classes: [{ name: 'Nutrition Class', trainer: 'Greg Doucette', time: '18:30 - 19:30' }, { name: 'Boxing', trainer: 'Canelo Alvarez', time: '20:00 - 21:30' }, { name: 'Bodybuilding', trainer: 'Chris Bumstead', time: '22:00 - 23:30' }] },
  ];
}