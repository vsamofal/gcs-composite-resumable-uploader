/** @flow */

export default class FileProcessor {
  chunkSize: number;
  file: any;

  constructor(file: any, chunkSize: number) {
    this.chunkSize = chunkSize;
    this.file = file;
  }
  retrieveChunk(chunkIndex: number): ArrayBuffer {
    const startIndex: number = this.getStartIndex(chunkIndex);
    const endIndex: number = this.getEndIndex(chunkIndex);
    return this.file.slice(startIndex, endIndex);
  }

  getEndIndex(chunkIndex: number): number {
    const { size } = this.file;
    const endIndex = this.chunkSize * (chunkIndex + 1);
    return endIndex > size ? size - 1 : endIndex;
  }

  getStartIndex(chunkIndex: number): number {
    return this.chunkSize * chunkIndex;
  }
}
