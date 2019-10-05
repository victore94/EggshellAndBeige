// this is where the AJAX is going

$(document).ready(function () {

    let spiritInput = $('.spiritInput')
    let spiritInputTwo = $('.spiritInputTwo')
    let mixerInput = $('.mixerInput')
    let garnishInput = $('.garnishInput')
    let syrupInput = $('.syrupInput')
    let specialInput = $('.specialInput')
    let nameInput = $('.nameInput')

    getDrinks()
    function getDrinks() {
        $.get("/api/drinks", function (data) {
            drinks = data

        })
    }


    $(document).on('click', '.submitSpirit', submitSpirit)

    function submitSpirit() {
        $('.submitSpirit').addClass("submitSpiritTwo")
        console.log(this)
    }

    $(document).on('click', '#submitFormButton', insertDrinks)
    function insertDrinks(e) {
        e.preventDefault();

        let drink = {
            drink_name: nameInput.val().trim(''),
            spirit_one: spiritInput.val().trim(''),
            mixer_one: mixerInput.val().trim(''),
            garnish: garnishInput.val().trim(''),
            syrup_one: syrupInput.val().trim(''),
            special_instructions: specialInput.val().trim('')
        }
        console.log('this is the drink ', drink)
        submitDrink(drink)
    }
    function submitDrink(Drinks) {
        $.post("/api/drinks", Drinks, () => {
            console.log('yes');
            window.location.href = "/api/drinks";
        });
    }
})