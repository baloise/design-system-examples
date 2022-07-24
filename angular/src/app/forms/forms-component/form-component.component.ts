import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {formatDateString} from "@baloise/web-app-utils";

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  constructor() {
  }

  statusOptions = ['John Doe', 'Hans Muster'];
  todayDate = new Date();
  todayDateDatePickerValue = formatDateString(new Date(new Date().setFullYear(this.todayDate.getFullYear() - 25)));

  @Input()
  form?: FormGroup

  ngOnInit(): void {
  }

}
