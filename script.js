
var app = new Vue({
    el: '#app',
    data: {
        lugar_de_la_bola:0,
        path_bola:"https://images.vexels.com/media/users/3/129511/isolated/preview/5418382309628b5b70b71b44c8f06f85-bola-de-boliche-by-vexels.png",
        path_x:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/OSXLeopard.svg/245px-OSXLeopard.svg.png",
        path_0:"https://media.istockphoto.com/photos/inverted-green-plastic-cup-picture-id178360140?k=6&m=178360140&s=612x612&w=0&h=Sk5vYI4j0OGhqdeX6ENq1Y27qdC-QwjqorLAvLpQJs4=",
        path_1:"https://media.istockphoto.com/photos/inverted-green-plastic-cup-picture-id178360140?k=6&m=178360140&s=612x612&w=0&h=Sk5vYI4j0OGhqdeX6ENq1Y27qdC-QwjqorLAvLpQJs4=",
        path_2:"https://media.istockphoto.com/photos/inverted-green-plastic-cup-picture-id178360140?k=6&m=178360140&s=612x612&w=0&h=Sk5vYI4j0OGhqdeX6ENq1Y27qdC-QwjqorLAvLpQJs4=",
        path_vaso:"https://media.istockphoto.com/photos/inverted-green-plastic-cup-picture-id178360140?k=6&m=178360140&s=612x612&w=0&h=Sk5vYI4j0OGhqdeX6ENq1Y27qdC-QwjqorLAvLpQJs4="
    },
    methods:{

        randomizar:function(){
            this.path_0=this.path_vaso;
            this.path_1=this.path_vaso;
            this.path_2=this.path_vaso;
            var num = Math.round(Math.random() *2);
            this.lugar_de_la_bola=num


        },
        mostrar_bola:function(){
            if(this.lugar_de_la_bola==0){
                this.path_0=this.path_bola;
                this.path_1=this.path_x;
                this.path_2=this.path_x;
            }
            if(this.lugar_de_la_bola==1){
                this.path_1=this.path_bola
                this.path_0=this.path_x;
                this.path_2=this.path_x;
            }
            if(this.lugar_de_la_bola==2){
                this.path_0=this.path_x;
                this.path_1=this.path_x;
                this.path_2=this.path_bola
            }
        },
        jugar:function(pos){

            if(this.lugar_de_la_bola==pos){
                alert("Ganaste")
            }else{

                alert("Perdiste, la bola esta en el vaso "+(this.lugar_de_la_bola+1))
            }
            this.mostrar_bola();
        }
    }
})

