import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bon-Viveur';
  featureSelected = 'recipe'

  onNavigate(featureSelected: string) {
    this.featureSelected = featureSelected;
  }
}
