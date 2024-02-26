import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import {
	HomepageComponent,
	DonateFoodComponent,
	ReceiveFoodComponent,
} from "../components/component-index";

export const routes: Routes = [
	{ path: "", component: HomepageComponent },
	{ path: "donate-food", component: DonateFoodComponent },
	{ path: "receive-food", component: ReceiveFoodComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
