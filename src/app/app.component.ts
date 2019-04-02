import { Component, OnInit, OnDestroy } from '@angular/core';
// import { NotFoundService } from './services/not-found.service';
import { Subscription } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'SpotDraft planets and Movies';
  subscription: Subscription;
  isNotFound: boolean = false;
  private apiUrl = "";

  constructor(private http : Http) {}
  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
