/** @flow */

import { put } from 'axios';
import { Uploader } from './Uploader';
import UploadOptions from './UploadOptions';

export default class UploaderImpl implements Uploader {
  options: UploadOptions;

  constructor(options: UploadOptions) {
    this.options = options;
  }
  uploadChunk(url: string, chunk: ArrayBuffer): Promise<any> {
    const headers = {
      'content-type': this.options.contentType,
    };
    return new Promise((resolve, reject) => {
      return put(url, chunk, { headers, onUploadProgress: this.options.onProgress }).then(resolve).catch(reject);
    });
  }
}
