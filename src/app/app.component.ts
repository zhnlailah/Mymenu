import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mahasiswa', url: '/folder/mahasiswa', icon: 'people' },
    { title: 'Dosen', url: '/dosen/Dosen', icon: 'body' },
    { title: 'Mata Kuliah', url: '/matakuliah/matakuliah', icon: 'book' },
  ];
  public labels = ['Family', 'Friends', 'Notes'];
  constructor() {}
}
