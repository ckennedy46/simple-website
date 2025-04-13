//var og = document.getElementById("og");
//var lines = document.getElementById("lines");
var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");
var commands = [];
var git = 0;
//var pw = false;
//let pwd = false;

setTimeout(function() {
     textarea.focus();
 }, 100);

window.addEventListener("keyup", enterKey);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
    if (e.keyCode == 181) {
        document.location.reload(true);
    }
    if (e.keyCode == 13) {
        commands.push(command.innerHTML);
        git = commands.length;
        addLine('guest:clarkeprojects ~ $ ' + command.innerHTML, 'no-animation', 0);
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
            loopLines(help, "color2 margin", 80);
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
        default:
            addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
            break;
    }
}

function addLine(text, style, time) {
    var t = "";
    for (let i = 0 ; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            t += "&nbsp;&nbsp;";
            i++;
        } else {
            t += text.charAt(i);
        }
    }
    setTimeout(function() {
        var next = document.createElement("p");
        next.innerHTML = t;
        next.className = style;

        before.parentNode.insertBefore(next, before);

        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

function loopLines(name, style, time) {
    name.forEach(function(item, index) {
        addLine(item, style, index * time);
    })
}