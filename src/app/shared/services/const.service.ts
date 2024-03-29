import { Injectable } from '@angular/core';

import {
    SizeColumnsToContentStrategy,
    SizeColumnsToFitGridStrategy,
    SizeColumnsToFitProvidedWidthStrategy,
} from 'ag-grid-community';

@Injectable({
  providedIn: 'root',
})
export class ConstService {
//   USER_CATEGORIES = ['student', 'teacher', 'institution'];
    USER_CATEGORIES = ['learner', 'instructor'];

    USER_COURSE = ['python', 'javascript'];

    USER_LEVEL = ['novice', 'beginner', 'intermediate', 'expert'];

    NUMBER_REGEX = /^[-+]?\d*\.?\d+$/;

    // AgGrid related constants
    defaultColDef = {
        resizable: true,
        filter: true,
        sortable: true,
        floatingFilter: true,
    };
    autoSizeStrategy:
        | SizeColumnsToFitGridStrategy
        | SizeColumnsToFitProvidedWidthStrategy
        | SizeColumnsToContentStrategy = { type: 'fitCellContents' }
}
