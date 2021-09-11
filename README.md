# lib6 -- A Utility Library for Deno

## example

File: fs1.js

```js
import * as L from 'https://deno.land/x/lib6/mod.ts'

console.log(await L.dirList('..'))
```

## run

```
$ deno run -A fs1.js
Check file:///C:/ccc/code/deno/lib/dlib6/example/fs1.js
[
  { name: ".gitignore", isFile: true, isDirectory: false, isSymlink: false },
  { name: "example", isFile: false, isDirectory: true, isSymlink: false },  
  { name: "LICENSE", isFile: true, isDirectory: false, isSymlink: false },  
  { name: "mod.ts", isFile: true, isDirectory: false, isSymlink: false },   
  { name: "README.md", isFile: true, isDirectory: false, isSymlink: false },  { name: "src", isFile: false, isDirectory: true, isSymlink: false }       
]
```
