import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";
import { FormGroup } from "@angular/forms";
import { AppSettings } from "../config/app.config";

export interface ILoader {
  loading: boolean;
  message: string;
}

@Injectable({
  providedIn: "root",
})
export class UtilsService {
  userData: any;
  private loaderSubscription = new Subject<ILoader>();
  onLoaderChange = this.loaderSubscription.asObservable();

  private profileData = new BehaviorSubject("");
  currentprofileData = this.profileData.asObservable();

  private loadersCount = 0;

  constructor() { }

  profileChange(data: string) {
    this.profileData.next(data);
  }

  startLoader(message: string = "") {
    if (!this.loadersCount) {
      this.loaderSubscription.next({ loading: true, message });
    }
    this.loadersCount += 1;
  }

  stopLoader() {
    if (this.loadersCount) {
      this.loadersCount -= 1;
    }

    if (!this.loadersCount) {
      this.loaderSubscription.next({ loading: false, message: "" });
    }
  }


  getFormControlValues(form: FormGroup, controlName: string) {
    const control = form.controls[controlName];
    if (control) {
      return control.value;
    } else {
      return undefined;
    }
  }


}
export function generateUUID(length: number = 6, options?: { numericOnly: boolean }) {
  let text = "";
  const possible =
    options && options.numericOnly
      ? "0123456789"
      : "0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}