function konprobatu() {
let probintzia=document.getElementById("probintzia");
let emaitza=document.getElementById("emaitza");
let herriak=[];
let mezua="<select id=\"hiria\" onchange=\"konprobatu()\">" +
    "<option selected >-</option>";

if (probintzia.value==="Gipuzkoa") {
    herriak=["Donosti", "Getaria","Mutriku","Eibar", "Tolosa"];

}else if (probintzia.value === "Araba") {
    herriak=["Gazteiz","Amurrio","La Guardia", "Oyón"];
}else if (probintzia.value==="Bizkaia") {
    herriak=["Bilbo", "Gernika", "Durango", "Ermua", "Ondarroa", "Lekeitio"];
}
    for (let i = 0; i <herriak.length ; i++) {
        mezua+="<option>"+herriak[i] +"</option>";
    }
    mezua+="</option>";
    emaitza.innerHTML=mezua;
}