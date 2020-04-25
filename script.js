$(document).ready(function () {


    var calc = $('.calculator');
    var calcDisplay = calc.find('.calculator__display');
    var calcKeys = calc.find('.calculator__key');
    var calcButton = calc.find('.calculator__button');
    var calcClear = calc.find('.calculator__clear');
    var calcEqual = calc.find('.calculator__key--equal');
    var calcPower = calc.find('.calculator__power');
    var calcSpace = calc.find('.calculator__backspace');



    // INIT CALC KEYS
    calcKeys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });

    // ADD NUMBERS TO INPUT
    calcButton.on('click', function () {
        calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
    });


    // CLEAR INPUT
    calcClear.on('click', function () {
        calcDisplay.val('');
    });

    // SHOW RESULT
    calcEqual.on('click', function () {
        calcDisplay.val( eval( calcDisplay.val() ));
    });

    // POWER BUTTON
    calcPower.on('click', function () {
        calcDisplay.val( Math.pow( calcDisplay.val(), 3 ) );
    });

    // BACKSPACE BUTTON
    calcSpace.on('click', function () {
        calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
    });

    $('.calculator__button_plus').one('click',function(){

        $('.calculator__button_plus').off('click');
    });

    $('.calculator__button_minus').one('click',function(){

        $('.calculator__button_minus').off('click');
    });

    $('.calculator__button_multiplication').one('click',function(){

        $('.calculator__button_multiplication').off('click');
    });

    $('.calculator__button_division').one('click',function(){

        $('.calculator__button_division').off('click');
    });

    $('.calculator__button__point').one('click',function(){

        $('.calculator__button__point').off('click');
    });


});
