//console.log("hello");
//Bài 1
function tinhtong(number){
    let result = 0;
    for(let i = 1; i<= number; i++){
        result += i;
        console.log(i);
        
    }
    return result;
}
ket_qua = tinhtong(3);
console.log(ket_qua);
//Bài 2
function songuyento(num){
    if (num < 2){
        return false;
    }
    //Vòng lặp từ 2 -> number
    for(let i = 2; i< num; i++){
        if(num%i== 0){
            return false;
        }
    }
    return true;
    //number = 5
    // 2-> 5
    // 5/2
}
let nguyento = 10;
console.log(songuyento(nguyento));
if (songuyento(nguyento)){
    console.log("số", nguyento, "là số nguyên tố");
} else{
    console.log("số", nguyento, "không phải là số nguyên tố");
}