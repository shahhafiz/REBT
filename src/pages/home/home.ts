import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Storage } from "@ionic/storage";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,
    ) {
  }

  ionViewDidLoad(){
    // let testData = [
    //   {
    //     tarikh: Date().toString(),
    //     jawapanA: "aaaa1",
    //     jawapanB: "bbbb1",
    //     jawapanC: "cccc1",
    //     jawapanD: "dddd1",
    //     jawapanE: "eeee1",
    //     jawapanF: "ffff1",
    //   },
    //   {
    //     tarikh: Date().toString(),
    //     jawapanA: "aaaa2",
    //     jawapanB: "bbbb2",
    //     jawapanC: "cccc2",
    //     jawapanD: "dddd2",
    //     jawapanE: "eeee2",
    //     jawapanF: "ffff2",
    //   },
    //   {
    //     tarikh: Date().toString(),
    //     jawapanA: "aaaa3",
    //     jawapanB: "bbbb3",
    //     jawapanC: "cccc3",
    //     jawapanD: "dddd3",
    //     jawapanE: "eeee3",
    //     jawapanF: "ffff3",
    //   }
    // ]

    // this.storage.set('logs', testData);
  }

  mula(){
    this.navCtrl.push("SectionAPage");
  }

  log(){
    this.navCtrl.push("LogPage");
  }

  info(){
    this.navCtrl.push("InfoPage");
  }

}
