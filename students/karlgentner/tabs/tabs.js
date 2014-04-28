//Karl Gentner - CF F2 Javascript - Ajax Fetch Assignment 4/24/14

$(function populateTabs() {
    $.getJSON("http://rs.hankyates.com:3000/content",function(result){
        $.each(result, function(tabname, content){
            //append html using fetched data
            $("nav ul").append("<li><a href=#" + tabname + ">" + tabname +"</a></li>");
            $("div.tabOutputArea").append("<div id='" + tabname + "' class='tabContent'>" + content +"</div>");
        });
             
        $(".tabContent").not(":first").hide();//hide all tab content except the first tab
        $("ul.tabs li:first").addClass("selected").show(); // add "selected" class to first tab and show 

        // On Click
        $("ul.tabs li").click(function() {
            $("ul.tabs li").removeClass("selected"); //remove "selected" class from all list items
            $(this).addClass("selected"); //add "selected" class to selected list item
            $(".tabContent").hide(); //hide content of all divs with class=tabContent
            $($("a",this).attr("href")).show(); // show content of selected item
        });
    });
 });

