function argazkiaAnderea() {
 document.getElementById("argazkia").setAttribute("class", "borde argazkia-emakumea mb-3 erdiratu");

}
function argazkiaGizona() {
    document.getElementById("argazkia").setAttribute("class", "borde argazkia-gizona mb-3 erdiratu");

}
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
}

function balidatu() {
    let izena;
    let abizena;
    let helbidea;
    let hiria;
    izena = document.getElementById("izena").value;
    abizena = document.getElementById("abizena").value;
    helbidea = document.getElementById("helbidea").value;
    hiria = document.getElementById("hiria").value;
    if (izena.trim()!==""){
        if (abizena.trim() !== "") {
            if(helbidea.trim()!== ""){
                if (hiria !== "Aukeratu...") {
                    document.getElementById("bidali").disabled=false;
                }
                else {
                    document.getElementById("bidali").disabled=true;
                }
            }else {
                document.getElementById("bidali").disabled=true;
            }
        }else {
            document.getElementById("bidali").disabled=true;
        }
    } else {
        document.getElementById("bidali").disabled=true;
    }
}