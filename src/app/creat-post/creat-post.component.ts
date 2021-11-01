import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'creat-post',
  templateUrl: './creat-post.component.html',
  styleUrls: ['./creat-post.component.css']
})
export class CreatPostComponent implements OnInit {
  content: String = "Hola a todos";
  texto: string = "";

  constructor() { }

  ngOnInit(): void {}

  showText(){
  this.content = this.texto;
  }

}
