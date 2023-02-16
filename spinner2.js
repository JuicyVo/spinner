const spin = ['|','/','-', '\\']
for (let i=0; i < spin.length; i++) {

setTimeout(() => {
  process.stdout.write(`\r ${spin[i]}`)
},300 * i )
}