
const moduleLoader = {
  'a.js': (module) => {
    // export
    module.exports.default = aPrint;
    // import
    const B_MODULE = myImport('b.js');
    // code
    B_MODULE.default('a')
    function aPrint(caller) {
      console.log(`aPrint from ${caller}`);
    }
  },
  'b.js': (module) => {
    // export
    module.exports.default = bPrint;
    // import 
    const A_MODULE = myImport('a.js');
    // code 
    A_MODULE.default('b');
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