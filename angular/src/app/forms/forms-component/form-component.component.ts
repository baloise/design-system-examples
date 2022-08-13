import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  constructor() { }
  statusOptions = ['John Doe', 'Hans Muster'];

  @Input()
  form?: UntypedFormGroup

  ngOnInit(): void {
  }

}
