/** @flow */

import UploadOptions from './UploadOptions';

export interface Uploader {
  options: UploadOptions;
  uploadChunk(url: string, chunk: ArrayBuffer): Promise<any>;
}
