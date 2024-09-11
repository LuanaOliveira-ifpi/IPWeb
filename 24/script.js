
        function exibirOcultarGenerica(selector, tipo, flag) {
            if (tipo === 'tag') {
                $(selector).toggle(flag);
            } else if (tipo === 'classe') {
                $('.' + selector).toggle(flag);
            } else if (tipo === 'id') {
                $('#' + selector).toggle(flag);
            }
        }

        
        $("#elemento").click(function () {
            $(this).toggle("slow");
        });

        $("#box").click(function () {
            $(this).toggleClass("bg-info bg-danger");
        });

        $("#clickBox").click(function () {
            $(this).text("Clique detectado!");
        });

        $("#doubleClickMsg").dblclick(function () {
            $(this).text("Duplo Clique Detectado!");
        });

        $("#hoverBox").hover(
            function () {
                $(this).find("p").text("Você está sobre a caixa!");
            },
            function () {
                $(this).find("p").text("Passe o mouse");
            }
        );

