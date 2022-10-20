$(".nav-list .nav-item a").on("click", function () {
    $(".nav-list .nav-item a.active").removeClass("active");
    $(this).addClass("active");
})
