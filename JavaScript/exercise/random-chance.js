    function quarters (q)
    {
        var quart = q;
        for (var i = q; i > 0; i--) {
            var result = Math.floor(Math.random () * 100 + 1)
            if (result == "1") {
                var winnings = Math.trunc(Math.random () * 50)+51;
                console.log ("You won: " + winnings);
                i += winnings;
            }
            console.log (i);
        }
    }

    quarters (40)
