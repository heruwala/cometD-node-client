Command Timeline

Don't worry about secret, it is just my trailhead org OAuth token

```
DHeruwala@SOLDELW10LP68 MINGW64 /d/Node/CometD
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (cometd) cometd-client
version: (1.0.0)
description: A cometD client to subscribe to Salesforce platform event
entry point: (index.js)
test command:
git repository:
keywords:
author: Dhaval Heruwala
license: (ISC)
About to write to D:\Node\CometD\package.json:

{
  "name": "cometd-client",
  "version": "1.0.0",
  "description": "A cometD client to subscribe to Salesforce platform event",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Dhaval Heruwala",
  "license": "ISC"
}


Is this OK? (yes)

DHeruwala@SOLDELW10LP68 MINGW64 /d/Node/CometD
$ node .
Hello!

DHeruwala@SOLDELW10LP68 MINGW64 /d/Node/CometD
$

DHeruwala@SOLDELW10LP68 MINGW64 /d/Node/CometD
$ npm install cometd-nodejs-client
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN cometd-client@1.0.0 No repository field.

+ cometd-nodejs-client@1.1.0
added 9 packages from 5 contributors and audited 14 packages in 7.137s
found 0 vulnerabilities


DHeruwala@SOLDELW10LP68 MINGW64 /d/Node/CometD
$ npm install cometd
npm WARN cometd-client@1.0.0 No repository field.

+ cometd@5.0.0
updated 1 package and audited 15 packages in 2.619s
found 0 vulnerabilities


DHeruwala@SOLDELW10LP68 MINGW64 /d/Node/CometD
$ node .

DHeruwala@SOLDELW10LP68 MINGW64 /d/Node/CometD
$ node .
{ schema: 'sjmVBtucrsea8vlDjK1kHA',
  payload:
   { SOQL__c: 2,
     CreatedById: '0051U000001gQq7QAE',
     Data__c:
      '2020-04-29 22:30:38.412/n1:MyClass.methodA (DML 2,SQL 2)/n2:MyClass.methodB (DML 1)/n3:Doing something/n2:MyClass.methodC (SQL 1)/n2:Doing something else',
     CreatedDate: '2020-04-29T22:30:38Z',
     DML__c: 2,
     Title__c: 'MyClass.methodA' },
  event: { replayId: 1601584 } }
{ schema: 'sjmVBtucrsea8vlDjK1kHA',
  payload:
   { SOQL__c: 2,
     CreatedById: '0051U000001gQq7QAE',
     Data__c:
      '2020-04-29 22:31:39.741/n1:MyClass.methodA (DML 2,SQL 2)/n2:MyClass.methodB (DML 1)/n3:Doing something/n2:MyClass.methodC (SQL 1)/n2:Doing something else',
     CreatedDate: '2020-04-29T22:31:39Z',
     DML__c: 2,
     Title__c: 'MyClass.methodA' },
  event: { replayId: 1601585 } }
  ```