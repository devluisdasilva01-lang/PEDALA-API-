import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ModeloModel } from "../modelo/modelo.model";
import { StatusEstacao } from "./status_estacao.enum";
import { EstacaoModel } from "src/estacoes/estacao.model";

@Entity("bicicletas")
export class BicicletaModel {
    @PrimaryGeneratedColumn("uuid")
    id: string 

    @ManyToMany(() => ModeloModel)
    @JoinColumn({name: "modelo_id"})
    modelo: ModeloModel

    @Column({
        type: 'enum',
        enum: StatusEstacao,
        default: StatusEstacao.DISPONIVEL
    })
    status: StatusEstacao

    @ManyToOne(() => EstacaoModel)
    @JoinColumn({name: "estacao_id"})
    lotacao: EstacaoModel
    
    @CreateDateColumn({name: "dt_cadastro", update: false})
    dataCadrastro: Date
    
    @CreateDateColumn({name: "dt_atualizacao", update: true})
    dataDeAtualizacao:Date 
}
