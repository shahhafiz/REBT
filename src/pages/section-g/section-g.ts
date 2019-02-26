import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

/**
 * Generated class for the SectionGPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-section-g',
  templateUrl: 'section-g.html',
})
export class SectionGPage {

  answer: string;
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

  someForm : FormGroup;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public formBuilder: FormBuilder,
     public alertCtrl: AlertController
     ) {
       this.someForm = formBuilder.group({
         'answer': ['', Validators.required]
       })
      this.answers = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log(this.answers);
    console.log('ionViewDidLoad SectionFPage');
  }

  info(){
    let alert = this.alertCtrl.create({
      title: 'Bahagian G',
      subTitle: 'info',
      buttons: ['Kembali']
    });
    alert.present();
  }

  tamat(){
    this.answers.jawapanG = this.answer;
    // this.storage.set('logs',JSON.stringify(this.answers))
    this.navCtrl.push("ReviewPage",{
      data: this.answers
    });
  }

}
