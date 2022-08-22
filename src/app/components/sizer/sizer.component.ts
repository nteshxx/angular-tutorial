import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent implements OnInit {
  @Input()
  size!: number;

  @Output()
  sizeChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  decrease(): void {
    this.resize(-1);
  }

  increase(): void {
    this.resize(+1);
  }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, this.size + delta));
    this.sizeChange.emit(this.size);
  }

}
