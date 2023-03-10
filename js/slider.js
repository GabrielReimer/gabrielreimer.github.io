

window.onload = $("#radio2").prop("checked", true);

var px = 1280;

$("#jsOff").hide();
$("#right").show();
$("#left").show();
$("#radiobox").show();


$("#right").click(function(){

    px+=640;
    check();
    $("#images").animate({
    right:"+=640",

    }, 1500, function(){
    if (px>1920) {
        px -= 1920;
        check();
        $("#images").css("right", "-=1920px")
    }

    console.log(px);
    });
});

$("#left").click(function(){

    px-=640;
    check()

    $("#images").animate({
    right:"-=640",
    }, 1500, function(){
    if (px<640) {
        px += 1920;
        check()
        $("#images").css("right", "+=1920px")
    }

    console.log(px);
    });
});

$("#radio1").click(function() {

if(px == 1280){
    $("#images").animate({
    right:"640",
    }, 1000, function(){
    px=640;
    });
}
if(px == 1920){
    $("#images").animate({
    right:"640",
    }, 2000, function(){
    px=640;
    });
}

});

$("#radio2").click(function() {

$("#images").animate({
    right:"1280",
}, 1000, function(){
    px=1280;
});

});

$("#radio3").click(function() {

    if(px == 640){
    $("#images").animate({
        right:"1920",
    }, 2000, function(){
        px=1920;
    });
    }

    if (px == 1280) {
    $("#images").animate({
        right:"1920",
    }, 1000, function(){
        px=1920;
    });
    }

});

function check(){

    if(px==640){
    $("#radio1").prop("checked", true);
    }
    if(px==1280){
    $("#radio2").prop("checked", true);
    }
    if(px==1920){
    $("#radio3").prop("checked", true);
    }

}
