const pangramChecker=(str)=>{
    let totalAlpha="";
    for(let char =97;char<=122;char++){
        totalAlpha = totalAlpha + String.fromCharCode(char);
    }
    console.log(totalAlpha);
    for(let char of totalAlpha){
        if(!str.includes(char))
            return false;   
         }
         return true;
    };