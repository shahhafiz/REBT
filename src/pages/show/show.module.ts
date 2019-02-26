import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowPage } from './show';

@NgModule({
  declarations: [
    ShowPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowPage),
  ],
})
export class ShowPageModule {}
