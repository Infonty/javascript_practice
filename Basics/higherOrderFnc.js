const radius = [3, 5, 1, 8];
const calarea = function (radii) {
    const output = [];
    for (let i = 0; i < radii.length; i++) {
        output.push(Math.PI * radii[i] * radii[i]);
    }
    return output;
};
console.log(calarea(radius))

//make it more optimized and generic

//for circumference
const circum=function(radius){
    return Math.PI*2*radius
};
const calc=function (radius,logic){
    const outpt=[]
    for (let i = 0; i < radius.length; i++) {
        outpt.push(logic(radius[i]));
    }
    return outpt;

}

console.log(calc(radius,circum));
