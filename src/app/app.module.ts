import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {VueAccueilComponent, DialogVueAccueilComponent} from './vue-accueil/vue-accueil.component';
import {VueParametresComponent} from './vue-parametres/vue-parametres.component';
import {VueParcoursComponent} from './vue-parcours/vue-parcours.component';
import {VueSauvegardesComponent} from './vue-sauvegardes/vue-sauvegardes.component';
import {MenuComponent} from './menu/menu.component';
import {BouttonMenuComponent} from './boutton-menu/boutton-menu.component';
import {MonumentCardComponent} from './monument-card/monument-card.component';
import {MonumentListComponent} from './monument-list/monument-list.component';

import {CalculParametresService} from './services/calculParametresService';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

const appRoutes: Routes = [
    {path: 'accueil', component: VueAccueilComponent},
    {path: 'index', component: VueAccueilComponent},
    {path: 'parametres', component: VueParametresComponent},
    {path: 'sauvegarde', component: VueSauvegardesComponent},
    {path: 'parcours', component: VueParcoursComponent},
    {path: 'menu', component: MenuComponent},
    {path: '', component: VueAccueilComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        VueAccueilComponent,
        VueParametresComponent,
        VueParcoursComponent,
        VueSauvegardesComponent,
        MenuComponent,
        BouttonMenuComponent,
        MonumentCardComponent,
        MonumentListComponent,
        DialogVueAccueilComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule.forRoot(appRoutes,
            {enableTracing: true},
        ),
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        MatSelectModule,
        MatCardModule,
        ReactiveFormsModule,
        MatDialogModule
    ],
    providers: [
        CalculParametresService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
