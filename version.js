import {readFileSync, writeFileSync} from "fs";

const pkg = JSON.parse(readFileSync("./package.json").toString());

const version = process.argv[2];
pkg.version = version;

writeFileSync("./package.json", JSON.stringify(pkg, null, 2))
