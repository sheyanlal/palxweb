const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
                FIPS_Code: 'number',
                State: 'string',
                Area_name: 'string',
                Year: 'number',
                Civilian_labor_force: 'number',
                Employed: 'number',
                Unemployed: 'number',
                Unemployment_Rate: 'number' 
                });

const Task = mongoose.model('generalCounties', taskSchema);

module.exports = {
    Task
}