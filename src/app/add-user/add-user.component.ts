import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})

export class AddUserComponent implements OnInit {
  username = '';
  score = '';
  adduser = 'http://192.168.1.5:4300/add_user/';
  req = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }
  submit() {
     this.req = this.adduser + this.username + '/' + this.score ;
     this.http.get(this.req).toPromise().then( response =>
       console.log(response)
     );
}
}
