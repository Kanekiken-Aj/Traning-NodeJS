// module.exports = function (){
    // return "Hello " + name+ " !"


const nam = process.argv[2];
if(nam){
    console.log(`Hello, ${nam}`)
}else{
    console.log("Usuage: node greet.js <name>");
}
// }