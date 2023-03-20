const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
                        raw_total_spend: 'number',
                        raw_num_transactions: 'number',
                        raw_num_customers: 'number',
                        median_spend_per_transaction: 'number',
                        median_spend_per_customer: 'number',
                        Average_Spending_Per_Day: 'number',
                        Average_Spending_Per_Transaction_Per_Day: 'number',
                        Number_Of_Days_Considered: 'number',
                        brand: 'string',
                        latitude_coordinate: 'number',
                        longitude_coordinate: 'number'
                });

const Transaction = mongoose.model('ohioTransaction', transactionSchema);

module.exports = {
    Transaction
}