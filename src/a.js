import bPrint from './b.js'

bPrint('a')

export default function aPrint(caller) {
  console.log(`aPrint from ${caller}`);
}

export const aString = 'aString';
