import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AstronautsComponent } from "./astronauts/astronauts.component";
import { IssComponent } from "./iss/iss.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  { path: "astronauts", component: AstronautsComponent },
  { path: "iss", component: IssComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const RouteComponents = [AstronautsComponent, IssComponent];
