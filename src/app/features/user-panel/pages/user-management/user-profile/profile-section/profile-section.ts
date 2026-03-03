import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-section.html',
  styleUrls: ['./profile-section.css'],
})
export class ProfileSection {

  // ✅ INPUT FROM PARENT
  @Input() user: any = {};
  onboardingData: any = {};
  data: any = {
    status: 'In Review',
    progress: 0,
    sanctionMatch: false
  };

  // ✅ OUTPUT EVENT
  @Output() resetPassword = new EventEmitter<void>();

  onResetClick() {
    this.resetPassword.emit();
  }
}