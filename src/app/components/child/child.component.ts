import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  inputMessage!: string;

  @Output()
  messageEvent = new EventEmitter<string>();

  message: string = "Child Message Property";
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit("This is a message from Child!");
  }

}
