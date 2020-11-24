import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "public",
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
  },
  {
    path: "",
    redirectTo: "public",
    pathMatch: "full"
  },
  {
    path: "registartion",
    loadChildren: () =>
      import("./registartion/registartion.module").then(
        m => m.RegistartionModule
      )
  },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then(
        m => m.HomeModule
      )
  },
  {
    path: "about",
    loadChildren: () =>
      import("./about/about.module").then(
        m => m.AboutModule
      )
  },
{
    path: "contactus",
    loadChildren: () =>
      import("./contactus/contactus.module").then(
        m => m.contactusModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
