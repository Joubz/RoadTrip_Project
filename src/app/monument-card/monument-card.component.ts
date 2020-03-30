import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-monument-card',
    templateUrl: './monument-card.component.html',
    styleUrls: ['./monument-card.component.scss']
})
export class MonumentCardComponent implements OnInit {
    @Input() nomMonument = 'NaN';
    @Input() coutMonument = 'NaN';
    @Input() debutMonument = 'NaN';
    @Input() finMonument = 'NaN';
    @Input() lieuMonument = 'Erreur injection données';


    constructor() {
    }

    ngOnInit() {
    }

}
