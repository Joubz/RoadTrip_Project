import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {CalculParametresService} from '../services/calculParametresService';


interface City {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-vue-accueil',
    templateUrl: './vue-accueil.component.html',
    styleUrls: ['./vue-accueil.component.scss']
})
export class VueAccueilComponent implements OnInit {
    villeCtrl: FormControl;
    dateDebutCtrl: FormControl;
    dateFinCtrl: FormControl;


    cities: City[] = [
        {value: 'Lisbonne', viewValue: 'Lisbonne'},
        {value: 'Madrid', viewValue: 'Madrid'},
        {value: 'Rome', viewValue: 'Rome'},
        {value: 'Barcelone', viewValue: 'Barcelone'}
    ];

    constructor(
        private router: Router,
        private calculParametresService: CalculParametresService
    ) {

        /**
         * TO DO : add form control
         */
    }

    ngOnInit() {
    }

    /**
     * Submit the form
     *
     * @param form
     */
    onSubmit(form: NgForm) {
        const ville = this.villeCtrl;

        console.log(this.dateDebutCtrl);

        const dateDebut = this.dateDebutCtrl;

        const dateFin = this.dateFinCtrl;

        this.calculParametresService.addVille(ville, dateDebut, dateFin);

        this.router.navigate(['/parametres']);
    }

}
