import path from "path";
import { fileURLToPath } from "url";

const res1 = path.basename("./ltsn/package.json");
console.log("res1: ", res1);
// package.json
const res2 = path.basename("./ltsn/package.json", ".json");
console.log("res2: ", res2);
// package

const res3 = path.dirname("/usr/bin/data/package.json");
console.log("res3: ", res3);

const res4 = path.extname("/usr/bin/data/package.json");
console.log('res4: ', res4);
const address = process.cwd()
console.log('address: ', address);

const address1 = path.resolve();
console.log('address1: ', address1);

const __filename = fileURLToPath(import.meta.url);
console.log('__filename: ', __filename);

const __dirname = path.dirname(__filename);
console.log('__dirname: ', __dirname);
