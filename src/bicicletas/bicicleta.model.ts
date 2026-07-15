import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ModeloModel } from "../modelo/modelo.model";

@Entity("bicicletas")
export class BicicletaModel {
    @PrimaryGeneratedColumn("uuid")
    id: string 

    @ManyToMany(() => ModeloModel)
    @JoinColumn({name: "modelo_id"})
    modelo: ModeloModel

    @Column()
    status: boolean
    
    @CreateDateColumn({name: "dt_cadastro", update: false})
    dataCadrastro: Date
    
    @CreateDateColumn({name: "dt_atualizacao", update: true})
    dataDeAtualizacao:Date 
}
