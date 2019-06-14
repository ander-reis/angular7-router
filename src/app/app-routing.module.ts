import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PrincipalComponent} from './principal/principal.component';
import {SobreComponent} from './sobre/sobre.component';

const routes: Routes = [
    {path: '', component: PrincipalComponent},
    {path: 'sobre', component: SobreComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
