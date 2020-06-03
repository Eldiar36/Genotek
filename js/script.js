let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
/*
$('.accordion').click(function () {
    if ($(this).next().is(":visible")) {
        $(this).next().hide('fill');
    } else {
        $('.panel:visible').hide('fill');
        $(this).next().show('fill');
    }
})
*/
