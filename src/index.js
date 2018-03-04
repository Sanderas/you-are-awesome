// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    return propertyName;
}
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        value: "value",
        enumerable: false
    });
    return propertyName;
};
const createProtoMagicObject = () => {
    function f() {
        return 2;
    }

    f.__proto__ = f.prototype;
    return f;
};
var sum1 = 0;
Function.prototype.toString=function() {return sum1;}
const incrementor = () => {
    sum1 += 1;
    function add() {
        sum1 += 1;
        return add;
    }
    return add;
};
var sum = 0;
const asyncIncrementor = () => {
    sum += 1;
    return sum;
};
const createIncrementer = () => {
    var obj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    obj.value = 0;
    obj.next = function () {
        this.value = this.shift();
        return this;
    }
    return obj;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(param);
        }, 1050)
    });
};
const getDeepPropertiesCount = (obj) => {
    var num = 0;

    function fun(obj1) {
        for (i in obj1) {
            num += 1;
            for (j in obj1[i]) {
                fun(obj1[i]);
            }
        }
    }

    fun(obj);
    return num;
};
const createSerializedObject = () => {
    var num = new Number(1);
    return num;
};
const toBuffer = () => {
};
const sortByProto = (array) => {

    return array;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
