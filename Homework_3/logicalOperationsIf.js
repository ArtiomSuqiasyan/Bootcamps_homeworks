//Example 1
if(age < 14 || age > 90){

}

//Example 2
if(!(age >= 14 && age <= 90)){
    
}

//Next tasl
if (-1 || 0) alert( 'first' ); //alerted, because -1 is a truthy
if (-1 && 0) alert( 'second' ); //not alerted, because 0 is falsy
if (null || -1 && 1) alert( 'third' ); // alerted, because -1 && 1 returned 1, 1 is a truthy