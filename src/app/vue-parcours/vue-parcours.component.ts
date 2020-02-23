import {Component, OnInit} from '@angular/core';
import {Monument} from '../models/monument.model';

@Component({
    selector: 'app-vue-parcours',
    templateUrl: './vue-parcours.component.html',
    styleUrls: ['./vue-parcours.component.scss']
})
export class VueParcoursComponent implements OnInit {
    ville = 'Rome';

    monument_1 = new Monument(1, 'Colisée', '1 Rue du colisée', '0800', '1000', '0');
    monument_2 = new Monument(1, 'Matmut', '1 Rue du matmut', '1010', '1200', '12');
    monument_3 = new Monument(1, 'Piazza', '1 Rue du piazza', '1400', '1530', '0');
    monument_4 = new Monument(1, 'Panthéon', '1 Rue du Panthéon', '0800', '0950', '0');
    monument_5 = new Monument(1, 'Piazza_2 del fuego de la mañana', '1 Rue du piazza_2', '0000', '0000', '0');
    monument_6 = new Monument(0, 'Parthénon', '1 Rue du parthénon', '0000', '0000', '0');
    monument_7 = new Monument(1, 'NomRandom', '1 Rue du random', '0000', '0000', '0');
    monument_8 = new Monument(1, 'NomRandom2', '1 Rue du random2', '0000', '0000', '0', 'NomRandom');

    date: string[] = [
        'Lundi 16/02/20', 'Mardi 17/02/20', 'Mercredi 18/02/20'
    ];

    parcours: Monument[][] = [
        [
            this.monument_1, this.monument_2, this.monument_3
        ],
        [],
        [
            this.monument_4
        ]
    ];

    constructor() {
    }

    ngOnInit() {
        console.log(this.parcours[0]);
    }

}
