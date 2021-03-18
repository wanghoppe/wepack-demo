const MODULE = {
  'a.js': (module, myImport) => {

    const target = {
      'default': () => aPrint,
      'aString': () => aString
    }
    module.exports = new Proxy(
      target, {
        get(target, prop) {
          return target[prop]()
        }
      }
    )

    const B_MODULE = myImport('b.js')

    B_MODULE.default('a')

    function aPrint(caller) {
      console.log(`aPrint from ${caller}`);
    }
    var aString = 'aString';
  },
  'b.js': (module, myImport) => {
    module.exports = new Proxy(
      {
        default: () => bPrint
      },
      {get(target, prop) {
        return target[prop]()
      }}
    );
    const A_MODULE = myImport('a.js')

    A_MODULE.default('b')

    function bPrint(caller) {
      console.log(`bPrint from ${caller}`);
    }
    setTimeout(() => console.log(A_MODULE.aString));
  }
}

const moduleMap = {}

function myImport(moduleId) {
  const cachedModule = moduleMap[moduleId];
  if (cachedModule) {
    return cachedModule.exports;
  }
  const module = { exports: {} };
  moduleMap[moduleId] = module;
  MODULE[moduleId](module, myImport);
  return module.exports;
}

myImport('a.js')