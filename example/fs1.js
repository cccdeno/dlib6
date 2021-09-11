// import * as D from 'https://deno.land/x/dlib6/mod.ts'
import * as D from '../mod.ts'

console.log(await D.dirList('..'))
console.log(await D.readFile('./fs1.js'))
