import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SectionAPage } from './section-a';

@NgModule({
  declarations: [
    SectionAPage,
  ],
  imports: [
    IonicPageModule.forChild(SectionAPage),
  ],
})
export class SectionAPageModule {}
