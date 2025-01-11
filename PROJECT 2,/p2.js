let form = document.querySelector('form');

form.addEventListener('submit' , function (e) {
       e.preventDefault()

       let height =parseInt( document.querySelector('#height').value)
       let weight =parseInt( document.querySelector('#weight').value)
       let result = document.getElementById('result')

       if (height === '' || height<0 || isNaN (height)) {
              result.innerHTML = `Please give a valid height ${height}`
       }

      else if (weight === '' || height<0 || isNaN (weight)) {
              result.innerHTML = `Please give a valid weight ${weight}`
       }
       //  formulae:-
       else{
         let bmi =(weight/ ((height*height)/1000)).toFixed(2)
         result.innerHTML =`<span>${bmi}</span>` 
       }


})