class Player{
    constructor (){
        this.name=null;
        this.distance=0
this.index=0
    }
getCount(){
    var playerRef=database.ref ('playerCount')
    playerRef.on('value',(data)=>{
        playerCount=data.val()
    })
}
update(){
    var playerIndex = "Players/player"+ this.index
database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance
})
}
updateCount(count){
    database.ref('/').update({
      playerCount:count  
    })
}
static getPlayerInfo(){
    var playerRef=database.ref("Players")
    playerRef.on("value",(data)=>{
allPlayers=data.val()
    })
}
}