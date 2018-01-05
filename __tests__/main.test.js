/** @flow */

import FileIterator from '../src/FileIterator';
import { buildFile, chunksToString } from './FileTestUtils';
import GcsCompositeUploader from '../src/GcsCompositeUploader';
import UploadOptions from '../src/UploadOptions';

jest.mock('../src/UploaderImpl', () => {
  return function() {
    return {
      uploadChunk: () => {
        return new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
      },
    };
  };
});

describe('file process test', () => {
  beforeAll(async () => {
    jest.resetModules();
  });

  it('file iterator test', async () => {
    const fileContent: string = 'some file content';
    const chunkSize = 2;
    const file = buildFile(chunkSize, fileContent);
    const fileIterator: FileIterator = new FileIterator(file, chunkSize);
    const promises: Array<Promise<any>> = [];
    while (fileIterator.hasNext()) {
      promises.push(fileIterator.next());
    }
    const resultChunks = await Promise.all(promises);
    const chunksCount = Math.ceil(fileContent.length / chunkSize);
    const bytesCount = resultChunks.reduce((acc, { byteLength }) => (acc += byteLength), 0);
    const resultChunksAsString = chunksToString(resultChunks);

    expect(chunksCount).toBe(resultChunks.length);
    expect(bytesCount).toBe(fileContent.length);
    expect(resultChunksAsString).toBe(fileContent);
  });

  it('file uploading', async () => {
    const fileContent: string = 'some file content';
    const chunkSize = 2;
    const options: UploadOptions = new UploadOptions();
    options.chunkSize = chunkSize;
    options.file = buildFile(chunkSize, fileContent);
    options.uploadUrls = Array(chunkSize);

    const uploader = new GcsCompositeUploader(options);
    await uploader.upload();
  });
});

