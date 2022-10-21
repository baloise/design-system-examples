import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {formatDateString} from "@baloise/web-app-utils";

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  constructor() { }
  statusOptions = [{name: 'John Doe', value: 'JD'}, {name: 'Hans Muster', value: 'HM'}];
  todayDate = new Date();
  todayDateDatePickerValue = formatDateString(new Date(new Date().setFullYear(this.todayDate.getFullYear() - 25)));

  @Input()
  form?: FormGroup

  ngOnInit(): void {
    this.form?.addControl('status', new FormControl('HM'));
    this.form?.addControl('status2', new FormControl('JD'));
  }

}
