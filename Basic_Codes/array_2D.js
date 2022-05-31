
//2 dimentional array

function highestRunScore(playersInfo){
    var maxScorer = playersInfo[0][0];
    var maxScore = playersInfo[0][1];

    for(var x = 1; x < playersInfo.length ; x++){
        if(maxScore < playersInfo[x][1]){
            maxScore = playersInfo[x][1];
            maxScorer = playersInfo[x][0];
        }
    }
    return maxScorer;
}

var playersInfo = [
    ["Al Mamun",95],
    ["Sabbir",25],
    ["Asif",45],
    ["Robi",105],
];

var playerName = highestRunScore(playersInfo);
document.write(playerName);