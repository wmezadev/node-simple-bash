module.export = {
    date: function () {
        process.stdout.write(Date)();
    },
    pwd: function() {
        process.stdout.write(process.env.PWD);
    }
}