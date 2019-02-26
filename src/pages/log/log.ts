import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";

/**
 * Generated class for the LogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log',
  templateUrl: 'log.html',
})
export class LogPage {

  log: Object
  answers = []

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage) {
  }

  ionViewWillEnter(){
    this.storage.get('logs').then((val) => {
      this.answers = val;
      console.log(this.answers);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogPage');
  }

  show(data){
    this.navCtrl.push("ShowPage",{
      data:data
    })
  }

  delete(date){
    let counter = -1;
    this.answers.forEach(answer => {
      counter++;
      if (answer.tarikh == date) {
        this.answers.splice(counter, 1);
      }
    });

    this.storage.set('logs', this.answers)
      .then((val)=>{
        console.log(val)
      })
  }



}
