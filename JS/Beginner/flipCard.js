(function (){
    $("#cardBody").hover( function (){
        $(this).css({
            "color": "yellow",
            "transform": "rotateY(180deg)",
            "transition": "transform 2s"
        });
        $(this).text("Back");
    }, function (){
        $(this).css({
            "color": "aliceblue",
            "transform": "revert",
            "transition": "transform 2s"
        });
        $(this).text("Front");
    });

})();