import {Component, OnInit} from '@angular/core';
import {Monument} from '../models/monument.model';

@Component({
    selector: 'app-vue-parcours',
    templateUrl: './vue-parcours.component.html',
    styleUrls: ['./vue-parcours.component.scss']
})
export class VueParcoursComponent implements OnInit {
    ville = 'Rome';

    monument1 = new Monument(1, 'Colisée', '1 Rue du colisée', '0800', '1000', '0');
    monument2 = new Monument(1, 'Matmut', '1 Rue du matmut', '1010', '1200', '12');
    monument3 = new Monument(1, 'Piazza', '1 Rue du piazza', '1400', '1530', '0');
    monument4 = new Monument(1, 'Panthéon', '1 Rue du Panthéon', '0800', '0950', '0');
    monument5 = new Monument(1, 'Piazza_2 del fuego de la mañana', '1 Rue du piazza_2', '0000', '0000', '0');
    monument6 = new Monument(0, 'Parthénon', '1 Rue du parthénon', '0000', '0000', '0');
    monument7 = new Monument(1, 'NomRandom', '1 Rue du random', '0000', '0000', '0');
    monument8 = new Monument(1, 'NomRandom2', '1 Rue du random2', '0000', '0000', '0', 'NomRandom');

    date: string[] = [
        'Lundi 16/02/20', 'Mardi 17/02/20', 'Mercredi 18/02/20'
    ];

    parcours: Monument[][] = [
        [
            this.monument1, this.monument2, this.monument3
        ],
        [],
        [
            this.monument4
        ]
    ];

    constructor() {
    }

    ngOnInit() {
        console.log(this.parcours[0]);
    }

}
