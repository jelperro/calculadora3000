function calcular(){
    let res = document.getElementById('res');
    
    let not1 = document.getElementById('not1').value;
    let not2 = document.getElementById('not2').value;
    let not3 = document.getElementById('not3').value;
    let not4 = document.getElementById('not4').value;
    console.log(not1, not2, not3, not4);

    let per1 = document.getElementById('per1').value;
    let per2 = document.getElementById('per2').value;
    let per3 = document.getElementById('per3').value;
    let per4 = document.getElementById('per4').value;
    console.log(per1, per2, per3, per4);


    let sum1 = parseFloat(not1) * parseFloat(per1);
    let sum2 = parseFloat(not2) * parseFloat(per2);
    let sum3 = parseFloat(not3) * parseFloat(per3);
    let sum4 = parseFloat(not4) * parseFloat(per4);
    console.log(sum1, sum2, sum3, sum4);

    let sumtot = (sum1 + sum2 + sum3 + sum4)/1000;

    res.innerHTML = sumtot;
    
}