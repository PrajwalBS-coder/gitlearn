
    var depth = 42;
    //your code goes here
    var d=0;
    var c=0;
    /*for(i=1;i<=7;i++)
    {
        d=(7+d)-2;
        if(d>)

    }
    do{
         d=(7+d)-2;
        c=c+1;
    }while(d<=depth);
    console.log(c)
    
    while(d<=depth)
    {
         d=(7+d)-2;
        c=c+1;
    }
    console.log(c)
*/

   i=0;
for (; depth > 0;) {
    i++;
   
    depth -= 7
    if (depth > 0) {
        depth += 2
    }
}
console.log(i);
