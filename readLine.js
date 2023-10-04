const readLine = require('node:readline');
const { stdin: input, stdout: output} = require('node:process');

const rl = readLine.createInterface({input, output})

rl.question('favorite food?', function(answer){
  console.log(`${answer}로 대답했습니다.`)
  rl.close();
});


