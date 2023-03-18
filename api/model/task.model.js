const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({ task: 'string', 
                assignee: 'string', 
                status: 'string', 
                createDate: 'date', 
                updatedDate: 'date', 
                createdBy: 'string', 
                updatedBy: 'string',
                FIPS_Code: 'number',
                State: 'string',
                Area_name: 'string',
                Year: 'number',
                Civilian_labor_force: 'number',
                Employed: 'number',
                Unemployed: 'number',
                Unemployment_Rate: 'number' 
                },
                { timestamps: { createDate: 'created_at', updatedDate: 'updated_at'}});

const Task = mongoose.model('generalCounties', taskSchema);

module.exports = {
    Task
}