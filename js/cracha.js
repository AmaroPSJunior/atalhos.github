var Acompanhamento = (function () {

    function init() {
        bindFunction();
    }
    
    function bindFunction(){
        defineImagem();
        inicia();
        printer();
    }

    function defineImagem(){
        $('#file').change(function () {
            
            var file = this.files[0];
            var reader = new FileReader();

            reader.onload = function (e) {

                $('.iimmgg').attr('src', e.target.result);
            }

            reader.readAsDataURL(file);

        });
    }

    function inicia() {
        $("#id-nome").val("São Lucas");
        $("#id-setor").val("Comercial");
        $('.entrada').change(function () {
            var nome = $("#id-nome").val();
            var setor = $("#id-setor").val();
            $(".nome").text(nome);
            $(".setor").text(setor);
        });
    }
    
    function printer() {
        $('#btn-imprimir').click(function () {
            print();
        });
    }

    return {
        init: init,

    };

})();

$(Acompanhamento.init);
