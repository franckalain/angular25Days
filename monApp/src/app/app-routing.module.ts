import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BgcolorDirective } from './bgcolor.directive';


const routes: Routes = [];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: [
      BgcolorDirective
   ]
})
export class AppRoutingModule { }
