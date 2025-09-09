// save this file as show-tsconfig.ts
import * as ts from 'typescript';
import * as path from 'path';

// Caminho para a pasta do seu projeto
const projectDir = path.resolve('./');

// Encontra o tsconfig.json
const configFileName = ts.findConfigFile(
  projectDir,
  ts.sys.fileExists,
  "tsconfig.json"
);

if (!configFileName) {
  console.error("Não foi possível encontrar tsconfig.json");
  process.exit(1);
}

// Lê o tsconfig.json
const configFile = ts.readConfigFile(configFileName, ts.sys.readFile);

if (configFile.error) {
  console.error("Erro ao ler tsconfig.json:", configFile.error.messageText);
  process.exit(1);
}

// Analisa e resolve todas as opções
const parsedConfig = ts.parseJsonConfigFileContent(
  configFile.config,
  ts.sys,
  projectDir
);

// Mostra todas as opções de compilador
console.log("Compiler Options:");
console.log(parsedConfig.options);

// Mostra quais arquivos serão incluídos
console.log("\nArquivos incluídos no build:");
console.log(parsedConfig.fileNames);
