import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';


@NgModule({
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatBadgeModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatRadioModule,
        MatSelectModule,
        MatOptionModule,
        MatInputModule
    ]
})

export class MaterialModule {}