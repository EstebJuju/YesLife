import { Routes } from '@angular/router';

import { MyYesLifeComponent } from '../../pages/my-yes-life/my-yes-life.component';
import { TablesComponent } from '../../pages/tables/tables.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'my-yes-life', component: MyYesLifeComponent },
    { path: 'tables', component: TablesComponent }
];
