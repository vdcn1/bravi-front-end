import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  
  email: string = '';
  constructor(
    private route: ActivatedRoute,
  ){

  }

  ngOnInit(){
    console.log("here")
    this.route.queryParams.subscribe(params => {
      console.log(params)
    });
  }
}
