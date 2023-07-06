import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoryPlotComponent} from "./story-plot/story-plot.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    StoryPlotComponent,

  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule
  ],
  exports: [
    StoryPlotComponent
  ]
})
export class StoryModule { }
