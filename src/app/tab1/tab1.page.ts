import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(
    private storage : Storage,
    private navCtrl : NavController
  ) { }

  ngOnInit() {
  }

  logout(){
    this.storage.clear();
    this.navCtrl.navigateRoot('/welcome');
  }
}
