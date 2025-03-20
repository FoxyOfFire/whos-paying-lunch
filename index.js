var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {

    var randomNumber = Math.floor(Math.random()*names.length);
    return names[randomNumber] + " is paying for lunch today!";

}

whosPaying(names);
