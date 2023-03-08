import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { generateUUID } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class DistroApiService {
  private apiUrl = 'https://www.distro.direct/distrodirect/signup_ssos.php'; // replace with the actual API URL

  constructor(private http: HttpClient) {}

  activate(
    apiKey: string,
    secret: string,
    authToken: string,
    companyID: string,
    userFirstName: string,
    userLastName: string,
    country: string,
    userEmail: string,
    userPassword: string,
    userUniqueId: string
  ) {
    const body = {
      apiKey,
      secret,
      authToken,
      companyID,
      user_first_name: userFirstName,
      user_last_name: userLastName,
      country,
      user_email: userEmail,
      user_password: userPassword,
      user_unique_id: generateUUID()
    };
    return this.http.post(`${this.apiUrl}`, body);
  }
}
