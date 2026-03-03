import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-documents-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './documents-section.html',
  styleUrls: ['./documents-section.css'],
})
export class DocumentsSection {
  // active tab
  activeTab = 'documents';

  // popup
  showUploadDialog = false;

  // table data
  documents: any[] = [];

  // dropdown (replace with API later)
  categories: any[] = [
    { label: 'KYC', value: 'kyc' },
    { label: 'Agreement', value: 'agreement' },
    { label: 'Identity Proof', value: 'identity' },
  ];

  selectedCategory: any = null;
  selectedFile: File | null = null;
  hovered = false;

  // ================= TAB SWITCH =================
  setTab(tab: string) {
    this.activeTab = tab;
  }

  // ================= FILE EVENTS =================
  onFileSelect(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onDragOver(e: DragEvent) {
    e.preventDefault();
    this.hovered = true;
  }

  onDragLeave(e: DragEvent) {
    e.preventDefault();
    this.hovered = false;
  }

  onDrop(e: DragEvent) {
    e.preventDefault();
    this.hovered = false;
    this.selectedFile = e.dataTransfer?.files?.[0] || null;
  }

  // ================= SAVE =================
  uploadDocument() {
    if (!this.selectedFile || !this.selectedCategory) return;

    this.documents.push({
      fileName: this.selectedFile.name,
      category: this.selectedCategory.label,
    });

    this.showUploadDialog = false;
    this.selectedFile = null;
    this.selectedCategory = null;
  }
}