/*
A very simplistic scheme, which was used at one time to encode information, is
to rotate the characters within an alphabet and rewrite them.

It has been decided by Insecure Inc. to develop a product that “improves” upon
this scheme by first reversing the entire string and then rotating it.

Rotations are to be performed using the alphabet order.
*/

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
                'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '_', '.'];

var rotations = prompt() * 1;
while(rotations != 0){
    var message = prompt();
    message = message.split("").reverse();
    var newMessage = "";
    for(var i = 0; i < message.length; i++){
        var index = alphabet.indexOf(message[i]);
        if(index + rotations > alphabet.length){
            newMessage = newMessage + alphabet[index + rotations - alphabet.length];
        }
        else{
            newMessage = newMessage + alphabet[index + rotations];
        }
    }
    console.log(newMessage);
    rotations = prompt() * 1;
}
