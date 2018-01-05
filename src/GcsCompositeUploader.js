/** @flow */

import PromisePool from '@mixmaxhq/promise-pool';
import UploadOptions from './UploadOptions';
import FileIterator from './FileIterator';
import UploaderImpl from './UploaderImpl';
import { Uploader } from './Uploader';

export default class GcsCompositeUploader {
  options: UploadOptions;
  constructor(options: UploadOptions) {
    this.options = options;
  }

  async upload(): Promise<void> {
    const pool: PromisePool = new PromisePool(this.options.executorsCount);
    const fileIterator: FileIterator = new FileIterator(this.options.file, this.options.chunkSize);
    const uploader: Uploader = new UploaderImpl(this.options);

    for (let i = 0; i < this.options.chunksCount(); ++i) {
      await pool.start(async () => {
        const fileData = await fileIterator.next();
        await uploader.uploadChunk(this.options.uploadUrls[i], fileData);
        console.log(`processed ${i}`)
      }, i);
    }
    await pool.flush();
    this.options.onUploadFinished();
  }
}
