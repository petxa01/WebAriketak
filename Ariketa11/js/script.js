function zenbatIkasle(lista) {
    let haundiagoa=0;
    let txikiagoa=0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] >= 7) {
            haundiagoa++;
        }else{
            txikiagoa++;
        }
    }
    return haundiagoa + " ikasle daude 7 baino gehiago dutenak, eta "+ txikiagoa+ " ikasle 7 baino gutxiago dutenak"

}