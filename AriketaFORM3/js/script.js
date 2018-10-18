
function erakutsi(){
    let gizona;
    let izena;
    let abizena;
    let helbidea;
    let hiria;
    let liburuak;
    let pelikulak;
    var kataia=" ";
    const emaitza=document.getElementById("emaitza");

    gizona = document.getElementById("gizona").checked;
    izena = document.getElementById("izena").value;
    abizena = document.getElementById("abizena").value;
    helbidea = document.getElementById("helbidea").value;
    hiria = document.getElementById("hiria").value;
    liburuak = document.getElementById("liburuak").checked;
    pelikulak = document.getElementById("pelikulak").checked;
    if (gizona) {
        kataia+="<p>Kaixo gizon</p>";
    }else{
        kataia+="<p>Kaixo andere</p>";
    }
    kataia+="<p>"+ izena + " " + abizena + " deitzen zara. Zure Helbidea "+ helbidea + " da. Zure hiria "+ hiria + " da.</p>";
    if (liburuak) {
        kataia+="<p>Liburuak gustatzen zaizkizu</p>";
    }
    if (pelikulak) {
        kataia+="<p>Pelikulak gustatzen zaizkizu</p>";
    }
    emaitza.innerHTML=kataia;
}
function hustu(){
    document.getElementById("emaitza").innerHTML="";
    document.getElementById("emaitza").setAttribute("class", "");
    document.getElementById("radioA").innerHTML="";
    document.getElementById("radioIzena").innerHTML="";
    document.getElementById("radioAbizena").innerHTML="";
    document.getElementById("radioHelbidea").innerHTML="";
    document.getElementById("radioHiria").innerHTML="";
    document.getElementById("radioIkasketak").innerHTML="";
    document.getElementById("izena").setAttribute("class", "form-control col-9");
    document.getElementById("abizena").setAttribute("class", "form-control col-9");
    document.getElementById("helbidea").setAttribute("class", "form-control col-9");

}

function balidatuBotoia() {
    let jauna;
    let anderea;
    let izena;
    let abizena;
    let helbidea;
    let hiria;
    let daw;
    let dam;
    let asir;
    let baliozkoa=true;
    let mezua="<h6>oharra . Zure datuak balidatu dira</h6>";
    jauna = document.getElementById("gizona").checked;
    anderea = document.getElementById("anderea").checked;
    izena = document.getElementById("izena").value;
    abizena = document.getElementById("abizena").value;
    helbidea = document.getElementById("helbidea").value;
    hiria = document.getElementById("hiria").value;
    console.log(hiria);
    daw = document.getElementById("daw").checked;
    dam = document.getElementById("dam").checked;
    asir = document.getElementById("asir").checked;
    if (!jauna && !anderea) {
        mezua+= "<p>(*) Ez duzu generorik aukeratu</p>"
        baliozkoa=false;
    }
    if (izena.trim()===""){
        mezua+= "<p>(*) Ez duzu izenik sartu</p>"
        baliozkoa=false;
    }
    if (abizena.trim()===""){
        mezua+= "<p>(*) Ez duzu abizenik sartu</p>"
        baliozkoa=false;
    }
    if (helbidea.trim()===""){
        mezua+= "<p>(*) Ez duzu helbiderik sartu</p>"
        baliozkoa=false;
    }
    if (hiria==="Aukeratu..."){
        mezua+= "<p>(*) Ez duzu hirik aukeratu</p>"
        baliozkoa=false;
    }
    if (!daw && !dam && !asir){
        mezua+= "<p>(*) Ez duzu ikasketarik aukeratu</p>"
        baliozkoa=false;
    }
    if (baliozkoa) {
        alert("Se ha realizado la validacion del formulario y se procede al envio del formulario")
    }
    else {
        document.getElementById("emaitza").innerHTML=mezua;
        document.getElementById("emaitza").setAttribute("class", "borde fondo-horia")
    }

}
function balidatu() {
    let jauna;
    let anderea;
    let izena;
    let abizena;
    let helbidea;
    let hiria;
    let daw;
    let dam;
    let asir;
    let baliozkoa = true;
    let mezua = "<h6>oharra . Zure datuak balidatu dira</h6>";
    jauna = document.getElementById("gizona").checked;
    anderea = document.getElementById("anderea").checked;
    izena = document.getElementById("izena").value;
    abizena = document.getElementById("abizena").value;
    helbidea = document.getElementById("helbidea").value;
    hiria = document.getElementById("hiria").value;
    daw = document.getElementById("daw").checked;
    dam = document.getElementById("dam").checked;
    asir = document.getElementById("asir").checked;
    console.log(jauna);
    console.log(anderea)
    if (!jauna && !anderea) {
        mezua += "<p>(*) Ez duzu generorik aukeratu</p>";
        baliozkoa= false;
        document.getElementById("radioA").innerHTML="*";
    }else {
        document.getElementById("radioA").innerHTML="";
    }
    if (izena.trim() === "") {
        mezua += "<p>(*) Ez duzu izenik sartu</p>";
        baliozkoa= false;
        document.getElementById("izena").setAttribute("class", "form-control col-9 borde-gorria");
        document.getElementById("radioIzena").innerHTML="*";

    }
    else{
        document.getElementById("izena").setAttribute("class", "form-control col-9");
        document.getElementById("radioIzena").innerHTML="";
    }
    if (abizena.trim() === "") {
        mezua += "<p>(*) Ez duzu abizenik sartu</p>";
        baliozkoa= false;document.getElementById("abizena").setAttribute("class", "form-control col-9 borde-gorria")
        document.getElementById("radioAbizena").innerHTML="*";
    }
    else{
        document.getElementById("abizena").setAttribute("class", "form-control col-9");
        document.getElementById("radioAbizena").innerHTML="";
    }
    if (helbidea.trim() === "") {
        mezua += "<p>(*) Ez duzu helbiderik sartu</p>";
        baliozkoa= false;document.getElementById("helbidea").setAttribute("class", "form-control col-9 borde-gorria");
        document.getElementById("radioHelbidea").innerHTML="*";
    }
    else{
        document.getElementById("helbidea").setAttribute("class", "form-control col-9");
        document.getElementById("radioHelbidea").innerHTML="";
    }
    if (hiria === "Aukeratu...") {
        mezua += "<p>(*) Ez duzu hirik aukeratu</p>";
        baliozkoa= false;
        document.getElementById("radioHiria").innerHTML="*";
    }else{
        document.getElementById("radioHiria").innerHTML="";
    }
    if (!daw && !dam && !asir) {
        mezua += "<p>(*) Ez duzu ikasketarik aukeratu</p>";
        baliozkoa= false;
        document.getElementById("radioIkasketak").innerHTML="*";
    }else {
        document.getElementById("radioIkasketak").innerHTML="";
    }
    if (baliozkoa) {
        document.getElementById("emaitza").innerHTML = "";
        document.getElementById("emaitza").setAttribute("class", "");
    }else{
        document.getElementById("emaitza").innerHTML = mezua;
        document.getElementById("emaitza").setAttribute("class", "borde fondo-horia");
    }
}