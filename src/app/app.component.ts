import {Component, OnDestroy, OnInit} from '@angular/core';
import { MethodCall } from '@angular/compiler';
import {AppareilService} from './services/appareil.service';
import { Observable } from 'rxjs/Observable';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy {

  second: number;
  conterSubscrition: Subscription;
  constructor(){}

  ngOnInit(){
    const counter = interval(1000);
    this.conterSubscrition = counter.subscribe(
      (value: number) => {
        this.second = value;
      }
    );
  }
  ngOnDestroy(){
    this.conterSubscrition.unsubscribe();
  }
}

