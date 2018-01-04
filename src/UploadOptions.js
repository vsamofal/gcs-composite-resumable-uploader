/** @flow */

export default class UploadOptions {
  file: any;
  chunkSize: number;
  uploadUrls: Array<string>;
  contentType: string;
  onProgress: (progress: number) => void;
}
