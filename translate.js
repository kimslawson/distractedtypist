function inArray(needle,haystack)
{
    var count=haystack.length;
    for(var i=0;i<count;i++)
    {
        if(haystack[i]===needle){return true;}
    }
    return false;
}

function translateText(leftdirection, rightdirection) {
    /* array indices for accessing by cardinal direction */
    var directions = { nw: 0, n: 1, ne: 2, 
                       w: 3, none: 4, e: 5, 
                       sw: 6, s: 7, se: 8 }

    // cardinal direction translations as arrays per key
    var a = [ 'tab','q','w',
              'caps lock','a','s',
              'left shift','z','x'];
    var b = [ 'f','g','h',
              'v','b','n',
              ' ',' ',' '];
    var c = [ 's','d','f',
              'x','c','v',
              '',' ',' '];
    var d = [ 'w','e','r',
              's','d','f',
              'x','c','v'];
    var e = [ '2','3','4',
              'w','e','r',
              's','d','f'];
    var f = [ 'e','r','t',
              'd','f','g',
              'c','v','b'];
    var g = [ 'r','t','y',
              'f','g','h',
              'v','b','n'];
    var h = [ 't','y','u',
              'g','h','j',
              'b','n','m'];
    var i = [ '7','8','9',
              'u','i','o',
              'j','k','l'];
    var j = [ 'y','u','i',
              'h','j','k',
              'n','m',','];
    var k = [ 'u','i','o',
              'j','k','l',
              'm',',','.'];
    var l = [ 'i','o','p',
              'k','l',';',
              ',','.','/'];
    var m = [ 'h','j','k',
              'n','m',',',
              ' ',' ',''];
    var n = [ 'g','h','j',
              'b','n','m',
              ' ',' ',' '];
    var o = [ '8','9','0',
              'i','o','p',
              'k','l',';'];
    var p = [ '9','0','-',
              'o','p','[',
              'l',';','\''];
    var q = [ '`','1','2',
              'tab','q','w',
              'caps lock','a','s'];
    var r = [ '3','4','5',
              'e','r','t',
              'd','f','g'];
    var s = [ 'q','w','e',
              'a','s','d',
              'z','x','c'];
    var t = [ '4','5','6',
              'r','t','y',
              'f','g','h'];
    var u = [ '6','7','8',
              'y','u','i',
              'h','j','k'];
    var v = [ 'd','f','g',
              'c','v','b',
              ' ',' ',' '];
    var w = [ '1','2','3',
              'q','w','e',
              'a','s','d'];
    var x = [ 'a','s','d',
              'z','x','c',
              '','',' '];
    var y = [ '5','6','7',
              't','y','u',
              'g','h','j'];
    var z = [ 'caps lock','a','s',
              'shift','z','x',
              '','',' '];
    var space = [ ' ',' ',' ',
                  ' ',' ',' ',
                  ' ',' ',' '];
    var backtick = [ '','','',
                     '','`','1',
                     '','tab','q'];
    var one = [ '','','',
                '`','1','2',
                'tab','q','w'];
    var two = [ '','','',
                '1','2','3',
                'q','w','e'];
    var three = [ '','','',
                  '2','3','4',
                  'w','e','r'];
    var four = [ '','','',
                 '3','4','5',
                 'e','r','t'];
    var five = [ '','','',
                 '4','5','6',
                 'r','t','y'];
    var six = [ '','','',
                '5','6','7',
                't','y','u'];
    var seven = [ '','','',
                  '6','7','8',
                  'y','u','i'];
    var eight = [ '','','',
                  '7','8','9',
                  'u','i','o'];
    var nine = [ '','','',
                 '8','9','0',
                 'i','o','p'];
    var zero = [ '','','',
                 '9','0','-',
                 'o','p','['];
    var minus = [ '','','',
                  '0','-','=',
                  'p','[',']'];
    var equals = [ '','','',
                   '-','=','backspace',
                   '[',']','\\'];
    var leftbracket = [ '0','-','=',
                        'p','[',']',
                        ';','\'','enter'];
    var rightbracket = [ '-','=','backspace',
                         '[',']','\\',
                         '\'','enter','enter'];
    var backslash = [ '=','backspace','',
                      ']','\\','',
                      'enter','enter',''];
    var semicolon = [ 'o','p','[',
                      'l',';','\'',
                      '.','/','shift'];
    var tick = [ 'p','[',']',
                 ';','\'','enter',
                 '/','shift','shift'];
    var comma = [ 'j','k','l',
                  'm',',','.',
                  ' ','',''];
    var period = [ 'k','l',';',
                   ',','.','/',
                   '','',''];
    var slash = [ 'l',';','',
                   '.','/','shift',
                   '','',''];

    // group keys by side of keyboard; space belongs to neither (or is it both? #deepthoughts)
    var lefties = [ '`','1','2','3','4','5',
                    'tab','q','w','e','r','t',
                    'caps lock','a','s','d','f','g',
                    'left shift','z','x','c','v','b'];
    var righties = [ '6','7','8','9','0','-','=','backspace',
                     'y','u','i','o','p','[',']','\\',
                     'h','j','k','l',';','\'','enter',
                     'n','m',',','.','/','right shift'];

    // set up defaults
    var output = "";
    var capslock = 0; // boolean for CAPS LOCK

    // get input from textarea
    var input = document.getElementById("input").value;

    // iterate over input string and append to output string
    for (var index = 0, len = input.length; index < len; index++) {
//      alert(input[index]);
        var letter = input[index];

        // is letter on the left or right hand side of keyboard?
        // i.e., to which hand does it belong?
        // set translation direction accordingly
        if (inArray(letter, lefties)) {
            var direction = leftdirection;
        } else if (inArray(letter, righties)) {
            var direction = rightdirection;
        } else {
            console.log("neither!!");
        }
        console.log(direction);

        switch (letter) { // special cases
            case " ":
                var substitution = space[direction];
                break;
            case "`":
                var substitution = backtick[direction];
                break;
            case "1":
                var substitution = one[direction];
                break;
            case "2":
                var substitution = two[direction];
                break;
            case "3":
                var substitution = three[direction];
                break;
            case "4":
                var substitution = four[direction];
                break;
            case "5":
                var substitution = five[direction];
                break;
            case "6":
                var substitution = six[direction];
                break;
            case "7":
                var substitution = seven[direction];
                break;
            case "8":
                var substitution = eight[direction];
                break;
            case "9":
                var substitution = nine[direction];
                break;
            case "0":
                var substitution = zero[direction];
                break;
            case "-":
                var substitution = minus[direction];
                break;
            case "=":
                var substitution = equals[direction];
                break;
            case "[":
                var substitution = leftbracket[direction];
                break;
            case "]":
                var substitution = rightbracket[direction];
                break;
            case "\\":
                var substitution = backslash[direction];
                break;
            case ";":
                var substitution = semicolon[direction];
                break;
            case "\'":
                var substitution = tick[direction];
                break;
            case ",":
                var substitution = comma[direction];
                break;
            case ".":
                var substitution = period[direction];
                break;
            case "/":
                var substitution = backslash[direction];
                break;
            case (letter.match(/^[A-Za-z]$/) || {}).input:
                // just a letter, carry on, nothing to see here.
                // case regex matching from http://stackoverflow.com/a/18881169/1821016
                var substitution = eval(letter.toLowerCase())[direction];
                break;
            default: // otherwise just pass the character through unchanged
                var substitution = letter;
        }
        switch (substitution) { // special cases
            case "caps lock": // toggle the case until next time
                var capslock = !capslock;
                break;
            default: // otherwise just pass along the value of the indexed variable
                if (capslock)
                    output += substitution.toUpperCase(); 
                else
                    output += substitution;
        }
    }

    // set output textarea from translated string
    document.getElementById("output").value = output;
}

// get list of radio buttons with name 'translate' - left hand
var translate = document.forms['translate'].elements['translation'];
// get list of radio buttons with name 'translate2' - right hand
var translate2 = document.forms['translate'].elements['translation2'];

// loop through list of radio buttons
// first the left
for (var index=0, len=translate.length; index<len; index++) {
    translate[index].onclick = function() { // assign onclick handler function to each

        // change text in result area based on which button was clicked
        document.getElementById("lefthandkeys").innerHTML = this.getAttribute("data-keys");

        // check left hand buttons first
        for (var indexinner=0, leninner=translate.length; indexinner<leninner; indexinner++) {
            if (translate[indexinner].checked) {
                var translateindex = indexinner; // remember that which is left
            }
        }
        // then check right hand buttons
        for (var indexinner=0, leninner=translate2.length; indexinner<leninner; indexinner++) {
            if (translate2[indexinner].checked) {
                var translate2index = indexinner; // and also that which is right
            }
        }

        // call translate function with chosen cardinal directions
//console.log(this.value);
//console.log(translateindex);
//console.log(translate2index);
        translateText(translateindex, translate2index);
    };
};
// then the right
for (var index=0, len=translate2.length; index<len; index++) {
    translate2[index].onclick = function() { // assign onclick handler function to each

        // change text in result area based on which button was clicked
        document.getElementById("righthandkeys").innerHTML = this.getAttribute("data-keys");

        // check left hand buttons first
        for (var indexinner=0, leninner=translate.length; indexinner<leninner; indexinner++) {
            if (translate[indexinner].checked) {
                var translateindex = indexinner; // remember that which is left
            }
        }
        // then check right hand buttons
        for (var indexinner=0, leninner=translate2.length; indexinner<leninner; indexinner++) {
            if (translate2[indexinner].checked) {
                var translate2index = indexinner; // and also that which is right
            }
        }

        // call translate function with chosen cardinal directions
//console.log(this.value);
//console.log(translateindex);
//console.log(translate2index);
        translateText(translateindex, translate2index);
    };
};




