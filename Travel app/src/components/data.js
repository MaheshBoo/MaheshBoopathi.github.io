import React, {useEffect , useState} from "react";
import axios from "axios";

function Read(){
    const [serverData, setServerData] = useState("");
     useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = axios.get("http://localhost:3000/readfromserver");
                const dataFromServer = response.data.message;
                setServerData(dataFromServer);
            }
            catch(error){
                console.log("Error fetching data:",error);
            }
        };
        fetchData();
     },[]);

     return(
        <div>
            {serverData}
        </div>
     );
}

export default Read;


function Write(){
     let[inputValue, setInputValue]=useState("");
     const saveData =async()=>{
        try{
            await axios.post("http://localhost:3000/writetodatabase", {content: inputValue})
            console.log("Data: ",inputValue);
            alert("Data saved:",inputValue);
        }
        catch(error){
            console.log("error while saving data: ",error.message);
        }
     }

     return(
        <div>
            <input type="string" placeholder="enter" value={inputValue}
            onChange={e=>setInputValue(e.target.value)}/>
            <button onClick={saveData}>save the data</button>
        </div>
     )
}

export {Write};