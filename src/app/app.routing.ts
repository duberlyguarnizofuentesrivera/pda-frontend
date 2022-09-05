import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {RouterModule} from "@angular/router";
import {MainSiteComponent} from "./main-site/main-site.component";

const appRoutes = [
  {path: '', component: MainSiteComponent, pathMatch: 'full'},
  {path: 'admin-panel', component: AdminPanelComponent, pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(appRoutes);
