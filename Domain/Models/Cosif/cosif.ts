import { MovimentoManual } from '../MovimentoManual/movimento-manual';
import { Produto } from '../Produto/produto';

export class ProdutoCosif {
    codigoProduto: string;
    codigoCosif: string;
    codigoClassificacao: string;
    status: string;
    produto:Produto;
    movimentos_manuais: MovimentoManual[];
}

