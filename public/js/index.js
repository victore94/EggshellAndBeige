// this is where the AJAX is going

$(document).ready(() => {
    let $drinkInput = $('.spiritInput')

    $(document).on('click', '.submitSpirit', insertDrinks)

    function insertDrinks(e) {
        let drink = {
            spirit_one: $drinkInput.val().trim(''),
        }
        console.log(drink)
    }
})