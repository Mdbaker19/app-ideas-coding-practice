$(document).ready(function(){
   const area = $("#borderBox");
   const inputTL = $("#borderTL");
   const inputTR = $("#borderTR");
   const inputBL = $("#borderBL");
   const inputBR = $("#borderBR");
   const width = $("#width");
   const height = $("#height");
   const applySize = $("#applySize");
   const finalize = $("#applyAllValues");
   const cssToCopy = $("#cssToCopy");

   inputTL.on("input", function (){
       let amount = $(this).val();
       area.css("borderTopLeftRadius", `${amount}px`);
   });
    inputTR.on("input", function (){
        let amount = $(this).val();
        area.css("borderTopRightRadius", `${amount}px`);
    });
    inputBL.on("input", function (){
        let amount = $(this).val();
        area.css("borderBottomLeftRadius", `${amount}px`);
    });
    inputBR.on("input", function (){
        let amount = $(this).val();
        area.css("borderBottomRightRadius", `${amount}px`);
    });
    applySize.on("click", function (){
       area.css({
           "width": width.val(),
           "height": height.val()
       }) ;
    });
    finalize.on("click", function (){
        cssToCopy.text(`width: ${width.val()}px;
                                height: ${height.val()}px;
                                border-top-left-radius: ${inputTL.val()}px;
                                border-top-right-radius: ${inputTR.val()}px;
                                border-bottom-right-radius: ${inputBR.val()}px;
                                border-bottom-left-radius: ${inputBL.val()}px;`);
    });
});