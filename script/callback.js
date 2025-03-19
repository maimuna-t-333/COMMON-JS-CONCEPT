// function ghotok(patri){
//     console.log('ami ki call back korbo', patri)
// }

// const  patri='rahima';
// ghotok(patri)


function ghotok(patri,name){
    // console.log(patri)
    patri(name)
}

const  patri=function (name){
    console.log('okay patri 1 paici', name);
}
const  patri2=function (name){
    console.log('okay patri 2 paici',name);
}
const  patri3=function (name){
    console.log('okay patri 3 paici', name);
}

ghotok(patri,'hero alom')
ghotok(patri2,'pontush')