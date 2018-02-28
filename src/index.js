// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    return propertyName;
}
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object, propertyName, {
        enumerable: false
    });
    return propertyName;
};
const createProtoMagicObject = () => {
    function f() {return 2;}
    f.__proto__=f.prototype;
    return f;
};
const incrementor = () => {
    var sum=0;
    function add() {
        sum+=1;
        return add;
    }
    add.toString=function() {
        return sum;
    }
    return sum;
};
const asyncIncrementor = () => {
    var sum=0;
    function add() {
        sum+=1;
        return add;
    }
    add.toString=function() {
        return sum;
    }
    return sum;
};
const createIncrementer = () => {
    var obj =[1,2,3,4,5,6,7,8,9,10];
    obj.value=0;
    obj.next=function() {
        this.value=this.shift();
        return this;
    }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(param);
        }, 1050)
    });
};
const getDeepPropertiesCount = (obj) => {
    var num=0;
    function fun(obj1) {
        for (i in obj1) {
            num+=1;
            for (j in obj1[i]) {
                fun(obj1[i]);
            }
        }
    }
    fun(obj);
    num-=1;
    return num;
};
const createSerializedObject = () => {
    var num=new Number(1);
    return num;
};
const toBuffer = () => {};
const sortByProto = (array) => {
    var ar=[];
    for (var i=0; i<array.length; i++) {
        ar[i]=0;
        while (!array[i].__proto__.__proto__) {
            ar[i]+=1;
        }
    }
    var temp1='',
        temp2='';
    for (var i=0; i<ar.length-1; i++) {
        for (var j=1; j<ar.length; j++) {
            if (ar[j]>ar[i]) {
                temp1=ar[i];
                ar[i]=ar[j];
                ar[j]=temp1;
                temp2=Object.assign(array[i]);
                array[i]=Object.assign(array[j]);
                array[j]=temp2;
            }
        }
    }
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