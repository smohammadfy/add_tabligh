import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'project';
  mobileQuery: any;
  adduser = true;
  addtoken = false;
  value = 0;
  data: Observable<any>;

  constructor(private http: HttpClient) {
  }

  load() {
    this.data = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }


}
