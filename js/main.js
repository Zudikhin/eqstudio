$(document).ready(function () {
    "use strict";
    
    $(".header_block_other_dropdown_open").click(function() {
        $(".header").addClass("active");
    });

    $(".header_block_other_dropdown_close").click(function() {
        $(".header").removeClass("active");
    });

    $(".business_mobile_list_item").click(function() {
        $(".business_mobile_list_item").removeClass("active");
        $(this).addClass("active");
        var attr = $(this).attr("data-target");
        $(".business_mobile_content").removeClass("active");
        $(`.${attr}`).addClass("active");
    });

    $(".business_desktop_list_item").hover(function() {
        $(".business_desktop_list_item").removeClass("active");
        $(this).addClass('active');
        var attr = $(this).attr("data-target");
        $(".business_desktop_content_row_column").removeClass("active");
        $(`.${attr}`).addClass("active");
    });

    $(".business_desktop_content_row_column").hover(function() {
        $(".business_desktop_content_row_column").removeClass('active');
        $(this).addClass("active");
        var attr = $(this).attr("data-target");
        $(".business_desktop_list_item").removeClass("active");
        $(`.business_desktop_list .${attr}`).addClass("active");
    });

    $(".business_desktop_content_row_column_btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".contact").offset().top - 45
        }, 1000);
    });

    $(".business_mobile_content_btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".contact").offset().top
        }, 1000);
    });

    $(".header_dropdown_contact").click(function() {
        $(".header").removeClass('active');
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".contact").offset().top - 200
        }, 2000);
    });

    $(".header_dropdown ul li span").click(function() {
        $(".header").removeClass('active');
        var attr = $(this).attr("data-target");
        $([document.documentElement, document.body]).animate({
            scrollTop: $(`#${attr}`).offset().top - 200
        }, 2000);
    });

    $(".header_block_other ul li span").click(function() {
        var attr = $(this).attr("data-target");
        $([document.documentElement, document.body]).animate({
            scrollTop: $(`#${attr}`).offset().top
        }, 2000);
    });

    $(".header_block_other_callback").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".contact").offset().top
        }, 1000);
    });

});