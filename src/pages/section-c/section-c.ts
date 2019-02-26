import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
/**
 * Generated class for the SectionCPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-section-c',
  templateUrl: 'section-c.html',
})
export class SectionCPage {

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
    public formBuilder:FormBuilder,
    public alertCtrl: AlertController
    ) {
      this.someForm = formBuilder.group({
        'answer' : ['', Validators.required]
      })
      this.answers = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log(this.answers);
    console.log('ionViewDidLoad SectionCPage');
  }

  info(){
    let alert = this.alertCtrl.create({
      title: 'Bahagian C',
      subTitle: 'info',
      buttons: ['Kembali']
    });
    alert.present();
  }

  seterusnya(){
    this.answers.jawapanC = this.answer;
    this.navCtrl.push("SectionDPage",{
      data: this.answers
    });
  }
}
