import {Input} from '@angular/core';
import {Monument} from '../models/monument.model';
import {AbstractControl, FormControl} from '@angular/forms';

export class CalculParametresService {
    @Input() ville = '';
    @Input() dateDebut = '';
    @Input() dateFin = '';

    @Input() parcours: Monument[][];

    @Input() nonVisites: Monument[];

    constructor() {
    }

    addVille(ville: AbstractControl, dateDebut: AbstractControl, dateFin: AbstractControl) {
        this.ville = ville.value;
        this.dateDebut = dateDebut.value;
        this.dateFin = dateFin.value;
    }
}
