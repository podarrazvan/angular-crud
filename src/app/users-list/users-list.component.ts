import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  d = new Date();
  
  years=[];
  firstName;
  lastName;
  userAge = 0;
  
  user = {}
  users = []

  constructor() { 
    for(let i = 0; i < 101; i++) {
      this.years.push(i);
    }
  }

  ngOnInit(): void {
  }

  onUserCreated() {
    if(this.firstName !=''){
      if(this.lastName !=''){
        if(this.userAge !=0){
          let nr = Math.floor(Math.random() * Math.floor(2));
          this.user={
            "fName": this.firstName,
           "lName" : this.lastName,
            "age":this.userAge,
            "date":`${this.d.getDate()} / ${this.d.getMonth()} / ${this.d.getFullYear()}`,
            "activity": nr === 1 ?  'active' : 'inactive'
          };
          this.users.push(this.user);
          this.firstName = "";
          this.lastName = "";
       
        }else{
          alert('You can\'t be 0 years old!')
        }
      } else{
        alert('Plase enter your last name!')
      }
    }else{
      alert('Plase enter your first name!')
    }

  }
  onAgeCreated(event: any) {
    this.userAge = event.target.value;
  }

  onDelete(index) {
    this.users.splice(index,1);
  }
  onEdit(index) {
    console.log(this.users);
    this.firstName = this.users[index].fName;
    this.lastName = this.users[index].lName;
  }
}
