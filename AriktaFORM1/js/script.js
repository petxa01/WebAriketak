function argazkiaAnderea() {
 document.getElementById("argazkia").setAttribute("class", "borde argazkia-emakumea mb-3");

}
function argazkiaGizona() {
    document.getElementById("argazkia").setAttribute("class", "borde argazkia-gizona mb-3");

}
function bidali(){
    let gizona;
    let izena;
    let abizena;
    let helbidea;
    let hiria;
    let liburuak;
    let pelikulak;
    const elm=document.getElementById("emaitza")

    gizona = document.getElementById("gizona").checked;
    izena = document.getElementById("izena").value;
    abizena = document.getElementById("abizena").value;
    helbidea = document.getElementById("helbidea").value;
    hiria = document.getElementById("hiria").value;
    liburuak = document.getElementById("liburuak").checked;
    pelikulak = document.getElementById("pelikulak").checked;
    elm.innerHTML="";
    if (gizona) {
        let newElement = document.createElement('p');
        newElement.innerHTML = '<p>Kaixo gizon</p>';
        elm.innerHTML.appendChild(newElement);​​​​​​​​​​​​​​​​
    }else{
        let newElement = document.createElement('p');
        newElement.innerHTML = '<p>Kaixo andere</p>';
        elm.innerHTML.appendChild(newElement);​​​​​​​​​​​​​​​​
    }
    let newElement = document.createElement('p');
    newElement.innerHTML = '<p>'+ izena + ' '+abizena+ ' deitzen zara. Zure Helbidea '+helbidea+ ' da. Zure hiria '+hiria+' da.</p>';
    elm.innerHTML.appendChild(newElement);​​​​​​​​​​​​​​​​
    if (liburuak) {
        let newElement = document.createElement('p');
        newElement.innerHTML = '<p>Liburuak gustatzen zaizkizu</p>';
        elm.innerHTML.appendChild(newElement);​​​​​​​​​​​​​​​​
    }
    if (pelikulak) {
        let newElement = document.createElement('p');
        newElement.innerHTML = '<p>Pelikulak gustatzen zaizkizu</p>';
        elm.innerHTML.appendChild(newElement);​​​​​​​​​​​​​​​​
    }
}