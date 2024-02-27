import { Routes } from "@angular/router";
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
