import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DistroApiService } from 'src/app/service/distro.service';
import { LoginService } from 'src/app/service/login.service';
import { generateUUID } from 'src/app/service/util.service';
declare var DistroAPI: any;

@Component({
  selector: 'app-artistsignup',
  templateUrl: './artistsignup.component.html',
  styleUrls: ['./artistsignup.component.css']
})
export class ArtistsignupComponent {
  APIKey = "4sar4l01vl3549hi6h789c5eep";
  secret = "dckjjtngbfj91sjgurnok101kmab8vopom0ldpgjc7j8rm5b18t";
  companyID = 290;
  auth = "126rbYIAfav313fFg";
  uuid = generateUUID();
  registrationForm: any = FormGroup;
  constructor(
    private distroApiService: DistroApiService,
    private fb: FormBuilder,
    private router: Router,
    private login: LoginService,
  ) { }
  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      country: ['', [Validators.required, Validators.minLength(2)]],
    });
  }
  get firstName() { return this.registrationForm.get('firstName'); }
  get lastName() { return this.registrationForm.get('lastName'); }
  get email() { return this.registrationForm.get('email'); }
  get password() { return this.registrationForm.get('password'); }
  get country() { return this.registrationForm.get('country'); }
  data: any = {
    user_first_name: "test",
    user_last_name: "test",
    country: "test",
    user_email: "aaa",
    user_password: "123",
    companyID: this.companyID,
    user_unique_id: this.uuid,
    auth: this.auth
  }
  async onSubmit() {
    console.log("data", this.data);
    console.log(this.registrationForm.value);
    await DistroAPI.activate(
      this.APIKey,
      this.secret,
      this.auth,
      this.companyID,
      this.registrationForm.value.firstName,
      this.registrationForm.value.lastName,
      this.registrationForm.value.country,
      this.registrationForm.value.email,
      this.registrationForm.value.password,
      this.uuid
    )
      .then((res: any) => {
        console.log("res", res);
        if (res.access_token) {
          const signupData = {
            first_name: this.registrationForm.value.firstName,
            last_name: this.registrationForm.value.lastName,
            country: this.registrationForm.value.country,
            email: this.registrationForm.value.email,
            password: this.registrationForm.value.password
          }
          this.login.registerUser(signupData).subscribe((res: any) => {
            console.log(res);
            if(res?.message == 'Registration successful.')
            {
              alert(res.message);
              this.router.navigate(['/auth/login']);
            }
          }
          )
          
        }

      }).catch((err: any) => {
        console.log(err);
      });
  }
}
