import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { calculParametresService } from '../services/calculParametres.service';

@Component({
  selector: 'app-vue-accueil',
  templateUrl: './vue-accueil.component.html',
  styleUrls: ['./vue-accueil.component.scss']
})
export class VueAccueilComponent implements OnInit {

  constructor(private router:Router, 
  	private CalculParametresService : calculParametresService) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm) {
  	console.log(form.value);
  	const ville = form.value['ville'];
  	const date_debut = form.value['date_debut'];
  	const date_fin = form.value['date_fin'];

  	this.CalculParametresService.addVille(ville, date_debut, date_fin);

  	this.router.navigate(['/parametres']);
  }

}
