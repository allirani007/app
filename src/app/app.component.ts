import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  { 
   title = 'app';
  data="Puducherry, also known as Pondicherry, is a union territory of India, consisting of four small geographically unconnected districts. It was formed out of four territories of former French India, namely Pondichéry, Karikal, Mahé and Yanaon, ";
  num=100;
    
  onSubmit()
  {
    alert("welcome to first angular app")
  }
}
