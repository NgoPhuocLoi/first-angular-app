import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form-reactive',
  templateUrl: './user-form-reactive.component.html',
  styleUrl: './user-form-reactive.component.css',
})
export class UserFormReactiveComponent implements OnInit {
  userForm: FormGroup;
  genders: string[] = ['male', 'female'];

  ngOnInit(): void {
    this.userForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
      }),
      gender: new FormControl('female'),
      hobbies: new FormArray([]),
    });
  }
  onSubmit() {
    console.log(this.userForm);
  }

  get hobbies() {
    return this.userForm.get('hobbies') as FormArray;
  }

  addHobby() {
    this.hobbies.push(new FormControl(null, Validators.required));
  }
}
