import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-monument-card',
  templateUrl: './monument-card.component.html',
  styleUrls: ['./monument-card.component.scss']
})
export class MonumentCardComponent implements OnInit {
	@Input() nomMonument:string ="NaN";
	@Input() coutMonument:string ="NaN";
	@Input() debutMonument:string ="NaN";
	@Input() finMonument:string ="NaN";
	@Input() lieuMonument:string ="Erreur injection données";


  constructor() { }

  ngOnInit() {
  }

}
