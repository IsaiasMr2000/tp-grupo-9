import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonAvatar } from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';
import { User } from '../models/models';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonAvatar],
})
export class Tab3Page implements OnInit {
  users: User[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.users = this.dataService.getAllUsers();
  }
}
