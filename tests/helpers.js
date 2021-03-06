import fs from 'fs';
import { Readable } from 'stream';

import { singleLineString } from 'utils';


export const fakeMessageData = {
  code: 'WHATEVER_CODE',
  description: 'description',
  message: 'message',
};

export function getRuleFiles(ruleType) {
  var ruleFiles = fs.readdirSync(`src/rules/${ruleType}`);

  return ruleFiles.filter((value) => {
    return value !== 'index.js';
  });
}

export function validChromeManifest(contents=[
  'category JavaScript-DOM-class foo bar',
  'category JavaScript-DOM-interface foo bar',
], {includeBoilerplate=true}={}) {
  var rstream = new Readable();
  if (includeBoilerplate === true) {
    rstream.push('content  necko   jar:comm.jar!/content/necko/\n');
  }

  contents.forEach((line) => {
    rstream.push(`${line}\n`);
  });

  rstream.push(null);

  return rstream;
}

export function validHTML(contents='') {
  return singleLineString`<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>A little Add-on</title>
    </head>
    <body>
      ${contents}
    </body>
  </html>`;
}

export function validRDF(contents) {
  return singleLineString`<?xml version='1.0' encoding='utf-8'?>
  <RDF xmlns="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
       xmlns:em="http://www.mozilla.org/2004/em-rdf#">
    <Description about="urn:mozilla:install-manifest">
      ${contents}
    </Description>
  </RDF>`;
}

export function unexpectedSuccess() {
  return assert.fail(null, null, 'Unexpected success');
}
