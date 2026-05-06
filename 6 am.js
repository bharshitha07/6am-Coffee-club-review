const ratings = document.querySelectorAll(".rating");

ratings.forEach((ratingBox) => {

    const suns = ratingBox.querySelectorAll(".sun");

    suns.forEach((sun) => {

        sun.addEventListener("click", () => {

            let rating = sun.getAttribute("data-value");

            suns.forEach((s) => {

                s.classList.remove("active");

                if(s.getAttribute("data-value") <= rating){

                    s.classList.add("active");

                }

            });

        });

    });

});

const submitBtn = document.getElementById("submitBtn");
const popup = document.getElementById("popup");

submitBtn.addEventListener("click", () => {

    let selectedSuns = document.querySelectorAll(".sun.active");

    if(selectedSuns.length > 0){

        popup.style.display = "flex";

    }

    else{

        alert("Please give your review before submitting ☕");

    }

});

function closePopup(){

    popup.style.display = "none";

}