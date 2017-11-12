import { Routes } from '@angular/router';

import {
	EntryIndexPage,
} from './pages';

export const ROUTES: Routes = [
	{ path: '', redirectTo: '/entry', pathMatch: 'full' },
	{ path: 'entry',
		children: [
			{ path: '', component: EntryIndexPage }
		]
	}
];