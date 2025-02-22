import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrl: './file-uploader.component.scss'
})
export class FileUploaderComponent {
  @Output() fileUploaded = new EventEmitter<{ fileName: string, filePath: string }>();
  selectedFile!: File;
  imagePath: string | null = null;
  uploadedFileName: string = '';

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    if (this.selectedFile) {
      this.uploadedFileName = this.selectedFile.name;
      this.onUpload();
    }
  }

  onUpload() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post<{ fileName: string, filePath: string }>(
      'https://localhost:7165/api/admin/UploadFile', 
      formData
    ).subscribe({
      next: (response) => {
        console.log('Upload successful!', response);
        this.imagePath = response.filePath;
        this.fileUploaded.emit({ fileName: response.fileName, filePath: response.filePath });
      },
      error: (error) => {
        console.error('Upload failed!', error);
      }
    });
  }
}