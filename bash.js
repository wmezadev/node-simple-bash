const commands = require('./commands/index.js');

process.stdin.on('data', function (data) {
  var cmd = data.toString().trim();
  commands[cmd]()
  process.stdout.write('\nprompt > ');
});