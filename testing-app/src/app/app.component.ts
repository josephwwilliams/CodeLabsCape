import { Component } from '@angular/core';
import { FeatureComponent } from './feature/feature.component';
import { HomeComponent } from './home/home.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { CardComponent } from './shared/components/card.component';
import { ModalComponent } from './shared/components/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    FeatureComponent,
    HomeComponent,
    ButtonComponent,
    CardComponent,
    ModalComponent,
  ],
})
export class AppComponent {
  title = 'testing-app';
  show = false;
}
