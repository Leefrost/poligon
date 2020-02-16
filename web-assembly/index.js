let squarer;

function loadWebAssembly(fileName) {
  return fetch(fileName)
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.compile(buffer))
    .then(module => {return new WebAssembly.Instance(module) });
};
  
loadWebAssembly('https://github.com/Leefrost/poligon/blob/master/web-assembly/wasm/square.wasm')
  .then(instance => {
    squarer = instance.exports._Z7squarei;
    console.log('Finished compiling! Ready when you are...');
  }); 