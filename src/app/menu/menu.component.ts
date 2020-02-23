import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  moveToModifierParcours() {
  	this.router.navigate(['/parametres']);
  }

  moveToParcoursSauvegardes() {
  	this.router.navigate(['/sauvegarde']);  	
  }

  SauvegarderParcours() {
  	console.log('Parcours sauvegardé sous le nom : ');
  }

}
