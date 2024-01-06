document.querySelector(".createfile").addEventListener("click",function(){
    dnone();
    document.querySelector("#Newcreatefile").style.display = "initial"
})
document.querySelector(".createfolder").addEventListener("click",function(){
    dnone();
    document.querySelector("#Newcreatefolder").style.display = "initial"
})
function dnone(){
    document.querySelector("#Newcreatefolder").style.display = "none"
    document.querySelector("#Newcreatefile").style.display = "none"
}
window.addEventListener("keydown",function(dets){
    if(dets.keyCode === 27){
        dnone();
    }
})

document.querySelector(".files").addEventListener("click",function(dets){
    if(dets.target.id == 'renamepen'){
        document.querySelector(".overlay").style.display = "flex";
        document.querySelector("#rename").value=`${dets.target.dataset.filename}`;
        document.querySelector(".overlay form").setAttribute("action",`/rename/${dets.target.dataset.filename}`)
    }
})

document.querySelector(".overlay form i").addEventListener("click",function(){
    document.querySelector(".overlay").style.display = "none"

})


