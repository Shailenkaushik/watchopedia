import React, { useState } from 'react'

export default function Movie() {
    const [inputtext, setInputtext] = useState("");
    const [array, setArray] = useState(["Jawan", "Kgf"]);
    const handleAdd = (e) => {
        if (inputtext != null) {
            const dummy = array;
            dummy.push(inputtext);
            setArray(dummy);
            setInputtext("")
        }


    }
    const handleChange = (e) => {

        setInputtext(e.target.value);
    }

    return (
        <>
            <div className='row  col-12 text-white p-2'>
                <div className=' col-12 h2 text-success text-center'>Add Movie</div>
                <div className='col-8 offset-1'>
                    <input placeholder='Add Movie...' value={inputtext} onChange={handleChange} className='form-control' ></input>

                </div>
                &nbsp;
                <div className='col-2'>
                  <button className='btn btn-success  form-control' onClick={handleAdd}> ADD</button>
                </div>
                
                <div className='text-center'>


                    {array.map(name => (
                        <ul>
                            {name}
                            </ul>
                    ))}
                </div>
            </div>
        </>
    )
}
