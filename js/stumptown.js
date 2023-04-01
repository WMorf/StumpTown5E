
function GatherData()
{
    // var x = document.getElementById("")

    //Info
    var charName = document.getElementById("charName");
    var charClass = document.getElementById("charClass");
    var charLVL = document.getElementById("charLVL");

    //Stats
    var charS = document.getElementById("charStrength");
    var charP = document.getElementById("charPerception");
    var charE = document.getElementById("charEndurance");
    var charC = document.getElementById("charCharisma");
    var charI = document.getElementById("charIntelligence");
    var charA = document.getElementById("charAgillity");
    var charL = document.getElementById("charLuck");

    //Placeholder to hold results
    var statDump = document.getElementById("statDump");
    statDump.innerHTML = charName + charClass + charLVL + "<br>"
    + charS + charP + charE + charC + charI + charA + charL;
}