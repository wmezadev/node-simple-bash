fs = require('fs');

module.exports = {
    date: function() {
        process.stdout.write(Date());
        process.stdout.write("\nprompt > ");
    },
    pwd: function() {
        process.stdout.write(process.env.PWD);
        process.stdout.write("\nprompt > ");
    },
    ls: function() {
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
        });
    },
    echo: function (data) {
        if(data){
            process.stdout.write(data);
        } else {
            process.stdout.write("nada que imprimir");
        }
        process.stdout.write("\nprompt > ");
    }
}