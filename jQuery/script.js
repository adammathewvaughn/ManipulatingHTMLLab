$(function() {
    let counter = 0;
    let frndArray = ["Tom", "Tommy", "Thomas", "Tommison", "Tomlin", "Tammy", "Tameka", "Tam-Tam", "Tamerina", "Tapanga"];
    let firstButton= $("<button>Step 1:</button>");
$('#dom-div').append(firstButton);
$(firstButton).click(function () {
    alert("A Nice Message");
});

$("#hoverdiv").css("height","50px");
$("#hoverdiv").mouseenter(function () {
    $(this).css("background-color","blue"); //tried to combine 
})
$("#hoverdiv").mouseleave(function () {
    $(this).css("background-color",""); 
})

$('#frm').submit(function(e){
    e.preventDefault();
    alert($('input:text').val());
    $('p').append($('input:text').val());
    $('p').click(function () {
        function colorWheel(){
            let rndmclr= '#' + Math.ceil(Math.random()* 16777215).toString(16);
            return rndmclr;
        }

        $('p').css("color", colorWheel);

    });
});

$('#divChanger').click(function(){
    $('<span>Adam </span>').appendTo($('#divToChange'));
});

    $("#frndlstbtn").click(function (){
    let nwlstitem = $("<li></li>");
    let textNode = frndArray[counter];
    nwlstitem.append(textNode);
    nwlstitem.appendTo($("#frndlst"));
    counter++; 
});



















});
