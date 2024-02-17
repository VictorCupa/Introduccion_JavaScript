console.log('metodos');
//metodos de propiedad
const reproductorMusica={
    reproducir: function(id){
        console.log(`reproduciendo la cancion ${id}`);
    },
    pausando: function(){
        console.log( 'pausando cancion ...');
    },
    playCancion: function(id){
        console.log(`reproduciendo la cancion con id ${id}`);
    },
    playList:function(nombre){
        console.log(`play list ${nombre} activa`)
    }
}
reproductorMusica.reproducir(3156);
reproductorMusica.pausando();
reproductorMusica.playCancion(56546);
reproductorMusica.playList('VIC 587');
