function getIncomeInput(){
    const incomeField=document.getElementById('income-input');
    const income=parseInt(incomeField.value);
    incomeField.value='';
    return income;
  


}



function calculateBalance(income,totalExpenses,isBalance)
{
   
    const balanceField= document.getElementById('balance');
    const remainingBalanceField=document.getElementById('remaining-balance');
  
    if(isBalance==true){
    const  balance=income-totalExpenses;
  
   balanceField.innerText=balance;
    }
    else
    {
        const  balance=income-totalExpenses;
        remainingBalanceField.innerText=balance;
    }

}


function verifyError(income,totalExpenses,issCheque)
{
    const errorMsg=document.getElementById('error-alert');
    const balanceField= document.getElementById('balance');
    const remainingBalanceField=document.getElementById('remaining-balance');
    const totalexpensesField=document.getElementById('total-expenses');
    const savingAmountField=document.getElementById('saving-amount');
    if(issCheque==true){
    if(income<totalExpenses || totalExpenses<0  || income<0)
    {
        errorMsg.style.display='block';
        balanceField.innerText=00;
        totalexpensesField.innerText=00;
    }

}

    else
    {
        if(income<totalExpenses || totalExpenses<0  || income<0)
    {
        errorMsg.style.display='block';
        remainingBalanceField.innerText=00;
        savingAmountField.innerText=00;
    }
       

    }

}

function verifyInputFieldError(Input)
{

    if(isNaN(Input))
    {
        
        document.getElementById('message').innerHTML='please take only number';
    }



}




document.getElementById('calculate-btn').addEventListener('click',function(){
   const foodField=document.getElementById('food-input');
   const food=parseInt(foodField.value);
  
  const rentfield= document.getElementById('rent-input');
  const rent=parseInt(rentfield.value);
  
  const clothfield=document.getElementById('cloth-input');
  const cloth=parseInt(clothfield.value);
  
  const totalexpensesField=document.getElementById('total-expenses');
  const previousExpenses=parseInt(totalexpensesField.innerText);
  
  const newExpenses=food+rent+cloth;
  const totalExpenses=previousExpenses+newExpenses;
 
  totalexpensesField.innerText=totalExpenses;
  foodField.value='';
  rentfield.value='';
  clothfield.value='';
  const income=getIncomeInput();
  
  calculateBalance(income,totalExpenses,true);
  verifyError(income,totalExpenses,true);


})
document.getElementById('btn-save').addEventListener('click',function(){
   
    const balanceField= document.getElementById('balance');
    const totalExpenses=parseInt(balanceField.innerText);
   
    const saveInputField=document.getElementById('save-input');
    const save=parseInt(saveInputField.value);
   
    const income2=getIncomeInput();
    const savingAmount=(income2/100)*save;
    
    const savingAmountField=document.getElementById('saving-amount');
    savingAmountField.innerText=savingAmount;
    calculateBalance(totalExpenses,savingAmount);
    verifyError(totalExpenses,savingAmount,false);
  
    saveInputField.value=''; 

    


})

document.getElementById('food-input').addEventListener('keyup',function(){
     const foofInput=document.getElementById('food-input');
     const foodNumber=parseInt(foofInput.value);
  
    verifyInputFieldError(foodNumber);


  
    
})
document.getElementById('rent-input').addEventListener('keyup',function(){
   
    const rentInput=document.getElementById('rent-input');
    const rentNumber=parseInt(rentInput.value);
   

    verifyInputFieldError(rentNumber);


  
    
})
document.getElementById('cloth-input').addEventListener('keyup',function(){
   
    const clothInput=document.getElementById('cloth-input');
    const clothNumber=parseInt(clothInput.value);

  

    verifyInputFieldError(clothNumber);


  
    
})




 
 
     

    

    








