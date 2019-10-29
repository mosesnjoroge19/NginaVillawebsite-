var collection = [];
var i = 0;
//delay timer
var timer= 3000;

collection[0] = 'Pictures/IMAG1002.jpg';
collection[1] = 'Pictures/IMAG1005.jpg';
collection[2] = 'Pictures/IMAG1008.jpg';
collection[3] = 'Pictures/IMAG1009.jpg';
collection[4] = 'Pictures/IMAG1011.jpg';
collection[5] = 'Pictures/IMAG1018.jpg';
collection[6] = 'Pictures/IMAG1020.jpg';
collection[7] = 'Pictures/IMAG1023.jpg';
collection[8] = 'Pictures/IMAG1022.jpg';
collection[9] = 'Pictures/IMAG1027.jpg';
collection[10] = 'Pictures/IMAG0988.jpg';
collection[11] = 'Pictures/IMAG0986.jpg';
collection[12] = 'Pictures/IMAG0981.jpg';

function showcase(){
    document.slide.src = collection[i];

    if(i < collection.length-1){
        i++;
    }else{
        i=0;
    }
    setTimeout("showcase()",timer);
};
window.onLoad = showcase();