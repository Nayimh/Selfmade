document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('depositInput');
    const depositAmount = depositInput.value;

    const currentDeposit = document.getElementById('totalDeposit');
    const newDepositeAmount = parseFloat(currentDeposit.innerText) + parseFloat(depositAmount);

    currentDeposit.innerText = newDepositeAmount;

    // balance update
    const totalBalance = document.getElementById('totalBalance');
    const currentBalance = totalBalance.innerText;
    // const previusBalance = parseFloat(currentBalance);

    const newTotalBalance = parseFloat(currentBalance) + parseFloat(depositAmount);

    totalBalance.innerText = newTotalBalance;




    depositInput.value = ' ';
})


document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdrawInput');
    const withdrawAmount = withdrawInput.value;

    const currentWithdraw = document.getElementById('totalWithdraw');
    const newWithdrawAmount = parseFloat(currentWithdraw.innerText) + parseFloat(withdrawAmount);

    currentWithdraw.innerText = newWithdrawAmount;
 
    // balance update
    const currentBalance = document.getElementById('totalBalance');
    const totalBalance = currentBalance.innerText;

    const totalNewBalance = parseFloat(totalBalance) - parseFloat(withdrawAmount);

    currentBalance.innerText = totalNewBalance;





    withdrawInput.value = '';
})