import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistartionComponent } from "./registartion.component";

const routes: Routes = [
 
  {
    path: "",
    component: RegistartionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistartionRoutingModule {}