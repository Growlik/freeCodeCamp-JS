function palindrome(str) {
    str = str.toLowerCase().replace(/\W|_/g,"");
    function reverse(x){
    return x.split("").reverse().join("");
    }
    var str1 = reverse(str);
    var str2 = reverse(str1);
    if(str1==str2)
      {
       return true;
      }
    else
    {return false;
    }  
  
 }

palindrome("eye");