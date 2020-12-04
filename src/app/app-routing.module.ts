import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FooterComponent} from '../app/footer/footer.component';
import {HeaderComponent} from '../app/header/header.component';
import {BevitelComponent} from '../app/bevitel/bevitel.component';
import {GyakComponent} from '../app/gyak/gyak.component';
import {TableComponent} from '../app/table/table.component'
import {UpdateComponent} from '../app/update/update.component'

const routes: Routes = [
 {path:'footer',
 component:FooterComponent
},
{path:'header',
 component:HeaderComponent
},
{path:'gyak',
 component:GyakComponent
},
{path:'table',
 component:TableComponent
},
{path:'bevitel',
 component:BevitelComponent
},
{path:"update/:id",
 component:UpdateComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
