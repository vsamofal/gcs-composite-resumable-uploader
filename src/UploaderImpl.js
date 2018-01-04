/** @flow */

import { put } from 'axios';
import Uploader from './Uploader';
import UploadOptions from './UploadOptions';

class UploaderImpl implements Uploader {
  constructor(options: UploadOptions) {
    this.options = options;
  }

  async uploadChunk(url: string, chunk: ArrayBuffer): boolean {
    const headers = {
      'content-type': this.options.contentType
    };
    put()
    this.options.onProgress(10);
    console.log(chunk);
    return true;
  }
}
