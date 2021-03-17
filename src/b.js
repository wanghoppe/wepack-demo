import aPrint, {aString} from './a.js'

aPrint('b')

export default function bPrint(caller) {
  console.log(`bPrint from ${caller}`);
}

setTimeout(() => console.log(aString))
