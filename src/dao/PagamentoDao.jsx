import Pagamentos from '../models/Pagamentos';

class PagamentoDao{
    
    getLista(){
        return [
                new Pagamentos('Pagamento 1', 123, true),
                new Pagamentos('Pagamento 2', 456, false),
                new Pagamentos('Pagamento 3', 789, true),
                new Pagamentos('Pagamento 4', 159, false)
        ];
    }

    findAll() {
        
        return this.getLista();
    }

    getTotalPagamentos(){
        let total = 0;
        this.findAll().map(
            (pagamento)=>{
                total = total + pagamento.valor;
            }
        );
        return total;
    }

    getTotalPagos(){
        let total = 0;
        this.findAll().map(
            (pagamento)=>{
                if(pagamento.isPago){
                    total = total + pagamento.valor;
                }
            }
        );
        return total;
    }

    getTotalNaoPagos(){
        let total = 0;
        this.findAll().map(
            (pagamento)=>{
                if(!pagamento.isPago){
                    total = total + pagamento.valor;
                }
            }
        );
        return total;
    }

    getTotais(){
        const total = this.getTotalPagamentos();

        const totalPago = this.getTotalPagos();

        const totalNaoPago = this.getTotalNaoPagos();

        return totalPago + ' + ' + totalNaoPago + ' = ' + total;
    }

}
 

export default PagamentoDao;