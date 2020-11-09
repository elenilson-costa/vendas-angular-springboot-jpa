import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ProdutoCrudComponent } from "./views/produto-crud/produto-crud.component";
import { ProdutoFormComponent } from './components/produto/produto-form/produto-form.component';


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

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
