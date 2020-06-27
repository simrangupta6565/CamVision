import { NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutBodyComponent } from './about-body/about-body.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './Footer/log-in.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes:Routes = [
    { path:'', redirectTo:'', pathMatch:'full'},
    {
        path:'ContactUs',
        component:ContactComponent
    },
    {
        path:'AboutUs',
        component:AboutBodyComponent
    },
    {
        path:'SignUp',
        component:SignUpComponent
    },
    {
        path:'LogIn',
        component:LogInComponent
    },
    {
        path:'Home',
        component:HomepageComponent    
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouterModule{}
