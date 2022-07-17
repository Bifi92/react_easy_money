import Recebimentos from '../models/Recebimentos';

class RecebimentoDao{
    
    getLista(){
        return [
            new Recebimentos('Recebimento 1', 123),
            new Recebimentos('Recebimento 2', 456),
            new Recebimentos('Recebimento 3', 789),
            new Recebimentos('Recebimento 4', 159)
        ];
    }

    findAll() {
        
        return this.getLista();
    }

    getTotalRecebimentos(){
        let total = 0;
        this.findAll().map(
            (recebimento)=>{
                total = total + recebimento.valor;
            }
        );
        return total;
    }
}
 

export default RecebimentoDao;