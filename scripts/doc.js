/**
 * documentation generation script
 */
const fs = require("fs");
const {exec} = require("child_process");


function generateDoc() {
    const doc_file = './doc/fire-once.jsdoc.md';
    exec(`node ./node_modules/jsdoc-to-markdown/bin/cli.js --files ./src/fire-once/fire-once.js > ${doc_file}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
        }
        beautifyDoc(doc_file);
    });
}

function beautifyDoc(file) {
    const kind_line_regex = /^[\n\r]\*\*Kind[^\n\r]*[\n\r]/gms;
    const arrow_right_char_regex = /⇒/g;
    let data = fs.readFileSync(file, 'utf-8').toString();
    data = data.replace(kind_line_regex,'');
    data = data.replace(arrow_right_char_regex,'&rarr;');
    fs.writeFileSync(file, data, 'utf-8');
}

console.log("Generate documentation ...");
generateDoc();

