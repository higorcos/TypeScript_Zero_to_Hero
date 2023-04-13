{/*

            if/else
        
*/}
export {}
//==> Exemplo 01 - uso do if

        const numeroMax:number = 100;
        let contador:number = 100;
        if(contador < numeroMax){
            contador++;
        }

        console.log(`\n\t==> Exemplo 01\n`);
        console.log(contador);

//==> Exemplo 02 - Uso do if 
        console.log(`\n\t==> Exemplo 02\n`);
        const permissaoParaDigirir: number = 20;

        if(permissaoParaDigirir >= 18){
            console.log(`Você tem permissao`)
        }else{
            console.log('Você não tem permisão')
        }

//==> Exemplo 03 - if
//==> Exemplo 04 - if .. else if
        console.log(`\n\t==> Exemplo 04\n`);

        let desconto: number;
        const valorCompra = 14;

        if(valorCompra > 0 && valorCompra <= 5){
            desconto = 5;
        } else if (valorCompra > 5 && valorCompra <= 10){
            desconto = 10;
        } else{
            desconto = 15;

        }

        console.log(`Você recebeu um desconto de ${desconto}%`)
        
//==> Exemplo 05 - Ternário
    console.log(`\n\t==> Exemplo 05\n`);

    const idadePessoa = 14;

    const podeVotar = (idadePessoa >= 18 ) ? 'Você é elegivel' : 'Você não é elegivel'
    console.log(podeVotar)
   


   


