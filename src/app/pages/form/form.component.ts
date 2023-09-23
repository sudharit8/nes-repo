import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/shared/can-deactivate.guard';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, CanComponentDeactivate {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nameControl: [''],
      notesControl: [''],
    });
  }
  canDeactivate(): boolean {
    if (this.form.dirty) {
      return window.confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }
  ngOnInit(): void {
  }

  saveForm(): void {

  }

}
