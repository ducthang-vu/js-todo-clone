$(document).ready(function() {
    console.log('main.js is working')
    console.log($)


    /****************
     * Functions
    ****************/

    function printList(new_item) {
        //Accepts a string to print in "list" (global), with the appropriate ".list-item" template. 
        //Events of both ".list-item" and its children are also copied. 
        $('.template .list-item').clone(true, true).prepend(new_item).appendTo(list)
    }


    /****************
     * MAIN SCRIPT
    ****************/

    const input = $('#new-input')
    const list = $('.my-list')
    const lits_item = $('.list-item')
    const item_button = $('.item-button')
    

    const task_stored = ['Buy food', 'Studying', 'Send email']


    item_button.click(function() {
        $(this).parent().remove()
    })


    lits_item.click(function() {
        $(this).toggleClass('completed')
        $(this).children(item_button).toggle()
    })


    for (task of task_stored) printList(task)


    $(document).keyup((function (e) { 
        if (e.which == 13 || e.keyCode == 13) {
            var new_content = input.val().trim()
            if (new_content) {
                $('.template .list-item').clone(true, true).prepend(new_content).appendTo(list)
            }
        }
    }))


    
})
