
export const verificaChuvaVisivelPorData = (chuva, dataAtual) => {
    const anoAtual = dataAtual.getFullYear();

    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataFim = new Date(chuva.fim + '/' + anoAtual);

    dataFim.setHours(23, 59, 59, 999);

    let chuvaDentroDaData = false;

    if (dataInicio > dataFim) {

        dataInicio.setFullYear(anoAtual - 1);

        if(dataAtual >= dataInicio && dataAtual <= dataFim)
        {
            chuvaDentroDaData = true;
        }
        else
        {
            dataInicio.setFullYear(dataAtual.getFullYear());
            dataFim.setFullYear(anoAtual +1);

            chuvaDentroDaData = (dataAtual >= dataInicio && dataAtual <= dataFim);
        }
    }
    else
    {
        chuvaDentroDaData = (dataAtual >= dataInicio && dataAtual <= dataFim);
    }

    return (chuvaDentroDaData);
}


export const verificaChuvaVisivelProximos2Meses = (chuva, data) => {
    const dataAtual = data;
    const anoAtual = dataAtual.getFullYear();

    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataFim = new Date(chuva.fim + '/' + anoAtual);

    const dataLimite = new Date(dataAtual);
    dataLimite.setMonth(dataLimite.getMonth() + 2);

    dataFim.setHours(23, 59, 59, 999);

    let chuvaDentroDaData = false;

    if (dataFim < dataAtual && dataInicio < dataAtual){
        dataInicio.setFullYear(anoAtual + 1);
        dataFim.setFullYear(anoAtual + 1);
    }

    if (dataInicio > dataFim) {
        dataInicio.setFullYear(anoAtual - 1);

        if(dataAtual < dataInicio || dataAtual > dataFim)
        {
            dataInicio.setFullYear(dataAtual.getFullYear());
            dataFim.setFullYear(anoAtual +1);
        }
    }

    if (dataFim > dataAtual && dataInicio > dataAtual && dataInicio <= dataLimite) {
        chuvaDentroDaData = true;
    }

    return (chuvaDentroDaData);
}


export const inverteMesAno = (data) => {
    const dataInvertida = data.split('/');

    return dataInvertida[1] + '/' + dataInvertida[0];
}


export const retornaIntensidade = (intensidade) => {
    let novaIntensidade = '1 (Fraca)';

    if ( intensidade.indexOf('Forte') >= 0 ) {
        novaIntensidade = '3 (Forte)';
    } else if ( intensidade.indexOf('Média') >= 0 ) {
        novaIntensidade = '2 (Média)';
    } else if (  intensidade.indexOf('Irregular') >= 0 ) {
        novaIntensidade = '(Irregular)';
    }

    return novaIntensidade;
}


export const retornaHemisferio = (declinacao) => declinacao >= 0 ? 'Norte' : 'Sul';