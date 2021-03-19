import aPrint from './a.js'

aPrint('b')

export default function bPrint(caller) {
  console.log(`bPrint from ${caller}`);
}

