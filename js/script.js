$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
    $('#button').click(function() {
        let original = $('#input').val();
        let result = original.slice(1) + original[0] + 'ay';
        $('.output').text(result);
    });
});
