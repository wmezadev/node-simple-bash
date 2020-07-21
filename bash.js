const commands = require('./commands/index.js');

function validateCommand(command){
    const arr = Object.keys(commands);
    return arr.findIndex(element => element === command) >= 0; 
}

 // Output un prompt
 process.stdout.write('prompt > ');
 // El evento stdin 'data' se dispara cuando el user escribe una línea
 process.stdin.on('data', function (data) {
   let cmd = data.toString().trim(); // remueve la nueva línea

   const cmdList = cmd.split(" ");
   let firstCmd =  cmdList[0];
   cmdList.shift();
   let params = cmdList.join(" ");

   if(validateCommand(firstCmd)) {
       commands[firstCmd](params);
   } else {
       process.stdout.write("Commando inválido. \n");
       process.stdout.write('prompt > ');
   }

});