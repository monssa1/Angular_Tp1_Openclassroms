import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;
  appareilOne = 'Télévision';
  appareilTwo = 'ordinateur';
  appareilThree = 'Machine à laver';
  lastupdate = new Promise(
    (resolve , reject) => {
      const date = new Date();
      setTimeout(
        ()=> {
          resolve(date);
        }, 2000
      );
    }
  )
  appareils: any[];
  appareilSubscription: Subscription;
  constructor(private appareilService: AppareilService ) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  ngOnInit(): void {
    this.appareilSubscription = this.appareilService.AppareilSubject.subscribe(
      (appareils: any[]) =>{
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }
  onEteindre(){
    this.appareilService.switchOffAll();
  }

  onSave(){
    this.appareilService.saveAppareilToServer();
  }

  onFetch(){
    this.appareilService.getAppareilFromServer();
  }

}
