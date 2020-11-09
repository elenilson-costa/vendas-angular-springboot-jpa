import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ProdutoCrudComponent } from "./views/produto-crud/produto-crud.component";
import { ProdutoFormComponent } from './components/produto/produto-form/produto-form.component';
import { ClienteCrudComponent } from "./views/cliente-crud/cliente-crud.component";
import { ClienteFormComponent } from './components/cliente/cliente-form/cliente-form.component';


const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },

    {
        path: "produtos",
        component: ProdutoCrudComponent
    },
    {
        path: "produtos/form/:opType",
        component: ProdutoFormComponent
    },
    {
        path: "produtos/form/:opType/:id",
        component: ProdutoFormComponent
    },

    {
        path: "clientes",
        component: ClienteCrudComponent
    },
    {
        path: "clientes/form/:opType",
        component: ClienteFormComponent
    },
    {
        path: "clientes/form/:opType/:id",
        component: ClienteFormComponent
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
