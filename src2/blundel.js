const MODULE = {
  'a.js': (module, myImport) => {


    module.exports = new Proxy({}, {
      get(_, prop, )
    })
    // const target = {
    //   'aPrint': () => aPrint,
    //   'aString': () => aString
    // }
    module.exports.default = aPrint;
    module.exports.aString = aString;
    const B_MODULE = myImport('b.js')

    B_MODULE.default('a')

    function aPrint(caller) {
      console.log(`aPrint from ${caller}`);
    }
    var aString = 'aString';
  },
  'b.js': (module, myImport) => {
    module.exports.default = bPrint;
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