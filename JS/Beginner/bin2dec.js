$(document).ready(function (){
    const invalid = "23456789abcdefghijklmnopqrstuvwxyz";
    $("#compile").on("click", function (){
        let answer = $("#output");
        let input = $("#input").val();
        let output = 0;
        let base = 1;
        if(input.length < 1){
            answer.text("Input a binary sequence");
        }else {
            for (let i = input.length-1; i >= 0; i--) {
                if(invalid.includes(input[i].toLowerCase())){
                    answer.text("invalid input detected");
                    return false;
                } else {
                    let num = parseFloat(input[i]);
                    if(num < 1){
                     num*=1;
                    }else {
                        num *= base;
                    }
                    output+=num;
                    base*=2;
                }
            }
            answer.text(output);
        }
    });
});