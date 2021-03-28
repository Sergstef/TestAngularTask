import { Component, OnInit } from '@angular/core';
import { InformationComponent } from '../information/information.component';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {


  constructor(private commonService: CommonService) { 
  	
  }

  ngOnInit(): void {
    
  }

  addUser(formObj: any) {
    console.log(formObj);
    this.commonService.createUser(formObj).subscribe((response) => {
      console.log("User has been added");
    })
  }

}
