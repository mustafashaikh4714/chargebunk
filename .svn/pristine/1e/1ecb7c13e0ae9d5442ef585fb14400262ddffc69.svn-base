import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SummaryService } from '../summary.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signin:FormGroup;
  constructor(public siginvalue:SummaryService, private router: Router) { }

  ngOnInit() {
    this.signin = new FormGroup({
    'email': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required]),
    });
  }
   
  login(){
    console.log(this.signin.value);
    if(this.signin.controls['email'].value === 'admin' && this.signin.controls['password'].value === 'admin'){
      this.siginvalue.login = true;
      this.router.navigate(['/']);
    }
  }
}
