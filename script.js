const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        let filter = searchInput.value.toLowerCase();

        let products = document.querySelectorAll(".product");

        products.forEach(function (product) {

            let text = product.innerText.toLowerCase();

            if (text.includes(filter)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });
    });
}
const form = document.getElementById("contactForm");

if(form){

    form.addEventListener("submit", function(event){
        
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;

        if (name == "" || email == ""){
            alert ("Please fill out all required fields.");
            event.preventDefault();
        }

    });
}