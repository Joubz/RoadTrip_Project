import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CalculParametresService} from '../services/calculParametresService';
import {Monument} from '../models/monument.model';

@Component({
    selector: 'app-vue-parametres',
    templateUrl: './vue-parametres.component.html',
    styleUrls: ['./vue-parametres.component.scss']
})
export class VueParametresComponent implements OnInit {
    @Input() prixTotal;
    @Input() ville = 'Err';

    monument1 = new Monument(1, 'Colisée', '1 Rue du colisée', '0800', '1000', '10');
    monument2 = new Monument(1, 'Matmut', '1 Rue du matmut', '1010', '1200', '12');
    monument3 = new Monument(1, 'Piazza', '1 Rue du piazza', '1400', '1530', '0');
    monument4 = new Monument(1, 'Panthéon', '1 Rue du Panthéon', '0800', '0950', '2');
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
    private price: number;
    private tmp: number;

    constructor(private router: Router,
                private calculParametresService: CalculParametresService) {
    }

    ngOnInit() {
        this.prixTotal = this.calculPrixTotal();
        this.ville = this.calculParametresService.ville;
    }

    moveTo() {
        this.router.navigate(['/parcours']);
    }

    switchOut(monument: Monument, i: number) {
        if (monument.isOpen()) {
            this.parcoursNonVisite.push(monument);
            this.parcoursVisite.splice(i, 1);
            console.log(this.parcoursVisite);
            console.log(this.parcoursNonVisite);
            this.prixTotal = this.calculPrixTotal();
        } else {
            alert('Impossible de visiter le lieu pendant le séjour');
        }
    }

    switchIn(monument: Monument, i: number) {
        if (monument.isOpen()) {
            this.parcoursVisite.push(monument);
            this.parcoursNonVisite.splice(i, 1);
            console.log(this.parcoursVisite);
            console.log(this.parcoursNonVisite);
            this.prixTotal = this.calculPrixTotal();
        } else {
            alert('Impossible de visiter le lieu pendant le séjour');
        }
    }

    calculPrixTotal(): number {
        this.tmp = 0;
        this.parcoursVisite.forEach(monument => {
            console.log(this.tmp);
            this.tmp += +monument.getCoutMonument();
        });
        return this.tmp;
    }
}
