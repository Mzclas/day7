var app = {
    version: "1.0",
    start: function (nDivs, primaryColor, secondaryColor, colorScheme) {
        // for (var i = 0; i < 10; i++) {
        //     $("body").prepend("<div>")
        // }

        if (nDivs === undefined) throw new Error("You must pass a mandatory number of divs")
        var halfNDivs = nDivs / 2

        $("body").prepend("<div><span></span></div>".repeat(nDivs))
        var nColors = colorScheme.length

        //this changes all the divs once (with the same value)
        //$("div").css('height', Math.random () * 90)

        //this changes all the divs with different height each
        // $("div").each(function () {
        //     $(this).height(Math.random() * 50)
        // })

        //color property getter
        //var color = $("div").css("background")

        $(`div:lt(${halfNDivs})`).css("background", primaryColor)
        $($(`div:gt(${(halfNDivs) - 1})`)).css("background", secondaryColor)

        $("div").hover(function () {
            $(this)
                .css("background", `#${colorScheme[Math.floor(Math.random() * nColors)]}`)
        })

        var nClickedTimes = 0

        $("input[type=button]").on("click", function () {
            $(this).toggleClass("disabled")

            if (++nClickedTimes === 3) $(this).off("click")
        })
    }
}