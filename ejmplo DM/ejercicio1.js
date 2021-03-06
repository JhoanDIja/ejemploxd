function elmañor(nina,rae,lol) {
    nina = parseInt(prompt("numero uno"));
    rae = parseInt(prompt("numero segundo"));
    lol = parseInt(prompt("numero tercero"));

    dragoncito = Math.max(nina,rae,lol);
    return dragoncito;
}
elmañor();
document.writeln("el mayor es "+dragoncito);
