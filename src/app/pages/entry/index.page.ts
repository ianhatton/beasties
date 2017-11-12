// @Angular
import { Component } from '@angular/core';

// Ngrx
// import { Observable } from 'rxjs/Observable';
// import { Store } from '@ngrx/store';
// import * as fromRoot from '../../reducer';
// import * as briefs from '../../action/briefs.action';

// Helpers
// import { Helper } from '../../util/helper';

@Component({
	selector: 'entry-index-page',
	templateUrl: 'index.page.html'
})

export class EntryIndexPage {
	// private _subscription: any[] = [];

	constructor(
		
	) {

	}

	/**
	 * @name ngOnInit
	 * @description Lifecycle hook.
	 * @returns {void} Nothing.
	 */
	private ngOnInit(): void {
		// Helper.setBodyClass('entry-index');
    }
    
    /**
	 * @name ngOnDestroy
	 * @description Lifecycle hook.
	 * @returns {void} Nothing.
	 */
	private ngOnDestroy(): void {
		// Helper.setBodyClass();
	}
}