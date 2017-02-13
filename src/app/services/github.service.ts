import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = '38eb7f4e63308db99d8f';
  private client_secret = 'a36ff9e061630436e162bcd158842ff6bdcb8c7a';

  constructor(private http: Http) {
    console.log('Github Service Ready...');
    this.username = 'Fauziku2';
  }

  getUser() {
    return this.http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(response => response.json());
  }

  getRepos() {
    return this.http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(response => response.json());
  }
}
