import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dumb-component',
  templateUrl: './dumb-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DumbComponentComponent implements OnInit {

  constructor() { }
  statusOptions = ['John Doe', 'Hans Muster'];

  @Input()
  form?: FormGroup

  ngOnInit(): void {
  }

}
