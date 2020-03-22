module.exports = function check(str, bracketsConfig) {
     let  stack = [];
for(let i=0; i<bracketsConfig.length; i++){
    stack.push(bracketsConfig[i].join(''));
}
for(let j=0; j<stack.length;){
    if (str.includes(stack[j])){
        str=str.replace(stack[j],'');
        j=0;
    }
    else j++;
}
    let result;
    str.length > 0 ? result = false: result = true;
    return result;
};

