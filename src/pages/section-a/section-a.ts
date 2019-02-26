import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// import { Storage } from "@ionic/storage";

/**
 * Generated class for the SectionAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-section-a',
  templateUrl: 'section-a.html',
})
export class SectionAPage {
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
  
  someForm: FormGroup;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController
    ) {
      this.someForm = formBuilder.group({
        'answer': ['', Validators.required]
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SectionAPage');
  }

  info(){
    let alert = this.alertCtrl.create({
      title: 'Bahagian A',
      subTitle: 'info',
      buttons: ['Kembali']
    });
    alert.present();
  }

  seterusnya(){
    this.answers.jawapanA = this.answer;
    this.navCtrl.push("SectionBPage",{
      data: this.answers
    });
  }

}
