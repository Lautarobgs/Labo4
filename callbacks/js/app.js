const empleados = [
    {id:1,nombre:`Maria`},
    {id:2,nombre:`Maria2`},
    {id:3,nombre:`Maria3`},
    {id:4,nombre:`Maria4`}
]

/* const getEmpleadoById = (id, callback) =>{
    const empleado = empleados.find((emp) => emp.id === id);
    if(empleado)
    {
        callback(null,empleado);
    }else{
        callback(`El empleado con id ${id} no existe`);
    }
}

// getEmpleadoById(15)///Arrow function deben convocarse luego de la declaracion, como funciones en C.
getEmpleadoById(2, (err,empleado) =>{
    if(err)
    {
        console.log("Error");
        return console.log(err);
    }
    console.log(empleado);
}); */

const salarios = [
    {id:1,salario: 4000},
    {id:2,salario: 4000},
    {id:3,salario: 4000},
    {id:4,salario: 4000},
]
const getSalarioById = (id, callback) =>{
    const salario = salarios.find((sal) => sal.id === id);
    if(salario)
    {
        callback(null,salario);
    }else{
        callback(`El salario con id ${id} no existe`);
    }
}

getSalarioById(2, (err,salario) =>{
    if(err)
    {
        console.log("Error");
        return console.log(err);
    }
    console.log(salario);
});

