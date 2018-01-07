// Allow our pipe to be used in the component class instead of the DOM
import { Component, OnInit } from '@angular/core';

interface File {
  name: string,
  size: any, // not coolest TypeScript but just for ease.
  type: string
}

// Import our Pipe
import { FileSizePipe } from './filesize.pipe';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div *ngFor="let file of mapped">
        <p>{{ file.name }}</p>
        <p>{{ file.size }}</p>
      </div>
    </div>
  `,
  // Register our pipe to the providers
  providers: [
    FileSizePipe
  ]
})
export class AppComponent implements OnInit {
  files: File[];
  mapped: File[];
  // Dependency inject pipe in constructor
  constructor(
    private fileSizePipe: FileSizePipe
  ) {}
  ngOnInit() {
    this.files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { name: 'background.png', size: 1784562, type: 'image/png' }
    ];
    //map over our files object and bind it to this.mapped
    this.mapped = this.files.map(file => {
      return {
        name: file.name,
        type: file.type,
        // size gets pipe applied to it.
        size: this.fileSizePipe.transform(file.size, 'mb')
      };
    });
  }
}
