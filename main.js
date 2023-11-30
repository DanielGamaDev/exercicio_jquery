$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        const nomeDaNovaTarefa = $('#nova-tarefa').val();
        const novoItem =  $(`<li>${nomeDaNovaTarefa}</li>`);

        $(novoItem).on('click', function() {
            $(this).toggleClass('riscado');
        });

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(500);
        $('#nova-tarefa').val('')
    })
})