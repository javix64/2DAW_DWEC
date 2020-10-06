function ejercicio23(){
    console.log('peryhsergwe')
    let r= parseInt(prompt('Insert radius(mm)'));
    let cir=2*(3.14)*r;
    document.write(`The circunference is: ${cir}`);    
}

function ejercicio24(){
    let celsius=parseInt(prompt('Insert the outside temperature'));
    let farenheit=(celsius*(9/5))+32;
    alert(celsius+"°C is "+farenheit+"°F")
    let farenheit1=parseInt(prompt('Insert the outside temperature'))
    let celsius1=(farenheit1-32)*(5/9);
    alert(farenheit1+"°F is "+celsius1+"°C")
}

function ejercicio33(){   
    for(i=1; i<=3;i++){
        let age=parseInt(prompt("Insert your age."));
        let amount_per_day=parseFloat(prompt("Insert the amount per day that you pay"));
        const max_age=100;
        let result_amount=(max_age-age)*amount_per_day;
        let result_amount_final=result_amount.toFixed(2);
        alert("The result is: "+result_amount_final);
        console.log("The result #"+i+" is "+result_amount_final)
    }
    
}

function ejercicio34(){
    
    /*
    ### 4. The Geometrizer

    Create 2 functions that calculate properties of a circle.
    
    Create a function called `calcCircumfrence`:
    
    - Pass the radius to the function.
    - Calculate the circumference based on the radius, and output "The circumference is NN".
    
    Create a function called `calcArea`:
    
    - Pass the radius to the function.
    - Calculate the area based on the radius, and output "The area is NN".
    */
}

/*
### 3. The Geometrizer

Calculate properties of a circle, searching the internet for definitions if not remember.

- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".

### 4. The Temperature Converter

It's hot out! Let's make a converter, and again you'll have to search the internet how to do it.

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/


/* 
### 3. The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

- Write a function named 

  ```
  calculateSupply
  ```
  that:
  - takes 2 arguments: age, amount per day.
  - calculates the amount consumed for rest of the life (based on a constant max age).
  - outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
- Call that function three times, passing in different values each time.
- **Bonus**: Accept floating point values for amount per day, and round the result to a round number.

### 4. The Geometrizer

Create 2 functions that calculate properties of a circle.

Create a function called `calcCircumfrence`:

- Pass the radius to the function.
- Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called `calcArea`:

- Pass the radius to the function.
- Calculate the area based on the radius, and output "The area is NN".
*/