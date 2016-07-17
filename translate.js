function translateText(direction) {
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

    // set up defaults
    var output = "";
    var capslock = 0; // boolean for CAPS LOCK

    // get input from textarea
    var input = document.getElementById("input").value;

    // direction is passed to this function from clicked radio button
//alert(directions[direction]);

    // iterate over input string and append to output string
    for (var index = 0, len = input.length; index < len; index++) {
//      alert(input[index]);
        var letter = input[index];
        switch (letter) { // special cases
            case " ":
                var substitution = space[directions[direction]];
                break;
            default: // otherwise just use the variable name from the alphabetic letter
                var substitution = eval(letter.toLowerCase())[directions[direction]];
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

// get list of radio buttons with name 'translate'
var translate = document.forms['translate'].elements['translation'];

// loop through list
for (var index=0, len=translate.length; index<len; index++) {
    translate[index].onclick = function() { // assign onclick handler function to each
        // call translate function with chosen cardinal direction
        console.log(this.value);
        translateText(this.value);
    };
};




