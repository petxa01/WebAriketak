function zenbatDigitu(zenbaki1) {
    if (zenbaki1 < 0) {
        return zenbaki1 + " " + (zenbaki1.toString().length - 1) + " digitu ditu ";
    }else {
        return zenbaki1 + " " + zenbaki1.toString().length + " digitu ditu ";
    }



}