import { NgModule } from '@angular/core';
import { GocodeeLightboxComponent } from './gocodee-lightbox.component';
import { CommonModule } from '@angular/common';
import { GocodeeLightboxService } from './gocodee-lightbox.service';

@NgModule({
  declarations: [GocodeeLightboxComponent],
  imports: [
    CommonModule
  ],
  exports: [GocodeeLightboxComponent],
  providers:[GocodeeLightboxService]
})
export class GocodeeLightboxModule { }
