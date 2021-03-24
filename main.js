const boy = {name : "Alex", age: 19, isRich: true };
const girl = {name : "Ruth", age: 2219, isRich: true };

//To export more than 2 object
module.exports = {
    boy: boy,
    girl: girl,
};
//module.exports = boy;

//another way of exporting
module.exports.boy = boy;
module.exports.girl = girl;