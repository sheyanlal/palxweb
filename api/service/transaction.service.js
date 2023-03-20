const transactionRepository  = require('../repository/transaction.repository');

class TransactionService {

    constructor() {}

    async getTransactions() {
        return await transactionRepository.getTransactions();
    }
}

module.exports = new TransactionService();