import { Input } from '@angular/core';
import { Monument } from '../models/monument.model';

export class calculParametresService {
	@Input() ville: string = 'Err';
	@Input() date_debut: string = 'Err';
	@Input() date_fin: string = 'Err';

	@Input() parcours: Monument[][];

	@Input() nonVisites: Monument[];

	constructor(){}

	addVille(ville: string, date_debut: string, date_fin: string) {
		this.ville = ville;
		this.date_debut = date_debut;
		this.date_fin = date_fin;
	}
}