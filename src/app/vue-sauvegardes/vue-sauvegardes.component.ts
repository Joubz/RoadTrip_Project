import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {Parcours} from './parcours';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-vue-sauvegardes',
  templateUrl: './vue-sauvegardes.component.html',
  styleUrls: ['./vue-sauvegardes.component.scss']
})
export class VueSauvegardesComponent implements OnInit {

  tabParcours = new MatTableDataSource<Parcours>();
  displayedColumns: string[] = ['select', 'city', 'startDate', 'endDate', 'iteration'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  private parcours1: Parcours;
  private parcours2: Parcours;
  private parcours3: Parcours;
  private parcours4: Parcours;
  private parcours5: Parcours;
  private parcours6: Parcours;

  constructor(
      private router: Router,
  ) { }

  ngOnInit() {
    this.parcours1 = new Parcours('Rome', '03/02/2020', '09/02/2020', '1');
    this.parcours2 = new Parcours('Rome', '01/03/2020', '05/03/2020', '2');
    this.parcours3 = new Parcours('Lisbonne', '21/03/2020', '26/03/2020', '1');
    this.parcours4 = new Parcours('Rome', '28/04/2020', '02/05/2020', '3');
    this.parcours5 = new Parcours('Barcelone', '03/05/2020', '09/05/2020', '1');
    this.parcours6 = new Parcours('Rome', '19/05/2020', '25/05/2020', '4');


    this.tabParcours.data.push(this.parcours1);
    this.tabParcours.data.push(this.parcours2);
    this.tabParcours.data.push(this.parcours3);
    this.tabParcours.data.push(this.parcours4);
    this.tabParcours.data.push(this.parcours5);
    this.tabParcours.data.push(this.parcours6);
    this.tabParcours.paginator = this.paginator;
    this.tabParcours.filter = '';
  }

  deleteParcours(select: number) {
  }

  updateParcours() {
  }

  openCreation() {
    this.router.navigate(['']);
  }
}
