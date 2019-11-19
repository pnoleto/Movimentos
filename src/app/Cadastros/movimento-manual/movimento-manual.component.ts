import { Component, OnInit } from '@angular/core';
import { MovimentosManuaisService } from 'Domain/Services';
import { MovimentoManual, ProdutoCosif, Produto } from 'Domain/Models';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-movimento-manual',
  templateUrl: './movimento-manual.component.html',
  styleUrls: ['./movimento-manual.component.css']
})
export class MovimentoManualComponent implements OnInit {

  public movimentosManuaisList: MovimentoManual[];
  public produtoCosifList: ProdutoCosif[];
  public produtoList: Produto[];
  public formMovimentoManual: FormGroup;

  constructor(
    private movimentosManuais: MovimentosManuaisService
  ) { this.InitFormGroup(); }

  ngOnInit() {
    this.movimentosManuais.ObterMovimentoManual()
      .subscribe(
        (result) => {
          this.movimentosManuaisList = result
        },
        (err) => {
          alert(err.message)
        })

    this.movimentosManuais.ObterProdutos()
      .subscribe(
        (result) => {
          this.produtoList = result
        },
        (err) => {
          alert(err.message)
        })

    this.movimentosManuais.ObterCosif()
      .subscribe(
        (result) => {
          this.produtoCosifList = result
        },
        (err) => {
          alert(err.message)
        })
  }

  public InitFormGroup() {
    this.formMovimentoManual = new FormGroup({
      anoData: new FormControl(null, [Validators.required, Validators.min(1800), Validators.max(2900)]),
      mesData: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(12)]),
      produto: new FormControl(null, [Validators.required]),
      codigoCosif: new FormControl(null, [Validators.required]),
      descricao: new FormControl(null),
      valor: new FormControl(null, [Validators.required]),
    });

    this.formMovimentoManual.disable();
  }

  private ObterCampos(): MovimentoManual {
    return {
      mesData: this.formMovimentoManual.controls.mesData.value,
      anoData: this.formMovimentoManual.controls.anoData.value,
      codigoCosif: this.formMovimentoManual.controls.codigoCosif.value,
      codigoProduto: this.formMovimentoManual.controls.produto.value,
      codigoUsuario: "",
      dataMovimento: new Date,
      numeroLancamento: 0,
      produto_Cosif: null,
      descricao: this.formMovimentoManual.controls.descricao.value,
      valor: this.formMovimentoManual.controls.valor.value
    }
  }

  public Novo() {
    this.formMovimentoManual.enable();
  }

  public Submit() {
    this.movimentosManuais.InserirMovimentoManual(this.ObterCampos())
      .subscribe(
        (result) => {
          this.ngOnInit();
          this.formMovimentoManual.reset();
          this.formMovimentoManual.disable();
          alert("Movimento incluido com sucesso.");
        },
        (err) => {
          alert(err.message)
        })
  }

}
