function zenbatIkasle(lista) {
    let haundiagoa=0;
    let txikiagoa=0;
    let totala=0;
    for (let i = 0; i < lista.length; i++) {
        totala+=lista[i];
        if (lista[i] >= 1300) {
            haundiagoa++;
        }else{
            txikiagoa++;
        }
    }
    return haundiagoa + " languile daude 1300 baino gehiago dutenak, eta "+ txikiagoa+ " languile 1300 baino gutxiago dutenak. "
        + totala + " gastatzen du empresak soldatan"

}