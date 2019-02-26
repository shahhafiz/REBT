import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
/**
 * Generated class for the SectionEPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-section-e',
  templateUrl: 'section-e.html',
})
export class SectionEPage {

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
    console.log('ionViewDidLoad SectionEPage');
  }

  info(){
    let alert = this.alertCtrl.create({
      title: 'Bahagian E',
      subTitle: 'info',
      buttons: ['Kembali']
    });
    alert.present();
  }

  seterusnya(){
    this.answers.jawapanE = this.answer;
    this.navCtrl.push("SectionFPage",{
      data: this.answers
    });
  }
}
