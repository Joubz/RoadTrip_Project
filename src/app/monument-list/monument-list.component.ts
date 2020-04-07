import {Component, Input, OnInit} from '@angular/core';
import {Monument} from '../models/monument.model';

@Component({
    selector: 'app-monument-list',
    templateUrl: './monument-list.component.html',
    styleUrls: ['./monument-list.component.scss']
})
export class MonumentListComponent implements OnInit {
    @Input() nomMonument = 'NaN';
    @Input() coutMonument = 'NaN';
    @Input() dependanceMonument = null;
    @Input() openMonument: number;

    monument1 = new Monument(1, 'Colisée', '1 Rue du colisée', '0800', '1000', '10');
    monument2 = new Monument(1, 'Matmut', '1 Rue du matmut', '1010', '1200', '12');
    monument3 = new Monument(1, 'Piazza', '1 Rue du piazza', '1400', '1530', '0');
    monument4 = new Monument(1, 'Panthéon', '1 Rue du Panthéon', '0800', '0950', '0');
    monument5 = new Monument(1, 'Piazza_2 del fuego de la mañana', '1 Rue du piazza_2', '0000', '0000', '0');
    monument6 = new Monument(0, 'Parthénon', '1 Rue du parthénon', '0000', '0000', '5');
    monument7 = new Monument(1, 'Basilique St Pierre', 'Piazza San Pietro', '0000', '0000', '10');
    monument8 = new Monument(1, 'Le forum antique', 'Via della Salara Vecchia', '0000', '0000', '5', 'Colisée');

    parcoursVisite: Monument[] = [
        this.monument1, this.monument2, this.monument3, this.monument4
    ];

    parcoursNonVisite: Monument[] = [
        this.monument5, this.monument6, this.monument7, this.monument8
    ];

    constructor() {
    }

    ngOnInit() {
    }

    isDependant() {
        return this.dependanceMonument != null;
    }

    isOpen() {
        return this.openMonument !== 0;
    }

    isAvailable() {
        return false;
    }

    switch() {

    }

}
