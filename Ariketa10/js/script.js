function soldataAldatu(soldata, antzinatasuna) {
        if (soldata<500 && antzinatasuna>10) {
            return soldata*1.20;
        }else if (soldata <500 && antzinatasuna<10){
            return soldata*1.10
        }else{
            return soldata
        }

}