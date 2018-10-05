function Konparatu (zenbaki1, zenbaki2){
    if(zenbaki1 > zenbaki2){
        var gehiketa = zenbaki1 + zenbaki2;
        var kenketa = zenbaki1 - zenbaki2;
        var mezua = "batuketa: " + gehiketa + " kenketa: "+ kenketa;
    }else{
        var biderketa = zenbaki1 * zenbaki2;
        var zatiketa = zenbaki1 / zenbaki2;
        var mezua = "biderketa: " + biderketa + " zatiketa: "+ zatiketa;
    }
    return mezua;
}