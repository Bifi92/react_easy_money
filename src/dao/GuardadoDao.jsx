import Guardados from '../models/Guardados'

class GuardadoDao{
    
    listaGuardados = [
        new Guardados('Guardado 1', 123),
        new Guardados('Guardado 2', 456),
        new Guardados('Guardado 3', 789),
        new Guardados('Guardado 4', 159)
        ];

    getLista(){
        return this.listaGuardados;
    }

    findAll() {
        
        return this.getLista();
    }

    inserir(guardado){
        this.listaGuardados = [...this.listaGuardados, guardado];
        console.log('chegou');
    }

    getTotalGuardado(){
        let total = 0;
        this.findAll().map(
            (guardado)=>{
                total = total + guardado.valor;
            }
        );
        return total;
    }
}
 

export default GuardadoDao;