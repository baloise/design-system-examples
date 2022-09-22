import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  constructor() { }
  statusOptions = [{name: 'John Doe', value: 'JD'}, {name: 'Hans Muster', value: 'HM'}];

  @Input()
  form?: FormGroup

  ngOnInit(): void {
    this.form?.addControl('status', new FormControl('HM'));
    this.form?.addControl('status2', new FormControl('JD'));
  }

}
