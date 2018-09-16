module.exports = function longestConsecutiveLength(array) {
  var count = 1;
    var par = 0;
    var i = 0;
    var double = 0;
    array.sort(function (a, b) { return a - b })

    for (i; i < array.length; i++) {
        var t = array[i];
        
        if (array[i] + 1 == array[i + 1]) {
            count++;
        }
        if(array[i] == array[i + 1]){
            count++;
            double++;
        }

        if(array[i] + 1 != array[i + 1] && array[i] != array[i + 1] ) {
          count = count - double;
            if (par <= count) {
                par = count;
                
            }
            count = 1;
            double = 0;
        }
    }




    return par;

}
