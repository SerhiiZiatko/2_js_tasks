
//==== Number ====
// #1
var isNumeric = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
//random integer from 'a' to 'b' (include b)
var randomInt = function ( a, b ){
    var min, max;
   
    if( isNumeric( a ) && isNumeric( b ) && a < b ){
        max = b;
        min = a;
    }
    else if( isNumeric( a ) && isNumeric( b ) && b <= a ){
        max = a;
        min = b;
    }
    else if ( a === null && isNumeric( b ) ){
        max = b;
        min = 0;
    }
    else if ( isNumeric( a ) && b === undefined ){
        max = a;
        min = 0;
    }
    else{
        console.error( 'invalid data');
    }
    
    return Math.floor( Math.random() * ( max + 1 - min) ) + min;
}
console.warn( '#1 Number');
console.log( 'data: 5 = ' + randomInt( 5 ) );
console.log( 'data: 5, 10 = ' + randomInt( 5, 10 ) );
console.log( 'data: 10, 5 = ' + randomInt( 10, 5 ) );
console.log( ' ' );

// #2
var getDecimals = function ( n, len ){
    n -= Math.floor( n );
    if( len ){
        return n.toFixed( len );
    }
    return n.toFixed( 10 ) ;
}
console.warn( '#2 Number');
console.log( 'data: 5.343904, 3 = ' + getDecimals( 5.343904, 3 ));
console.log( 'data: 6.65464821 = ' + getDecimals( 6.65464821 ));
console.log( ' ' );

//==== String ====
// #3
var truncate = function ( str, maxLength ){
    var strLength = str.length;

    if ( strLength > maxLength ){
        return str = str.slice(0, -( strLength + 1 - maxLength ) ) + String.fromCharCode(8230);
    }
    return str;
}
console.warn( '#3 String ');
console.log( 'data: 12345678901234567890, 5 = ' + truncate( '12345678901234567890', 5 ) );
console.log( ' ' );

// #4
var className = 'fa fa-bar';

var addClass = function ( str ){
    var strArr = str.split(' ');
    for( var i = 1, len = arguments.length; i <= len; i++){
        if( strArr.indexOf( arguments[ i ] ) === -1 ){
            strArr.push( arguments[ i ] );
        }
    }
    return strArr.join( ' ' );
}
console.warn( '#4 String ');
console.log( 'data: "fa fa-bar", "fa-pulse" = ' + addClass( className, 'fa-pulse' ) );
console.log( 'data: "fa fa-bar", "fa-bar" = ' + addClass( className, 'fa-bar' ) );
console.log( ' ' );

//==== Array ====
// #5
var newSplice = function ( arr, start, delCount ) {
    var arrLength = arr.length;
    var argumentsLength = arguments.length;
    var addItemLength = argumentsLength - 3;
    var newArr = [];
    // condition for 'start'
    if( start < 0){
        start = arrLength + start;
    }
    if ( start > arrLength){
        start = arrLength;
    }
    // condition for 'delCount'
    if( delCount >= arrLength - start){
        delCount = arrLength - start;
    }  
    for( var i = 0, len = arrLength; i < len; i++){
       if ( i === start ){
            for( var j = 3; j < argumentsLength; j++ ){
                newArr.push( arguments[ j ] );
            }
            i += delCount;   
        }
        if ( !arr[ i ] ) continue;
        newArr.push( arr[ i ]);
    }
    return newArr;
}
// проверки
var arr1 = [1,2,3,4,5,6,7,8,9,10];
var arr2 = [1,2,3,4,5,6,7,8,9,10];

console.warn( '#5 Array');
console.log( 'data: [1,2,3,4,5,6,7,8,9,10], 5, 2, 11, 12, 14, 15 = ' + newSplice( arr1, 5, 2, 11, 12, 14, 15 ) );
console.log( 'data: [1,2,3,4,5,6,7,8,9,10], 2, 0, 11, 12,  = ' + newSplice( arr2, 2, 0, 11, 12 ) );
console.log( ' ' );
/*
arr2.splice( 5, 2, 11, 12, 14, 15 )
console.log( arr2 );

var arr = ["Я", "сейчас", "изучаю", "JavaScript"];
newSplice(arr, 0, 3, "Мы", "изучаем"); // ["Мы", "изучаем", "JavaScript"]

var arr = ["Я", "изучаю", "JavaScript"];
newSplice(arr, 1, 1); // ["Я", "JavaScript"]

var arr = ["Я", "изучаю", "JavaScript"];
newSplice(arr, 2, 0, "сложный", "язык"); // ["Я", "изучаю", "сложный", "язык", "JavaScript"]


var arr = ["Я", "сейчас", "изучаю", "JavaScript", "сложный", "язык"];
newSplice(arr, -3, 1); // ["Я", "сейчас", "изучаю", "сложный", "язык"];

var arr = ["Я", "сейчас", "изучаю", "JavaScript", "сложный", "язык"];
newSplice(arr, -3, 2, "Мы", "изучаем" ); // ["Я", "сейчас", "изучаю",  "Мы", "изучаем", "язык"];

var arr = ["Я", "сейчас", "изучаю", "JavaScript", "сложный", "язык"];
newSplice(arr, -3, 3, "Мы", "изучаем"); // ["Я", "сейчас", "изучаю", "Мы", "изучаем"];
*/

// #6
var myArr = [1,3,5,7,9,11];
var shake = function ( arr ){
    var shakeArr = [];
    var i;
    for( ; arr.length  > 0; ){
        i = randomInt( 0, arr.length - 1 );
        shakeArr.push( arr[ i ] );
        arr.splice( i, 1 );
    }
    return shakeArr;
}
console.warn( '#6 Array');
console.log( 'data: [1,3,5,7,9,11] = ' +  shake( myArr ) );
console.log( ' ' );


//==== Date ====
// #7
var startOfMonth = function ( date ){
    date = new Date( date );
    return '01/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' +  date.getFullYear() ;
}
console.warn( '#7.1 Date');
console.log( 'data: "2015/08/05" = ' + startOfMonth( '2015/08/05' ));
console.log( 'data: new Date() = ' + startOfMonth( new Date() ));
console.log( 'data: Date.now() = ' + startOfMonth( Date.now() ));
console.log( ' ' );

// другая версия предидущей задачи
var startOfMonth2 = function ( date ){
    date = new Date( date );
    date.setDate(1);
    return date.toLocaleDateString('en-GB') ;
}
console.warn( '#7.2 Date другая версия ');
console.log( 'data: "2015/08/05" = ' + startOfMonth2( '2015/08/05' ));
console.log( 'data: new Date() = ' + startOfMonth2( new Date() ));
console.log( 'data: Date.now() = ' + startOfMonth2( Date.now() ));
console.log( ' ' );


//==== Области видимости и замыкания ====
// #8
var go = function(){
    var km = 0;
    return function ( len ){
        km += len;
        return km;
    }
}    
console.warn( '#8 Области видимости и замыкания');
var goGo = go();
console.log( 'data: 20 = ' + goGo( 20 ) );
console.log( 'data: 40 = ' + goGo( 40 ) );
console.log( 'data: 5 = ' + goGo( 5 ) );