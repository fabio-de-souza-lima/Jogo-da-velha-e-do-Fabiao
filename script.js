function anunciaVitoria(nomeJog,cor){
    $('#vencedor').text(nomeJog);
    $('#modalInfo .modal-content').removeClass(Jogador1.cor+' '+Jogador2.cor);
    corVencedor = cor;
    $('#modalInfo .modal-content').addClass(cor)
    $('#modalInfo').modal('show');
    setTimeout(function(){
        $('#modalInfo').modal('hide');
    },4000);
    $('.campo').animate({marginLeft:'-120%'},3000);
    setTimeout(function(){
        $('.campo .btn').text('').removeClass('text-info text-danger');
        $('.campo').animate({marginLeft:'0%'});
        $(classLinhaTracada).css('visibility','hidden');
    },3500);
}
var corVencedor;
var classLinhaTracada = ".lh1";//nao precisava inicializar em .lh1!
function Jogador(nome,pontos,marcador,cor){
    var obj = {
        'nome': nome,
        'pontos': pontos,
        'marcador': marcador,
        'cor':cor,
        ganhou:function(){
                this.pontos++;
                anunciaVitoria(this.nome,this.cor);
            }
        }
        return obj;
}
var Jogador1;
var Jogador2;
var linha1 = $('.btn-group:eq(0) .btn');
var linha2 = $('.btn-group:eq(1) .btn');
var linha3 = $('.btn-group:eq(2) .btn');
$(function(){
    Jogador1 = new Jogador('',0,'x','bg-danger');
    Jogador2 = new Jogador('',0,'o','bg-info');
    $('#janelaInfo').modal('show');
    $('.linhaH,.linhaV,.linhaD').css('visibility','hidden');
    // $("[class*='lv'],[class*='lh'],[class*='ld']").css('box-shadow','inset 1px 1px 5px rgba(0, 0, 0, 0.862)');//sombra na linha de destaque
    
    var jogAt = Jogador1.marcador;//x
    $('.jogCorrente').addClass(Jogador1.cor);
    function quemClicou(){
        if(jogAt==Jogador1.marcador){
            jogAt = Jogador2.marcador;
            $('.jogCorrente').removeClass(Jogador1.cor);
            $('.jogCorrente').addClass(Jogador2.cor);
            return Jogador1.marcador.toUpperCase();
        }
        else{
            jogAt = Jogador1.marcador;
            $('.jogCorrente').removeClass(Jogador2.cor);
            $('.jogCorrente').addClass(Jogador1.cor);
            return Jogador2.marcador.toUpperCase();
        }
    }

    $('.campo .btn').click(function(){
        if($(this).text()==''){
            if(jogAt==Jogador1.marcador){
                $(this).addClass('text-danger');
            }
            else{
                $(this).addClass('text-info');
            }
            $(this).text(quemClicou());
            algemGanhou();
        }
        else{
            // window.alert('Ocupado!')
            $('#modalErro').modal('show');
            setTimeout(function(){
                $('#modalErro').modal('hide');
            },500)
        }

    });
    $('.pontos').slideUp(0.1);
    $('#btnComeca').click(function(){
        if($('#nome1').val()==''|| $('#nome2').val()==''){
            $('.alert').removeClass('d-none');
            $('.alert').slideDown();
            setTimeout(function(){
                $('.alert').slideUp();
            },1800);
        }else{
            Jogador1.nome = $('#nome1').val();
            Jogador2.nome = $('#nome2').val();
            $('#jog1').text(Jogador1.nome);
            $('#jog2').text(Jogador2.nome);
            $('.pontos').slideDown(400);
            // $('.pontos').removeClass('d-none');
            $('#janelaInfo').modal('hide');
        }
    });
    $('.logo').on('dblclick',function(){
        $('.campo').animate({marginLeft:'-120%'});
        setTimeout(function(){
            $('.campo .btn').text('').removeClass('text-info text-danger');
            $('.campo').animate({marginLeft:'0%'});
        },200);    
    })

    function algemGanhou(){
        //nas linhas horizontais
        if(linha1[0].innerText==linha1[1].innerText && linha1[0].innerText==linha1[2].innerText && linha1[0].innerText!=''){
           //Destaque com linhas
            $('.lh1').css({
                'visibility':'visible'
            });
            $('.lh1').removeClass(Jogador1.cor+' '+Jogador2.cor);
            classLinhaTracada = '.lh1';

            if(linha1[0].innerText==Jogador1.marcador.toUpperCase()){
                Jogador1.ganhou();
            }
            else{
                Jogador2.ganhou();
            }
            $('.lh1').addClass(corVencedor);
        }
        else if(linha2[0].innerText==linha2[1].innerText && linha2[0].innerText==linha2[2].innerText && linha2[0].innerText!=''){
           //Destaque com linhas
           $('.lh2').css({
            'visibility':'visible'
            });
            $('.lh2').removeClass(Jogador1.cor+' '+Jogador2.cor);
            classLinhaTracada = '.lh2';
            if(linha2[0].innerText==Jogador1.marcador.toUpperCase()){
                    Jogador1.ganhou();
                }
                else{
                    Jogador2.ganhou();
                }
                $('.lh2').addClass(corVencedor);
            }
        else if(linha3[0].innerText==linha3[1].innerText && linha3[0].innerText==linha3[2].innerText && linha3[0].innerText!=''){
            //Destaque com linhas
           $('.lh3').css({
            'visibility':'visible'
            });
            $('.lh3').removeClass(Jogador1.cor+' '+Jogador2.cor);
            classLinhaTracada = '.lh3';
            if(linha3[0].innerText==Jogador1.marcador.toUpperCase()){
                Jogador1.ganhou();
            }
            else{
                Jogador2.ganhou();
            }
            $('.lh3').addClass(corVencedor);
        }
        //nas linhas verticais
        else if(linha1[0].innerText==linha2[0].innerText && linha1[0].innerText==linha3[0].innerText && linha1[0].innerText!=''){
            //Destaque com linhas
           $('.lv1').css({
            'visibility':'visible'
            });
            $('.lv1').removeClass(Jogador1.cor+' '+Jogador2.cor);
            classLinhaTracada = '.lv1';

            if(linha1[0].innerText==Jogador1.marcador.toUpperCase()){
                Jogador1.ganhou();
            }
            else{
                Jogador2.ganhou();
            }
            $('.lv1').addClass(corVencedor);
        }
        else if(linha1[1].innerText==linha2[1].innerText && linha1[1].innerText==linha3[1].innerText && linha1[1].innerText!=''){
            //Destaque com linhas
            $('.lv2').css({
                'visibility':'visible'
                });
                $('.lv2').removeClass(Jogador1.cor+' '+Jogador2.cor);
                classLinhaTracada = '.lv2';
                if(linha1[1].innerText==Jogador1.marcador.toUpperCase()){
                Jogador1.ganhou();
            }
            else{
                Jogador2.ganhou();
            }
            $('.lv2').addClass(corVencedor);
        }
        else if(linha1[2].innerText==linha2[2].innerText && linha1[2].innerText==linha3[2].innerText && linha1[2].innerText!=''){
            //Destaque com linhas
            $('.lv3').css({
                'visibility':'visible'
                });
                $('.lv3').removeClass(Jogador1.cor+' '+Jogador2.cor);
                classLinhaTracada = '.lv3';
            if(linha1[2].innerText==Jogador1.marcador.toUpperCase()){
                Jogador1.ganhou();
            }
            else{
                Jogador2.ganhou();
            }
            $('.lv3').addClass(corVencedor);
        }
        //nas diagonais
        else if(linha1[0].innerText==linha2[1].innerText && linha1[0].innerText==linha3[2].innerText && linha1[0].innerText!=''){
            //Destaque com linhas
            $('.ld1').css({
                'visibility':'visible'
                });
                $('.ld1').removeClass(Jogador1.cor+' '+Jogador2.cor);
                classLinhaTracada = '.ld1';
            if(linha1[0].innerText==Jogador1.marcador.toUpperCase()){
                Jogador1.ganhou();
            }
            else{
                Jogador2.ganhou();
            }
            $('.ld1').addClass(corVencedor);
        }
        else if(linha1[2].innerText==linha2[1].innerText && linha1[2].innerText==linha3[0].innerText && linha1[2].innerText!=''){
            //Destaque com linhas
            $('.ld2').css({
                'visibility':'visible'
                });
                $('.ld2').removeClass(Jogador1.cor+' '+Jogador2.cor);
                classLinhaTracada = '.ld2';
            if(linha1[2].innerText==Jogador1.marcador.toUpperCase()){
                Jogador1.ganhou();
            }
            else{
                Jogador2.ganhou();
            }
            $('.ld2').addClass(corVencedor);
        }
        console.log('Alguem venceu');
        atualizaPontos();
    }
    function atualizaPontos(){
        $('#pt1').text(Jogador1.pontos);
        $('#pt2').text(Jogador2.pontos);
    }
})

