import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const declarations = [
  HeaderComponent
];
const imports = [
  IonicModule,
  RouterLink,
  CommonModule,
  RouterModule
];
@NgModule({
  declarations: declarations,
  imports,
  providers: [...declarations],
  exports: [...declarations],
})
export class ComponentsModule {}
