import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GlobalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-global',
  templateUrl: 'global.html',
})
export class GlobalPage {

  public dark;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dark = 'dark'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GlobalPage');
  }

}
