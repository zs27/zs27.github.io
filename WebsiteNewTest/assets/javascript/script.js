function changeSlide(direction) {
    let lists = document.querySelectorAll(".item");
    console.log(lists);
    if (direction == "left") {
        document.getElementById("slide").prepend(lists[lists.length - 1]);
    } else {
        document.getElementById("slide").appendChild(lists[0]);
    }
}
  