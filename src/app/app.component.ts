import { Component } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    ComponentsModule,
  ],
  providers: [IonicModule, RouterLink, CommonModule],
})
export class AppComponent {
  constructor() {}
}
