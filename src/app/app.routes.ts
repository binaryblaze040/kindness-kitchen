import { Routes } from '@angular/router';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { ReceiveFoodComponent } from '../components/receive-food/receive-food.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomepageComponent,
    },
    {
        path: 'receive',
        component: ReceiveFoodComponent
    }
];
