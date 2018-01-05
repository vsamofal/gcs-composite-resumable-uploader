/** @flow */

export default class UploadOptions {
  file: any;
  chunkSize: number;
  uploadUrls: Array<string>;
  contentType: string;
  executorsCount: 4;
  onProgress: (progress: number) => void;
  onUploadFinished: () => void;
  chunksCount(): number {
    return Math.ceil(this.file.size / this.chunkSize);
  }

  constructor() {
    this.onUploadFinished = () => {};
  }
}
