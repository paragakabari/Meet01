import { Component,OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-artist-plan',
  templateUrl: './artist-plan.component.html',
  styleUrls: ['./artist-plan.component.css']
})
export class ArtistPlanComponent implements OnInit {

  constructor(
    private login: LoginService,
  ) { }

  ngOnInit(): void {
    this.getPlan()
  }
   getPlan() {
    this.login.getPlan().subscribe((res: any) => {
      console.log(res)
    })
    
  }

}

