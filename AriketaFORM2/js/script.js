function erakutsi() {
    let mezua="";
    const izena= document.getElementById("izena").value;
    const abizena= document.getElementById("abizena").value;
    const emaila= document.getElementById("emaila").value;
    mezua += "izena: " + izena + "\n";
    mezua += "abizena: " + abizena +  "\n";
    let checkboxElementuak=[];
    let elementuak=document.getElementsByTagName("input");
    for (let i=0; i<elementuak.length; i++)
    {
        if (elementuak[i].type == "checkbox")
        {
            if (elementuak[i].checked)
            {
                checkboxElementuak.push(elementuak[i].value)
            }
        }
    }
     mezua += "gustatzen zaiizkizun animaliak: " + checkboxElementuak + "\n";
    mezua += "emaila: " + emaila;
    alert(mezua);
}