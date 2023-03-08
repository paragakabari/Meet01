import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DistroApiService } from 'src/app/service/distro.service';
import { LoginService } from 'src/app/service/login.service';
import { generateUUID } from 'src/app/service/util.service';
declare var DistroAPI: any;

@Component({
  selector: 'app-artistlogin',
  templateUrl: './artistlogin.component.html',
  styleUrls: ['./artistlogin.component.css']

})
export class ArtistloginComponent implements OnInit {

  registrationForm: any = FormGroup;
  constructor(
    private distroApiService: DistroApiService,
    private fb: FormBuilder,
    private login: LoginService,
    private router: Router,
  ) { }
  ngOnInit() {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],

    });
  }

  get email() { return this.registrationForm.get('email'); }
  get password() { return this.registrationForm.get('password'); }



  sendOtp() {
    const data = {
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
    }
    console.log("data", data);
    this.login.sendOtp(data).subscribe((res: any) => {
      this.router.navigate(['/auth/otp'], { state: data });
      console.log(res);
    })
  }

}

