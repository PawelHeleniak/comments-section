import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
  @Output() newItemEvent = new EventEmitter<Object>();

  submit(form: NgForm) {
    this.newItemEvent.emit(form.value);
  }
}
