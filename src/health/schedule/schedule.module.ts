import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

// containers
import {ScheduleComponent} from "./containers/schedule/schedule.component";

// components
import {ScheduleCalendarComponent} from "./components/schedule-calendar/schedule-calendar.component";
import {ScheduleDaysComponent} from "./components/schedule-days/schedule-days.component";
import {ScheduleControlsComponent} from "./components/schedule-controls/schedule-controls.component";
import {ScheduleSectionComponent} from "./components/schedule-section/schedule-section.component";
import {SharedModule} from "../shared/shared.module";



export const ROUTES: Routes = [
  {path: '', component: ScheduleComponent}
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    ScheduleComponent,
    ScheduleCalendarComponent,
    ScheduleDaysComponent,
    ScheduleControlsComponent,
    ScheduleSectionComponent
  ]
})

export class ScheduleModule {

}