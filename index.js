const fs = require(`fs/promises`);

const modelLeArquivo = async () => {
  const valor = await fs.readFile(`text.txt`, `utf8`);
  return valor;
}

const controllerLeArquivo = () => {
  const promiseQueFoiRetornadaDoModelLeArquivo = modelLeArquivo();
  return promiseQueFoiRetornadaDoModelLeArquivo.then(valor => `|${valor}|`);
}

const run = async ()=> {
  const aPromessaQueMeFoiDada = controllerLeArquivo();
  console.log(`Impressao logo apos recebimento: `, aPromessaQueMeFoiDada);
  
  setTimeout(console.log, 100, `Impressao do setTimeout`, (await aPromessaQueMeFoiDada).slice(-10));

  await aPromessaQueMeFoiDada;
  console.log(`Impressao apos await: `, aPromessaQueMeFoiDada);
}

run();
