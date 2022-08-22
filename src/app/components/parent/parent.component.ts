import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent)
  child!: { message: any; };
  constructor() { }

  ngOnInit(): void {
  }

  // output message emitted from child component
  receiveMessage(outputMessage: string) {
    alert("Parent: " + outputMessage);
  }

  ngAfterViewInit() {
    alert("Parent: " + this.child.message);
  }

}
