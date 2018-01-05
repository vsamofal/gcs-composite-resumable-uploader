/** @flow*/

import str2ab from 'string-to-arraybuffer';
import ab2str from 'arraybuffer-to-string';

function buildFile(chunkSize: number, content: string): any {
  const fileBuffer: ArrayBuffer = str2ab(content);
  return {
    fileBuffer,
    slice: (start, end) => fileBuffer.slice(start, end),
    size: content.length,
  };
}

function chunksToString(chunks: Array<ArrayBuffer>): string {
  return chunks.reduce((acc, chunk) => (acc += ab2str(chunk)), '');
}

export {
  buildFile,
  chunksToString,
};
