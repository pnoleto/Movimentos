import { Produto, MovimentoManual, ProdutoCosif } from 'Domain/Models';
import { Subscribable } from 'rxjs';

export interface IMovimentosManuais {
    Init(EndPointURL: string);

    ObterMovimentoManual(): Subscribable<MovimentoManual[]>;
    InserirMovimentoManual(movimentoManual: MovimentoManual): Subscribable<MovimentoManual>;
    AlterarMovimentoManual(movimentoManual: MovimentoManual): Subscribable<string>;
    DeletarMovimentoManual(IdMovimentoManual: MovimentoManual): Subscribable<string>;

    ObterProdutos(): Subscribable<Produto[]>;
    InserirProdutos(produto: Produto): Subscribable<Produto>;
    AlterarProdutos(produto: Produto): Subscribable<string>;
    DeletarProdutos(produto: Produto): Subscribable<string>;

    ObterCosif(): Subscribable<ProdutoCosif[]>;
    InserirCosif(cosif: ProdutoCosif): Subscribable<ProdutoCosif>;
    AlterarCosif(cosif: ProdutoCosif): Subscribable<string>;
    DeletarCosif(cosif: ProdutoCosif): Subscribable<string>;

}
