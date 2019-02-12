import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-canvasaccount',
  templateUrl: './canvasaccount.component.html',
  styleUrls: ['./canvasaccount.component.css']
})
export class CanvasaccountComponent implements OnInit {
  canvasAccounts: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts() {
    this.http.get('https://rmit.instructure.com:443/api/v1/accounts?access_token=9595~hpVWVTBD3bwHmWmwYFFPbO6AMngoLEoHsSx3DySHys4wedeciMKuARvd79YHWmUx')
      .subscribe(response => {
        this.canvasAccounts = response;
      }, error => {
        console.log(error);
      });
  }
}
