import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'app-inicio',
        loadComponent:()=>import('./inicio/inicio.component'),
    },
    {children:[
        {
            path:'inicio-sesion',
            loadComponent:()=>import('./inicio-sesion/inicio-sesion.component')
        }
    ]
}
];
