import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
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
    editForm: FormGroup;


    cities: City[] = [
        {value: 'Lisbonne', viewValue: 'Lisbonne'},
        {value: 'Madrid', viewValue: 'Madrid'},
        {value: 'Rome', viewValue: 'Rome'},
        {value: 'Barcelone', viewValue: 'Barcelone'}
    ];

    constructor(
        private router: Router,
        private calculParametresService: CalculParametresService,
        private fb: FormBuilder
    ) {

        this.dateDebutCtrl = fb.control('', [Validators.required]);
        this.dateFinCtrl = fb.control('', [Validators.required]);
        this.editForm = fb.group({
            ville: this.villeCtrl,
            dateDebut: this.dateDebutCtrl,
            dateFin: this.dateFinCtrl
        });
    }

    ngOnInit() {
    }

    /**
     * Submit the form
     *
     * @param form
     */
    onSubmit(form: NgForm) {
        const ville = this.editForm.get('ville');

        console.log(this.dateDebutCtrl);
        console.log(this.editForm.get('dateDebut'));
        
        const dateDebut = this.editForm.get('dateDebut');

        const dateFin = this.editForm.get('dateFin');

        this.calculParametresService.addVille(ville, dateDebut, dateFin);

        this.router.navigate(['/parametres']);
    }

}
