import { ProdutoCosif } from '../Cosif/cosif';

export class MovimentoManual {
    mesData: number;
    anoData: number;
    numeroLancamento: number;
    codigoProduto: string;
    codigoCosif: string;
    descricao: string;
    dataMovimento: Date;
    codigoUsuario: string;
    valor: number;
    produto_Cosif: ProdutoCosif
}
