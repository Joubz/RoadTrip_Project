import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {CalculParametresService} from '../services/calculParametresService';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';


interface City {
    value: string;
    viewValue: string;
}

/**
 * Dialog component
 */
@Component({
    selector: 'app-dialog-vue-accueil',
    templateUrl: 'dialog-vue-accueil.component.html',
    styleUrls: ['./vue-accueil.component.scss']
})
export class DialogVueAccueilComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogVueAccueilComponent>,
        @Inject(MAT_DIALOG_DATA) public data: boolean) {
    }

    onNoClick(): void {
        this.data = false;
        this.dialogRef.close();
    }

    onYesClick() {
        this.data = true;
    }
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
        private fb: FormBuilder,
        public dialog: MatDialog
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
     * Open the validation DIALOG
     */
    openDialog(): void {
        const dialogRef = this.dialog.open(DialogVueAccueilComponent, {
            width: '250px',
            data: {validation: false}
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.validation();
            }
        });
    }

    /**
     * Submit the form
     *
     */
    validation() {
        const ville = this.editForm.get('ville');
        const dateDebut = this.editForm.get('dateDebut');
        const dateFin = this.editForm.get('dateFin');
        this.calculParametresService.addVille(ville, dateDebut, dateFin);
        this.router.navigate(['/parametres']);
    }

}
