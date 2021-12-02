var array = [1, 5, 2, 6, 9 ,10,];

function burbuja(array) {
    var i, j, aux;
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    return array;
}   
console.log(burbuja(array));