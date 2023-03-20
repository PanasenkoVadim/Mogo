let trigger = document.querySelectorAll(".whatWeDo__accordeon_trigger");
let item = document.querySelectorAll(".whatWeDo__accordeon_item");

trigger.forEach((triggerElement) => {
  triggerElement.addEventListener("click", function () {
    let parent = triggerElement.parentNode;
    if (parent.classList.contains("accordeon__active")) {
      parent.classList.remove("accordeon__active");
    } else {
      item.forEach((itemElement) =>
        itemElement.classList.remove("accordeon__active")
      );
      parent.classList.toggle("accordeon__active");
    }
  });
});
