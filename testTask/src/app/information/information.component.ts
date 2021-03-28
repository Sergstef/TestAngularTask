import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

	allUsers: any;
	

  constructor(private commonService: CommonService) {

 }

  ngOnInit(): void {
  	this.getUsers();
  }

  getUsers() {
  	this.commonService.getAllUsers().subscribe((response) => {
      this.allUsers = response;
    })
  }


}
