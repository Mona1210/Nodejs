/**
 * 1. uncaught error too many re-renders. react limits the number of renders to prevent an infinite loop
 * Res - Change callback function in onClick as onClick={()=>functionName} from onClick={functionName}
 * This is specifically for setter functions for flags/boolean states
 * 
 * 2. To call multiple functions in onClick
 * onClick={() => {setAddFlag(!addFlag); setSuccess("")}}
 * 
 * 3. In onClick functions use onClick{()=>{}} and not onClick{}
 * 
 *  When calling delete api, in then() call get api to fetch the latest result post deletion
 * axios.delete('http://localhost:4000/employees/'+id)
        .then(res => {
            axios.get('http://localhost:4000/employees')
            .then (res => {
                setEmployees(res.data);
            })
        })
        
 */
