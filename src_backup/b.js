import aPrint, {aString} from './a.js'

aPrint('b')

setTimeout(() => {
  console.log(aString);
});

export default function bPrint(caller) {
  console.log(`bPrint from ${caller}`);
}