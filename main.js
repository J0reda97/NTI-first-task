const yargs = require('yargs')

yargs.command({
	command: 'add',
	describe: 'Adds new student',
	builder: {
		id: {
			describe:'student id',
			demandOption: true, 
			type: 'number',
      		primaryKey:true
		},
		name: {
			describe:'student name',
			demandOption: true,
			type: 'string'
		},
	    grades: {
			describe:'student grades',
			demandOption: true,
			type: [int],
		},
  		  comment: {
			describe:'student comment',
			type: 'string'
		},
		    total: {
			describe:'student total grades',
   		    type: 'number'
    }
    
	},
	handler:(argv)=>{
     student.addStudent(argv.id,argv.name,argv.grades,argv.comment,argv.total)
    }
})

yargs.command({
    command:'delete',
    describe:'Delete student',
    builder:{
        id: {
			describe:'student id',
			demandOption: true, 
			type: 'number',
      		primaryKey:true
		},
    },
    handler:(argv)=>{
        student.deletestudent(argv.id)
    }
})
 
yargs.command({
    command:'read',
    describe:'Read student',
    builder:{
        id: {
			describe:'student id',
			demandOption: true, 
			type: 'number',
      		primaryKey:true
		},
    },
    handler:(argv)=>{
       student.readstudent(argv.id)
    }
})
 
yargs.command({
    command:'list',
    describe:'List students',
    handler:()=>{
        student.listN()
    }
})


console.log(yargs.argv)
