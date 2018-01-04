/** @flow */

class UploadOptions {
  file: any;
  chunkSize: number;
  uploadUrls: Array<string>;
  contentType: string;
  onProgress: (progress: number) => void;
}
