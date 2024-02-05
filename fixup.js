import {cp, rm, writeFile} from "fs";

cp("./dist/mjs/index.d.ts", "./dist/index.d.ts", () => {
    rm("dist/*/index.d.ts", {force: true, recursive: true}, () => {
        writeFile("./dist/cjs/package.json", `{ "type": "commonjs" }`, ()=>{});
        writeFile("./dist/mjs/package.json", `{ "type": "module" }`, ()=>{});
    });
});
