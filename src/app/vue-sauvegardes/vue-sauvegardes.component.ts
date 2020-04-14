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
  public selected: number;

  constructor(
      private router: Router,
  ) { }

  ngOnInit() {
    this.selected = -1;

    this.parcours1 = new Parcours(0, 'Rome', '03/02/020', '09/02/2020', '1');
    this.parcours2 = new Parcours(1, 'Rome', '01/03/2020', '05/03/2020', '2');
    this.parcours3 = new Parcours(2, 'Lisbonne', '21/03/2020', '26/03/2020', '1');
    this.parcours4 = new Parcours(3, 'Rome', '28/04/2020', '02/05/2020', '3');
    this.parcours5 = new Parcours(4, 'Barcelone', '03/05/2020', '09/05/2020', '1');
    this.parcours6 = new Parcours(5, 'Rome', '19/05/2020', '25/05/2020', '4');


    this.tabParcours.data.push(this.parcours1);
    this.tabParcours.data.push(this.parcours2);
    this.tabParcours.data.push(this.parcours3);
    this.tabParcours.data.push(this.parcours4);
    this.tabParcours.data.push(this.parcours5);
    this.tabParcours.data.push(this.parcours6);
    this.tabParcours.paginator = this.paginator;
    this.tabParcours.filter = '';
  }

  onSelectionChange(select: number) {
    this.selected = select;
  }

  deleteParcours(select: number) {
    this.selected = -1;
    this.tabParcours.data.splice(select, 1);
    this.tabParcours.filter = '';
  }

  openCreation() {
    this.router.navigate(['']);
  }

  openModification() {
    this.router.navigate(['/parametres']);
  }
}
