import { Produto } from './../produto.model';
import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: 'app-produto-form',
    templateUrl: './produto-form.component.html',
    styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

    produto: Produto;

    formAction: String;
    opType: String;

    constructor(private produtoService: ProdutoService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.opType = this.route.snapshot.paramMap.get('opType');
        if (this.opType == "create") {
            this.formAction = "Cadastrar";
            this.produto = {
                descricao: '',
                preco: null
            };

        } else if (this.opType == "update") {
            this.formAction = "Modificar";
            const id = +this.route.snapshot.paramMap.get("id");
            this.produtoService.readById(id).subscribe((produto) => {
                                                            this.produto = produto;
                                                        });

        } else if (this.opType == "delete") {
            this.formAction = "Apagar";
            const id = +this.route.snapshot.paramMap.get('id');
            this.produtoService.readById(id).subscribe((produto) => {
                this.produto = produto;
            });

        }


    }

    createProduto(): void {
        this.produtoService.create(this.produto).subscribe(() => {
            this.produtoService.showMessage('Produto criado!');
            this.router.navigate(['/produtos']);
        })
    }

    updateProduto(): void {
        this.produtoService.update(this.produto).subscribe(() => {
            this.produtoService.showMessage("Produto atualizado com sucesso!");
            this.router.navigate(["/produtos"]);
        });
    }

    deleteProduto(): void {
        this.produtoService.delete(this.produto.id).subscribe(() => {
            this.produtoService.showMessage("Produto excluido com sucesso!");
            this.router.navigate(["/produtos"]);
        });
    }


    cancel(): void {
        this.router.navigate(['/produtos']);
    }
}
