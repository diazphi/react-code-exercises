var obj = {firstname: 'Philip', lastname: 'Diaz' };

var AddToThis = function(...arr) {
    return this.firstname+' '+this.lastname+' '+arr;
}

var arr = [1,2,3,4,5,6,7,8,9,10];


console.log(AddToThis.call(obj));
console.log(AddToThis.apply(obj,arr));

var bound = AddToThis.bind(obj);

console.log(bound(arr));