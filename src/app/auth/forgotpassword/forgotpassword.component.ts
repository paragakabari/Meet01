import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  registrationForm: any = FormGroup;
  constructor(
    
    private fb: FormBuilder,
    private login: LoginService,
    private router: Router,
  ) { }
  ngOnInit() {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],

    });
  }

  get email() { return this.registrationForm.get('email'); }



  forgetPassword() {
    const data = {
      email: this.registrationForm.value.email,
    }
    console.log("data", data);
    this.login.forgetPassword(data).subscribe((res: any) => {
      console.log(res);
    })
  }

}

