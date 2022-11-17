import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  public numero = 0;


  public incrementar(){
this.numero=this.numero + 1

  }

}
