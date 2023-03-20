const { connect, disconnect } = require('../config/db.config');
const { Transaction } = require('../model/transaction.model');
const logger = require('../logger/api.logger');

class TransactionRepository {

    constructor() {
        connect();
    }

    async getTransactions() {
        const transactions = await Transaction.find({});
        console.log('tasks:::', transactions);
        return transactions;
    }

}

module.exports = new TransactionRepository();