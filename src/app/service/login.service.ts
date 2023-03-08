import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHelper } from '../common/http-header/http-header.class';

@Injectable({
    providedIn: 'root'
})
export class LoginService extends HttpHelper {

    constructor(private http: HttpClient) {
        super();
    }

    loginUser(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/user/login`, data);
    }

    sendOtp(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/user/send-otp`, data, this.getHttpOptions());
    }
    verify(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/user/verify-otp`, data, this.getHttpOptions())
    }
    registerUser(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/user/signup`, data);
    }
    updateUser(id: any, data: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/user/${id}`, data, this.getHttpOptions());
    }
    getPlan(): Observable<any> {
        return this.http.get(`${this.apiUrl}/plan/get-plan`, this.getHttpOptions());
    }


    changePassword(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/user/ChangePassword`, data);
    }
    forgetPassword(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/user/forgot-password`, data);
    }
    resetpassword(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/user/resetpassword`, data);

    }
    getAllUsers(): Observable<any> {
        return this.http.get(`${this.apiUrl}/user/`, this.getHttpOptions());
    }
   
    verifyByPhone(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/user/verifyByPhone`, data, this.getHttpOptions({ token: true }))
    }

    getAllGeoLOc() {
        return this.http.get(`${this.apiUrl}/user/getAllLocation`, this.getHttpOptions());
    }
    getAllLoc() {
        return this.http.get(`${this.apiUrl}/geoloc/getAll`, this.getHttpOptions());
    }
}
