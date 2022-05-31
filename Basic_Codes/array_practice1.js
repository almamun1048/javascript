// find highestScore

function highestScore(scoreArray){
    var max=scoreArray[0];
    for(var i = 1; i < scoreArray.length; i++){
        if(max < scoreArray[i]){
            max = scoreArray[i];
        }
    }
    return max;
}

var scroces = [8,9,34,66,45,88,47,2,3,4];

var result = highestScore(scroces);

document.write("Highest Score :" + result +"<br/>");





//mininum score
function minimumScore(scoresArray){
    var min = scoresArray[0];
    for(var i = 1; i < scoresArray.length; i++){
        if(min > scoresArray[i]){
            min = scoresArray[i];
        }
    }
    return min;
}

var scroce = [8,9,34,66,45,88,47,2,3,4];

var result = minimumScore(scroce);

document.write("Minimum Score :" + result);