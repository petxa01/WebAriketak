function ArrayIrakurri() {
   let liburuak = [
       {titulua:"El señor de los anillos", autorea:"J. R. R. Tolkien", irakurrita:true},
       {titulua:"Eragon", autorea:"Christopher Paolini", irakurrita:true},
       {titulua:"Juego de tronos", autorea:" George R. R. Martin", irakurrita:false}
       ];
    let mezua = "";
    for (let i = 0; i < liburuak.length; i++) {
        if (liburuak[i].irakurrita) {
            mezua += "Liburu hau irakurrita daukazu "+ liburuak[i].titulua + " "+ liburuak[i].autorea+ "\n"
        }else{
            mezua += "Liburu hau ez duzu irakurri "+ liburuak[i].titulua + " "+ liburuak[i].autorea+ "\n"
        }
    }
    return mezua;
}