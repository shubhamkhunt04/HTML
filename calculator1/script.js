function result() {

    var i = document.getElementsByTagName("input");
    var str = form.ans.value//assign calculator textbox value(it is string)
    var sum = ""//empty string variable for performing concatination inside the textbox.
    if (i[0].value.includes("sin") == true && i[0].value.indexOf("sin") == 0 && i[0].value.includes("sinh") != true) {//here the 3rd condition is require because if not write 3rd condition then always math.sin call in case of sinh(suppose usr press sinh then call math.sinh so 3rd condition is mandatory)
        for (j = 4; j < str.length; j++) {

            sum = sum + str.charAt(j);//for writing sin(0.5213) in textbox ->In sin(0.5213) string is sin and integer 0.5213 so store value(angle in radian) in sum variable.(note:here all sin 0.5214 consider as string and assign into sum variable)
        }
        //hear the value of sum is resolving and it is string type so conver it in to float type.
        var p = parseFloat(sum);//conver string into float.

        p = p * (3.14159265359 / 180);//conver degree into radian angle
        p = Math.sin(p);//inbuild function 
        return p;//return p, which display the result on textbox
    }

    else if (i[0].value.includes("cos") == true && i[0].value.indexOf("cos") == 0 && i[0].value.includes("cosh") != true) {
        for (j = 4; j < str.length; j++) {

            sum = sum + str.charAt(j);//for writing cos(0.5213) in textbox ->In cos(0.5213) string is sin and integer 0.5213 so store  value(angle in radian) in sum variable.(note:here all sin 0.5214 consider as string and assign into sum variable)
        }
        //hear the value of sum is resolving and it is string type so conver it in to float type.
        var p = parseFloat(sum);//conver string into float.

        p = p * (3.14159265359 / 180);//conver degree into radian angle
        p = Math.cos(p);//inbuild function 
        return p;//return p, which display the result on textbox
    }


    else if (i[0].value.includes("tan") == true && i[0].value.indexOf("tan") == 0 && i[0].value.includes("tanh") != true) {
        for (j = 4; j < str.length; j++) {

            sum = sum + str.charAt(j);//for writing tan(0.5213) in textbox ->In tan(0.5213) string is sin and integer 0.5213 so store value(angle in radian) in sum variable.(note:here all sin 0.5214 consider as string and assign into sum variable)
        }
        //hear the value of sum is resolving and it is string type so conver it in to float type.
        var p = parseFloat(sum);//conver string into float.

        p = p * (3.14159265359 / 180);//conver degree into radian angle
        p = Math.tan(p);//inbuild function 
        return p;//return p, which display the result on textbox
    }

    else if (i[0].value.includes("log") == true && i[0].value.indexOf("log") == 0) {
        for (j = 4; j < str.length; j++) {

            sum = sum + str.charAt(j);//for writing log(2) in textbox ->In log(2) string is log and integer 2 so store in sum variable.
        }
        //hear the value of sum is resolving and it is string type so conver it in to float type.
        var p = parseFloat(sum);//conver string into float.

        p = Math.log(p);//inbuild function 
        p = p / 2.303;
        return p;//return p, which display the result on textbox
    }

    else if (i[0].value.includes("sinh") == true && i[0].value.indexOf("sinh") == 0) {
        for (j = 4; j < str.length; j++) {

            sum = sum + str.charAt(j);//Example:-for writing sinh(2) in textbox ->In sinh(2) string is sinh and integer is  2 so split both value and store value in sum variable.(note:here all sinh(2) consider as string and assign into sum variable)
        }
        //hear the value of sum is resolving and it is string type so conver it in to float type.
        var p = parseFloat(sum);//conver string into float.

        p = Math.sinh(p);//inbuild function 
        return p;//return p, which display the result on textbox
    }

    else if (i[0].value.includes("cosh") == true && i[0].value.indexOf("cosh") == 0) {
        for (j = 4; j < str.length; j++) {

            sum = sum + str.charAt(j);//Example:-for writing cosh(2) in textbox ->In cosh(2) string is sinh and integer is  2 so split both value and store value in sum variable.(note:here all sinh(2) consider as string and assign into sum variable)
        }
        //hear the value of sum is resolving and it is string type so conver it in to float type.
        var p = parseFloat(sum);//conver string into float.

        p = Math.cosh(p);//inbuild function 
        return p;//return p, which display the result on textbox
    }

    else if (i[0].value.includes("tanh") == true && i[0].value.indexOf("tanh") == 0) {
        for (j = 4; j < str.length; j++) {

            sum = sum + str.charAt(j);//Example:-for writing tanh(2) in textbox ->In tanh(2) string is sinh and integer is  2 so split both value and store value in sum variable.(note:here all tanh(2) consider as string and assign into sum variable)
        }
        //hear the value of sum is resolving and it is string type so conver it in to float type.
        var p = parseFloat(sum);//conver string into float.

        p = Math.tanh(p);//inbuild function 
        return p;//return p, which display the result on textbox
    }

    else {
        var p = eval(form.ans.value);//inbuild function for solving mathamatical expression.
        return p;//return p, which display the result on textbox
    }
}
