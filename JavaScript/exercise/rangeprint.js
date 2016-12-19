function printRange (a,b,c)
    {
        if (b == undefined) {
            b = a;
            a = 0;
        }
        if (c == undefined) {
            c = 1;
        }
        for (var i = a; i < b; i+=c) {
            console.log(i);
        }
    }

printRange (12,undefined,1);
