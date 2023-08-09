const { stdout } = require('process');
const { Readable } = require('stream');

const inStream = new Readable({
  read() {}
});

inStream.push('ABCDEF');
inStream.push('123456');

inStream.push(null);

inStream.pipe(process.stdout);