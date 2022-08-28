import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  constructor() { }
  statusOptions = ['John Doe', 'Hans Muster'];

  @Input()
  form?: FormGroup

  ngOnInit(): void {
  }

  onBlur($event: Event) {
    console.log("oon blur happened: ", $event)
  }
}
