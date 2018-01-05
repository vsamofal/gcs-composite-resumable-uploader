/** @flow */

import FileProcessor from './FileProcessor';
import { NoSuchElementException } from './Exceptions';

export default class FileIterator {
  file: any;
  currentIndex: number;
  fileProcessor: FileProcessor;
  lastProcessed: boolean;

  constructor(file: any, chunkSize: number) {
    this.file = file;
    this.fileProcessor = new FileProcessor(file, chunkSize);
    this.currentIndex = 0;
    this.lastProcessed = false;
  }

  isLastChunk(): boolean {
    const endIndex = this.fileProcessor.getEndIndex(this.currentIndex);
    return endIndex === this.file.size;
  }

  hasNext(): boolean {
    return !this.lastProcessed;
  }

  async next(): Promise<ArrayBuffer> {
    if (this.hasNext()) {
      if (this.isLastChunk()) {
        this.lastProcessed = true;
      }
      const chunk = this.fileProcessor.retrieveChunk(this.currentIndex);
      this.currentIndex += 1;
      return chunk;
    }
    throw new NoSuchElementException(`There is no elements more for file  ${this.file.name}`);
  }
}
