
const moduleLoader = {
  'a.js': (module) => {
    // export
    const exports = {
      default: () => aPrint,
      aString: () => aString,
    }
    module.exports = new Proxy(exports, {
      get(target, prop) { return target[prop]() }
    })
    // import
    const B_MODULE = myImport('b.js');
    // code
    B_MODULE.default('a')

    function aPrint(caller) {
      console.log(`aPrint from ${caller}`);
    }

    const aString = 'aString';
  },
  'b.js': (module) => {
    // export
    const exports = {
      default: () => bPrint,
    }
    module.exports = new Proxy(exports, {
      get(target, prop) { return target[prop]() }
    })
    // import 
    const A_MODULE = myImport('a.js');
    // code 
    A_MODULE.default('b');

    setTimeout(() => {
      console.log(A_MODULE.aString);
    });

    function bPrint(caller) {
      console.log(`bPrint from ${caller}`);
    }
  },
}

const moduleMap = {};

function myImport(moduleId) {
  const cachedModule = moduleMap[moduleId];
  if (cachedModule) {
    return cachedModule.exports
  }
  const module = moduleMap[moduleId] = {
    exports: {}
  }
  moduleLoader[moduleId](module);
  return module.exports;
}

myImport('a.js')