import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";

/**
 * Generated class for the ReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})
export class ReviewPage {

  logs = [];
  answers = {
    tarikh: Date().toString(),
    jawapanA: "",
    jawapanB: "",
    jawapanC: "",
    jawapanD: "",
    jawapanE: "",
    jawapanF: "",
    jawapanG: "",
  }

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage: Storage) {
      this.answers = navParams.get('data');
  }

  ionViewDidLoad() {
    // let date = new Date().toISOString;
    // console.log(date);
    this.storage.get('logs')
      .then((val) => {
        if(val == null ){
          this.logs.push(this.answers);
          this.storage.set('logs', this.logs);
        } else {
          this.logs = val;
          this.logs.push(this.answers);
          this.storage.set('logs', this.logs);
        }
      });
  }

  halamanUtama(){
    this.navCtrl.popToRoot();
  }
}
