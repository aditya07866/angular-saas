import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.html',
  styleUrls: ['./user-details.css'],
})
export class UserDetails {

  // ✅ STATIC PERSONAL INFO
  personalInfo = {
    fullName: 'Aditya Thappa',
    userId: 'CCUUXXXX',
    role: 'CAS Broker',
    mobile: '+44 999999999',
    telephone: '+44 888888888',
    email: 'aditya.thappa@wealthmax.com',
    dob: '12 Jan 1995',
    company: 'Wealthmax Financial Advisors',
    reportingManager: 'Manager Name',
  };

  // ✅ STATIC REGULATORY DATA
 regulatoryData = {
  postcode: 'SW1A 1AA',
  address: 'Barnes London, UK',
  niNumber: 'QQ123456C',
  irn: 'HMS12345',
  bankName: 'HDFC BANK',
  accountNumber: '15215221152152',
  sortCode: '12-34-56',
  bankAddress: 'London, South Hall'
};

}