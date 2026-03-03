import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommissionSection } from './commission-section/commission-section';
import { UserDetails } from './user-details/user-details';
import { DocumentsSection } from './documents-section/documents-section';
import { ProfileSection } from './profile-section/profile-section';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    CommonModule,
    ProfileSection,
    CommissionSection,
    UserDetails,
    DocumentsSection
  ],
  templateUrl: './user-profile.html',
  styleUrls: ['./user-profile.css'],
})
export class UserProfile implements OnInit {

  user: any = {};
  onboardingData: any = {};
  commissionData: any = {};
  personalInfo: any = {};
  regulatoryData: any = {};
  documents: any[] = [];

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.user = {
      name: 'Aditya',
      role: 'CAS Broker',
      status: 'Active',
      applications: 32
    };
  }

  onResetPassword() {
    console.log('Reset password clicked');
  }

  onAddDocument() {
    console.log('Add document');
  }
  onSaveCommission(data: any) {
  console.log('Commission saved:', data);
}
}