import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-token',
  templateUrl: './add-token.component.html',
  styleUrls: ['./add-token.component.sass']
})
export class AddTokenComponent implements OnInit {
  username = '';
  token = '';
  adduser = 'http://sepantabiotserver.ir:4300/add_token/';
  req = '';
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }
  submit() {
    this.req = this.adduser + this.username + '/' + this.token ;
    this.http.get(this.req).toPromise().then( response =>
      console.log(response)
    );
  }
}
