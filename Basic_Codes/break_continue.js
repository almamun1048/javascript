// break and continue

//find prime  number among 1 to 100
var count =0,i,j;
for(i=1; i<=100; i++){
    for(j=1; j<=i; j++){
        if(i%j == 0){
            count++;
        }
    }
    if(count == 2){
        document.write(i+" ");
    }
    count = 0;
}
document.write("<br/>");
// print which are divided by 3 among 1 to 100
var k;
for(k=1;k<=100;k++){
    if(k%3==0){
        document.write(k+" ");
        continue;
    }
}