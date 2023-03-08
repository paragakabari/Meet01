import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AppSettings } from "../config/app.config";
@Injectable({
  providedIn: "root",
})
export class BehaviorSubjectService {
  private messageSource = new BehaviorSubject("default message");
  currentMessage = this.messageSource.asObservable();

  private cartSubscription = new BehaviorSubject("default message");
  cartObs = this.cartSubscription.asObservable();

  private cartUpdateSubscrption = new BehaviorSubject("default message");
  cartUpdate = this.cartUpdateSubscrption.asObservable();

  private loginSource = new BehaviorSubject(
    !!localStorage.getItem(AppSettings.localStorage_keys.token)
  );
  loginState = this.loginSource.asObservable();

  private loginDataSubscrption = new BehaviorSubject(
    localStorage.getItem(AppSettings.localStorage_keys.userData) &&
      JSON.parse(localStorage.getItem(AppSettings.localStorage_keys.userData))
        .EmailVerified
  );
  loginDataState = this.loginDataSubscrption.asObservable();

  private cartStateSubscrption = new BehaviorSubject("default message");
  cartstate = this.cartStateSubscrption.asObservable();

  private orderStateSubscrption = new BehaviorSubject("default message");
  orderstate = this.orderStateSubscrption.asObservable();

  constructor() {}

  changeMessage(id: string) {
    this.messageSource.next(id);
  }

  LoginState(token: any) {
    this.loginSource.next(token);
  }

  LoginDataState(data: any) {
    this.loginDataSubscrption.next(data);
  }

  cartState(data: any) {
    this.cartStateSubscrption.next(data);
  }

  orderState(data: any) {
    this.orderStateSubscrption.next(data);
  }

  cartUpdatState(data: any) {
    this.cartUpdateSubscrption.next(data);
  }
}
