import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatBadgeModule,
        MatCardModule,
        MatButtonModule
    ]
})

export class MaterialModule {}