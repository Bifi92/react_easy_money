import PagamentoDao from './PagamentoDao';
import RecebimentoDao from './RecebimentoDao';

class BalancoDao {
    
    getTotalSobra(){
        const totalPagamentos = this.getTotalPagos();
        const totalRecebimentos = this.getTotalRecebimentos();

        return totalRecebimentos - totalPagamentos;
        
    }

    getTotalPagos(){
        const daoPagamentos = new PagamentoDao();
        let total = 0;
        daoPagamentos.findAll().map(
            (pagamento)=>{
                if(pagamento.isPago){
                    total = total + pagamento.valor;
                }
            }
        );
        return total;
    }

    getTotalRecebimentos(){
        const daoRecebimentos = new RecebimentoDao();
        let total = 0;
        daoRecebimentos.findAll().map(
            (recebimento)=>{
                total = total + recebimento.valor;
            }
        );
        return total;
    }

}
 
export default BalancoDao;