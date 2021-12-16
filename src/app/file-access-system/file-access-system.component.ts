import { Component } from '@angular/core';

@Component({
  selector: 'app-file-access-system',
  templateUrl: './file-access-system.component.html',
  styleUrls: ['./file-access-system.component.scss'],
})
export class FileAccessSystemComponent {
  selectedFile!: File;
  newFile!: FileSystemFileHandle;
  pickerOpts = {
    types: [
      {
        description: 'Images',
        accept: {
          'image/*': ['.png', '.gif', '.jpeg', '.jpg'],
        },
      },
    ],
    excludeAcceptAllOption: true,
  };

  async getFile() {
    // open file picker
    let fileHandle: FileSystemFileHandle;
    [fileHandle] = await window.showOpenFilePicker(this.pickerOpts);
    if (fileHandle.kind === 'file') {
      this.selectedFile = await fileHandle.getFile();
      console.log(this.selectedFile);
    }
  }
  async saveFile() {
    // open file picker
    this.newFile = await window.showSaveFilePicker({
      types: [
        {
          description: 'Images',
          accept: {
            'image/png': ['.png'],
          },
        },
      ],
      excludeAcceptAllOption: true,
    });
    const writableStream = await this.newFile.createWritable();
    await writableStream.write(this.selectedFile);
    await writableStream.close();
  }
  async getFolder() {
    const target = 'test.png';
    // open directory picker
    let dirHandle: FileSystemDirectoryHandle;
    dirHandle = await window.showDirectoryPicker(this.pickerOpts);
    const isFilePresent = (await dirHandle.resolve(this.newFile))?.includes(
      target
    );
    if (isFilePresent) {
      await dirHandle.removeEntry(target);
      console.log('File removed');
    }
    const files = dirHandle.keys();
    for await (const file of files) {
      console.log(file);
    }
  }
}
