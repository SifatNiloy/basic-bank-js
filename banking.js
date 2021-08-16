
// handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newdepositAmount = depositInput.value;


    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newdepositAmount);
    depositTotal.innerText = newDepositTotal;



    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + parseFloat(newdepositAmount);
    balanceTotal.innerText = newBalanceTotal;


    //clear the deposit input field

    depositInput.value = '';
});

//handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('Withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    //update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawTotalText = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(previouswithdrawTotalText);
    withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount;

    //update balance after withdraw

    const balanceTotal= document.getElementById('balance-total');
    const balanceTotalText= balanceTotal.innerText;
    const previousBalanceTotal= parseFloat(balanceTotalText);

    balanceTotal.innerText= previousBalanceTotal - withdrawAmount; 
    //clear withdraw Input

    withdrawInput.value = '';

})