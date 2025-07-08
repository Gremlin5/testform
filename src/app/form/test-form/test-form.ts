import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask'
@Component({
  selector: 'app-test-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective],
  providers: [provideNgxMask()],
  templateUrl: './test-form.html',
  styleUrl: './test-form.scss'
})

export class TestForm implements OnInit {
  form!: FormGroup;
  option = [
    { id: 1, name: 'Техподдержка' },
    { id: 2, name: 'Продажи' },
    { id: 3, name: 'Другое' },
  ]

   constructor(private fb: FormBuilder){}
   ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['',Validators.required,],
      selectedOption: [this.option[0].id],
      message: ['',Validators.required]
    });
   }

  onSubmit(){
    if (this.form.valid) {
      console.log('Форма валидна', this.form.value);
    } else {
      this.form.markAllAsTouched();
      console.warn('Форма содержит ошибки');
    }
  };

  get email() {
    return this.form.get('email');
  }
  get phone() {
  return this.form.get('phone');
  }
  get username() {
  return this.form.get('username');
  }
  get message() {
  return this.form.get('message');
  }
}
