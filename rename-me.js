alert("JavaScript works!");

    //String Library
    //Does a string follow a 123-456-7890 pattern like a phone number?
    var tele ="937-238-3844";
    var myNumber = Number(tele);
    if (isNAN(myNumber) ) {
        console.log("It's not a number");
    }
    //Does a string follow an aaa@bbb.ccc pattern like an email address?
    
    //Is the string a URL? (Does it start with http: or https:?)
    
    //Title-case a string (split into words, then uppercase the first letter of each word)
    
    /*Given a string that is a list of things separated by a given string, as well as another string separator,
    return a string with the first separator changed to the second: "a,b,c" + "," + "/" ? "a/b/c".*/

    //Number Library
    //Format a number to use a specific number of decimal places, as for money: 2.1 ? 2.10
    
    //Fuzzy-match a number: is the number above or below a number within a certain percent?
    
    //Find the number of hours or days difference between two dates.
    
    //Given a string version of a number such as "42", return the value as an actual Number, such as 42.
    
    //Array Library
    //Find the smallest value in an array that is greater than a given number
    var smallValue;
    smallValue = 99;
    var multipleValues = [99,299,399,599,899];
    multipleValues.min;
    
  
    //ind the total value of just the numbers in an array, even if some of the items are not numbers.
    
    /*Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a"
    + [{a:2},{a:3},{a:1}] ? [{a:1},{a:2},{a:3}].*/