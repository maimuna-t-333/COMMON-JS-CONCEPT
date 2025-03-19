

// function sum(){
//     let counter=0;
//     counter=counter+1;
//     console.log(counter);
// }

// sum()
// sum()


// function sum(){
//     let counter=0;
//     const updateCounter=function (){

//         counter++;
//     console.log(counter);
//     }
//     updateCounter()
    
// }

// sum()
// sum()


function sum(){
    let counter=0;
    return function (){

        counter++;
    console.log(counter);
    }
    
    
}

const result=sum()
result()
result()