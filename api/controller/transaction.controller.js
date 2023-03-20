const transactionService  = require('../service/transaction.service');
const logger = require('../logger/api.logger');

class TransactionController {

    async getTransactions() {
        logger.info('Controller: getTransactions')
        return await transactionService.getTransactions();
    }
}
module.exports = new TransactionController();