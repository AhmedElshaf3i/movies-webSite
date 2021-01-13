import { contactCheck } from "./contact.js";
import { display } from "./display.js";
import { menuEvent } from "./menu.js";
import { search } from "./search.js";

$(window).ready(() => {
  display(undefined, "byAPI");
  new menuEvent();
  search();
  contactCheck();
});
