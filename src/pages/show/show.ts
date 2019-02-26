import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show',
  templateUrl: 'show.html',
})
export class ShowPage {

  answers = {
    tarikh: Date().toString(),
    jawapanA: "",
    jawapanB: "",
    jawapanC: "",
    jawapanD: "",
    jawapanE: "",
    jawapanF: "",
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.answers = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log(this.answers);
    console.log('ionViewDidLoad ShowPage');
  }

}
