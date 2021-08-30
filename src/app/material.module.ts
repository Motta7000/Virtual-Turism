import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTabsModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatTreeModule,
  MatAutocompleteModule
} from '@angular/material';
import {NgModule} from '@angular/core';

const modules = [
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatButtonModule,
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatCheckboxModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatExpansionModule,
  MatTooltipModule,
  MatSelectModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatTabsModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatTreeModule,
  MatAutocompleteModule
];

@NgModule({
  imports: [modules],
  exports: [modules]
})
export class MaterialModule {
}
