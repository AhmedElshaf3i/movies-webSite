import { display } from "./display.js";
export class menuEvent {
  constructor() {
    const menu = $(".menu");
    const items = $(".items a");
    menu.animate({ left: `-${$(".menuList").outerWidth()}` }, 0); //defult hide menu
    items.css({ top: "100%", opacity: "0" }); //defulte hidden and move dowen

    $("#menuIcon").click(() => {
      let time = 800;
      //chang icon
      $("#menuIcon").toggleClass("fa-times");

      //animate list items
      if (menu.css("left") >= "0px") {
        //if div out
        menu.animate({ left: `-${$(".menuList").outerWidth()}` }, 500);
        items.css({ top: "100%", opacity: "0" }); //hidden and move dowen
      } //end of if
      else {
        menu.animate({ left: "0px" }, 500);
        for (let i = 0; i < items.length; i++, time += 100) {
          items.eq(i).animate({ top: "0", opacity: "1" }, time); //display and move up
        } //end of for loop
      } //end of else
    }); //end of menuIcon click event

    //disply movies that user select from list (now-upcoming-rending-....)
    $(".items")
      .children()
      .filter("a[apiKey]")
      .click((e) => {
        let apiFetchType = $(e.target).attr("apiKey");
        display(apiFetchType, "byAPI");
      }); //end of click event

    //slow mode to section in the page (contacts)
    $(".items")
      .children()
      .not("a[apiKey]")
      .click((e) => {
        let offSetVal = $($(e.target).attr("href")).offset().top;
        $("html,body").animate({ scrollTop: offSetVal }, 2000);
      }); //end of click event
  } //end of constructor
} //end of class(menuEvent)
