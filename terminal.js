//var og = document.getElementById("og");
//var lines = document.getElementById("lines");
var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");
var commands = [];
var git = 0;
var pw = false;
let pwd = false;

setTimeout(function() {
    loopLines(banner, "", 80);
    textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

//init
textarea.value="";
command.innerHTML = textarea.value;

function enterKey(e) {
    if (e.keyCode == 181) {
        document.location.reload(true);
    }
    if (e.keyCode == 13) {
        commands.push(command.innerHTML);
        git = commands.length;
        addEventListener('guest:clarkprojects ~ $ ' + command.innerHTML, 'no-animation', 0);
        commander(command.innerHTML.toLowerCase());
        command.innerHTML = "";
        textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
        git -= 1;
        textarea.value = commands[git];
        command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != command.length) {
        git += 1;
        if (commands[git] == undefined) {
            textarea.value = "";
        } else {
            textarea.value = commands[git];
        }
        command.innerHTML = textarea.value;
    }
}

function commander(cmd) {
    switch (cmd.toLowerCase()) {
        case 'help': 
            help;
            break;
        case 'about':
            about;
            break;
        case 'marathons':
            marathons;
            break;
        case 'knitting':
            knitting;
            break;
        case 'art':
            art;
            break;
        case 'baking':
            baking;
            break;
        case 'plants':
            plants;
            break;
        case 'unspecified':
            unspecified;
            break;
    }
}