import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
})
export class EventComponent {
  myName?: string;

  updateName(value: string | undefined) {
    this.myName = value
  }
}
