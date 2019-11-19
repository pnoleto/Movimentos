import { Injectable } from '@angular/core';
import { IMovimentosManuais } from 'Domain/Interfaces/imovimentos-manuais';
import { MovimentoManual, Produto, ProdutoCosif } from 'Domain/Models';
import { HttpClient } from '@angular/common/http';
import { Subscribable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimentosManuaisService implements IMovimentosManuais {

  private _endPointMovimentoManualURL: string;
  private _endPointCosif: string;
  private _endPointProdutos: string;

  constructor(private httpclient: HttpClient) { }

  public Init(EndPointURL: string) {
    this._endPointMovimentoManualURL = EndPointURL;
    this._endPointProdutos = EndPointURL;
    this._endPointCosif = EndPointURL;
    
    this._endPointMovimentoManualURL += "/MovimentoManual";
    this._endPointProdutos += "/Produto";
    this._endPointCosif += "/ProdutoCosif";
  }

  public ObterMovimentoManual(): Subscribable<MovimentoManual[]> {
    let request = this.httpclient.get<MovimentoManual[]>(`${this._endPointMovimentoManualURL}`);
    return request;
  }

  public InserirMovimentoManual(movimentoManual: MovimentoManual): Subscribable<MovimentoManual> {
    let request = this.httpclient.post<MovimentoManual>(`${this._endPointMovimentoManualURL}`, movimentoManual);
    return request;
  }

  public AlterarMovimentoManual(movimentoManual: MovimentoManual): Subscribable<string> {
    let request = this.httpclient.put<string>(`${this._endPointMovimentoManualURL}`, movimentoManual);
    return request;
  }

  public DeletarMovimentoManual(IdMovimentoManual: MovimentoManual): Subscribable<string> {
    let request = this.httpclient.delete<string>(`${this._endPointMovimentoManualURL}/${"referenciar propriedade"}`);
    return request;
  }

  public ObterProdutos(): Subscribable<Produto[]> {
    let request = this.httpclient.get<Produto[]>(`${this._endPointProdutos}`);
    return request;
  }

  public InserirProdutos(produto: Produto): Subscribable<Produto> {
    throw new Error("Method not implemented.");
  }

  public AlterarProdutos(produto: Produto): Subscribable<string> {
    throw new Error("Method not implemented.");
  }

  public DeletarProdutos(produto: Produto): Subscribable<string> {
    throw new Error("Method not implemented.");
  }

  public ObterCosif(): Subscribable<ProdutoCosif[]> {
    let request = this.httpclient.get<ProdutoCosif[]>(`${this._endPointCosif}`);
    return request;
  }

  public InserirCosif(cosif: ProdutoCosif): Subscribable<ProdutoCosif> {
    throw new Error("Method not implemented.");
  }

  public AlterarCosif(cosif: ProdutoCosif): Subscribable<string> {
    throw new Error("Method not implemented.");
  }

  public DeletarCosif(cosif: ProdutoCosif): Subscribable<string> {
    throw new Error("Method not implemented.");
  }
}
