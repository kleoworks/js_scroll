function nameArray (a,b,c,d)
{
    var arr = [a,b,c,d];
    for (var i = 0; i < arr.length; i++) {
        console.log( i + " -> " + arr[i] );
    }
}

nameArray ("->", "=>", "::", "----")
