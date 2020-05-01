$(document).ready(function () {


    var calc = $('.calculator');
    var calcDisplay = calc.find('.calculator__display');
    var calcKeys = calc.find('.calculator__key');
    var calcButton = calc.find('.calculator__button');
    var calcClear = calc.find('.calculator__clear');
    var calcEqual = calc.find('.calculator__key--equal');
    var calcPower = calc.find('.calculator__power');
    var calcSpace = calc.find('.calculator__backspace');

    function checkOperatorRepeat(expression) {
        if (!expression) {
            return true;
        }

            const expressionWithoutSpaces = expression.split(' ').join('');
            if(expressionWithoutSpaces.length < 2) {
                return true;
            }

            const length = expressionWithoutSpaces.length;
            const lastSymbol = expressionWithoutSpaces[length - 1];
            const prelastSymbol = expressionWithoutSpaces[length - 2];


            return lastSymbol !== prelastSymbol || !(/[\/*\-+.]/.test(lastSymbol));
        }


        calcDisplay.on('keydown', (event) => {

            const arithmeticPattern = /^[1-9\-][0-9\/*\-+. ]*$/;
            const key = event.key;
            if (key === 'Enter') {
                calcEqual.click();
                return true;
            }
            const value = `${calcDisplay.val()}${key}`;

            return key === 'ArrowLeft' || key === 'ArrowRight' || key === 'Delete' || key === 'Backspace'
                // должен работать и паттерн и проверка на повторку
                || arithmeticPattern.test(value) && checkOperatorRepeat(value);
        });

        // INIT CALC KEYS
        calcKeys.each(function () {
            var current = $(this).attr('value');
            $(this).text(current);
        });

        // ADD NUMBERS TO INPUT
        calcButton.on('click', function () {
            const value = calcDisplay.val() + $(this).attr('value');
            if (checkOperatorRepeat(value)) {
                calcDisplay.val(value);
            }
        });


        // CLEAR INPUT
        calcClear.on('click', function () {
            calcDisplay.val('');
        });

        // SHOW RESULT
        calcEqual.on('click', function () {
            calcDisplay.val(eval(calcDisplay.val()));
        });

        // POWER BUTTON
        calcPower.on('click', function () {
            calcDisplay.val(Math.pow(calcDisplay.val(), 3));
        });

        // BACKSPACE BUTTON
        calcSpace.on('click', function () {
            calcDisplay.val(calcDisplay.val().substring(0, calcDisplay.val().length - 1));
        });
    });

