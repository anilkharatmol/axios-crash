

// //ASYNC AWAIT

console.log('person 1:shows ticket');
console.log('person 2:shows ticket');
async function preMovie(){
    const p1=new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('ticket'),3000)
    });
    
    
    let ticket=await p1;
    
    console.log(`i have ${ticket}`);
    console.log(' i am hungry');
    const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
    
    let popcorn=await getPopcorn;
    console.log(`i have ${popcorn}`);
    console.log('but i need butter in popcorn');
    
    
    const addButter=new Promise((resolve,reject)=>resolve(`butter`));
    let butter=await addButter;
    console.log(`${butter} added`);
    console.log('i want cold drink also');
    
    const getColdDrinks=new Promise((resolve,reject)=>resolve(`coldDrink`));
    let coldDrink=await getColdDrinks;
    console.log(`${coldDrink} added`);
    console.log('lets watch movie now');
    
    
    
    return ticket;
}

preMovie().then((value)=>console.log('person 3:shows '+value));
console.log('person 4:shows ticket');

// import a from "./this.js";

// console.log(a);


//ASYNC AWAIT PROMISE.ALL


// console.log('person 1:shows ticket');
// console.log('person 2:shows ticket');
// const preMovie= async()=>{
    //     const p1=new Promise((resolve,reject)=>{
        //         setTimeout(()=> resolve('ticket'),3000)
        //     });
        
        
        //     let ticket=await p1;
        
        //     const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
        
        //     const addButter=new Promise((resolve,reject)=>resolve(`butter`));
        
        //     const getColdDrinks=new Promise((resolve,reject)=>resolve(`coldDrink`));
        
        //     let [popcorn,butter,coldDrink]=await Promise.all([getPopcorn,addButter,getColdDrinks]);
        
        //     console.log(`${popcorn} ${butter} ${coldDrink}`);
        
//     return ticket;
// }

// preMovie().then((value)=>console.log('person 3:shows '+value));
// console.log('person 4:shows ticket');

    