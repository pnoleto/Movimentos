import { Component } from '@angular/core';
import { MovimentosManuaisService } from 'Domain/Services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private movimentosManuais: MovimentosManuaisService
    ){
      this.movimentosManuais.Init("https://localhost:44388/api");
  }
}
