/** @flow */

import UploadOptions from './UploadOptions';

interface Uploader {
  -options: UploadOptions;
  uploadChunk: (url: string, chunk: ArrayBuffer) => boolean;
}

