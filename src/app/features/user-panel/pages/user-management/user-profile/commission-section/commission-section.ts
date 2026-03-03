import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-commission-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './commission-section.html',
  styleUrl: './commission-section.css',
})
export class CommissionSection {
  editMode = false;

  commissionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.commissionForm = this.fb.group({
      brokerShare: [60],
      managerShare: [10],
      companyShare: [30],
    });

    this.commissionForm.disable(); // readonly by default
  }

  toggleEdit() {
    this.editMode = !this.editMode;

    if (this.editMode) this.commissionForm.enable();
    else this.commissionForm.disable();
  }

  save() {
    console.log(this.commissionForm.value);
    this.toggleEdit();
  }
}