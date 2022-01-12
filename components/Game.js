AFRAME.registerComponent("game-play",{
    schema:{
        elementID:{type:"string",default:"#ring1"}
    },
    update:function(){
        this.isCollided(this.data.elementID)
    },

    isCollided:function(elementID){
        const element=document.querySelector(elementID)
        element.addEventListener("collide",(e)=>{
            if(elementID.includes("#ring")){
                console.log(elementID+"collide")
            }
            else if(elementID.includes("#hudle")){
                console.log(elementID+"collide")
            }
        })
    }

})
