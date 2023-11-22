import { createContext, useContext, useState } from "react"
const context = createContext("")

function Form () {
   
    const [name,setname] = useState ("")
    const [mail,setmail] = useState("")
    // const [number,setnumber ] = useState ("") 
    // for error 
    const [nerror,setnerror] = useState("")
    const [merror,setmerror] = useState("")
    // const [perror,setperror] = useState("")
    //regular expression 
    const checkmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const checkname = /^[a-zA-Z ]{2,30}$/;
    //function 
    
    const changename = (event) => {
        setname(event.target.value);
        // Validate name (you can add more validation rules as needed)
    
        setnerror(checkname.test(event.target.value)?'' : "enter the correct namme" )
      };
    
      const changemail = (event) => {
        setmail(event.target.value);
        // Validate email using the regex
        setmerror(checkmail.test(event.target.value) ? '' : 'Invalid email address');
      };
      // for result showing
      const [submitted, setsubmitted] = useState(false);
    const show = () =>
    {
    

            setsubmitted(true)
        
    }
    
    return (
        <div>

        <form>
            <div>
            <input 
            type="text" 
            placeholder="name" 
            value={name}
            onChange={changename}
            />
            {nerror && <p style={{ color: 'red' }}>{nerror}</p>}
            </div>
            <div>
              <input 
            type="mail" 
            placeholder="mail" 
            value={mail}
            onChange={changemail}
            />
            {merror && <p style={{ color: 'red' }}>{merror}</p>}
             </div>
             {/* <div>
              <input 
            type="number" 
            placeholder="number" 
            value={number}
            // onChange={changenumber}
            />
            </div> */}
            <button type="submit" onClick={show}>Submit</button>            
        </form>
        {submitted && (
        <>
          <context.Provider value={name}>
            <Fshow />
          </context.Provider>
          <context.Provider value={mail}>
            <Fshow />
          </context.Provider>
        </>
      )}
        </div>
        
    )


}
function Fshow ()
{
    const myname = useContext(context)
    
    return (
        <>
            <p>{myname}</p>
            
            </>
    )
}
export default Form;