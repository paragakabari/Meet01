import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
data:any;
  registrationForm: any = FormGroup;
  constructor(
    private fb: FormBuilder,
    private login: LoginService,
    private router: Router
  ) { 
    const navigation = this.router.getCurrentNavigation();
    this.data = navigation?.extras?.state;
console.log("data", this.data?.email);

  }
  ngOnInit() {
    this.registrationForm = this.fb.group({
      
      otp: ['', [Validators.required, ]],

    });
  }

  get otp() { return this.registrationForm.get('otp'); }
 
  

  verifyOtp() {
    const data = {
      email: this.data?.email,
      otp: this.registrationForm.value.otp,
    }
    console.log("data", data);
    this.login.verify(data).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/new-release']);
    })
  }

}

