import { Cliente } from './../cliente.model';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: 'app-cliente-form',
    templateUrl: './cliente-form.component.html',
    styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

    cliente: Cliente;

    formAction: String;
    opType: String;

    constructor(private clienteService: ClienteService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.opType = this.route.snapshot.paramMap.get('opType');
        if (this.opType == "create") {
            this.formAction = "Cadastrar";
            this.cliente = {
                nome: '',
                endereco: null
            };

        } else if (this.opType == "update") {
            this.formAction = "Modificar";
            const id = +this.route.snapshot.paramMap.get("id");
            this.clienteService.readById(id).subscribe((cliente) => {
                                                            this.cliente = cliente;
                                                        });

        } else if (this.opType == "delete") {
            this.formAction = "Apagar";
            const id = +this.route.snapshot.paramMap.get('id');
            this.clienteService.readById(id).subscribe((cliente) => {
                this.cliente = cliente;
            });

        }


    }

    createCliente(): void {
        this.clienteService.create(this.cliente).subscribe(() => {
            this.clienteService.showMessage('Cliente criado!');
            this.router.navigate(['/clientes']);
        })
    }

    updateCliente(): void {
        this.clienteService.update(this.cliente).subscribe(() => {
            this.clienteService.showMessage("Cliente atualizado com sucesso!");
            this.router.navigate(["/clientes"]);
        });
    }

    deleteCliente(): void {
        this.clienteService.delete(this.cliente.id).subscribe(() => {
            this.clienteService.showMessage("Cliente excluido com sucesso!");
            this.router.navigate(["/clientes"]);
        });
    }


    cancel(): void {
        this.router.navigate(['/clientes']);
    }
}
