// while loop

// print 1 to 10
var i =1;
while(i <= 5){
    document.write(i + " ");
    i++;
}
document.write("<br/>");
// 1+2+3+.....+10 = ?
var j =1,sum = 0;
while(j <= 10){
    if(j == 10)
    {
        document.write(j + " = ");
        sum = sum + j;
        break;
    }
    document.write(j + " + ");
    sum = sum + j;
    j++;
}
document.write(sum + "<br/>print number which are divided by 3 and 5 among 1 to 100 <br/>");

//do while loop
// print these number which are divided by 3 and 5 among 1 to 100
var k = 1;
do{
    if(k % 5 == 0)
    {
        document.write(k + "  ");
    }
    k++;
}
while(k <= 100);