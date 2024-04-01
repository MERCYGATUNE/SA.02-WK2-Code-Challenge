//   WRITE A FUNCTION THAT ACCEPTS A STRING AS INPUT AND SWAPS THE CASSE OF EACH CHARACTER
//  THE FUCTION SHOULD INPUT 'The Quick Brown Fox' and output 'tHE qUICK bROWN fOX'




function swapCase(str){


    let result = [];
    // Iterate through each string

    for( let i=0; i<str.length; i++)
    // Check if string is in uppercase

    if(str[i]= str[i].toUppercase())
    {
    // Convert string from uppercase to lowercase
     result.push(str[i].toLowercase())
    //  Check if string is in lowercase

    }else if(str[i]=str[i].toLowercase())
    {
    // Convert string from lowercase to uppercase
    result.push(str[i].toUppercase());
    }
     else
     { result.push(str[i]);

     }
     return result.join('');
}
//    OUTPUT EXPECTED
    console.log(result.jon(''));
