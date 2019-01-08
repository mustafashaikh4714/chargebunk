import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { resetComponentState } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUp;
  message;
  constructor(public fb: FormBuilder) { 
    this.signUp = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      password: [ '',[Validators.required]],
      confirmpassword:[ '',[Validators.required]],
      email: ['', [Validators.required]],
      phonenumber: ['', [Validators.required]],
      


    })
  }
  

  ngOnInit() {
  }
  register() {
    console.log(this.signUp.value);
    
  
if(this.signUp.valid) {
  this.signUp.reset();
  this.message='sucessfully registered';
  setTimeout(() => {
    this.message= '';
  }, 2000);
} else {
  this.message='Enter Valid Details';
  setTimeout(() => {
    this.message= '';
  }, 2000);
}
    
  }
  
}
