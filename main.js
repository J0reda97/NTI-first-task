const yargs = require('yargs')

// Create add command
yargs.command({
	command: 'add',
	describe: 'Adds new student',
	builder: {
		id: {
			demandOption: true, // Required 
			type: 'number',
      primaryKey:true
		},
		name: {
			demandOption: true,
			type: 'string'
		},
    grades: {
			demandOption: true,
			type: [int],
		},
    comment: {
			type: 'string'
		},
    total: {
      type: 'number'
    }
    
	},
})
