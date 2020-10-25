function exercise2() {
    var imagenes=document.images;
    var enlaces=document.links;
    console.log("Hay: "+imagenes.length+" imagenes.");
    console.log("la primera imagen tiene el id:"+imagenes[0].id);
    console.log("Hay: "+enlaces.length +" enlaces en el documento");
    document.title="Jose es muy apa;ado, yo un poco menos";
}