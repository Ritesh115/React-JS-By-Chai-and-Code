import { useEffect , useState } from "react";

//1.this hook returns a data
function useCurrencyInfo(currency){
  const [data , setdata] = useState({})
  
    //2.useEffect called
    useEffect( () =>{
fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json')
.then(
  (res) => res.json()
)
.then( (res) => {
  setdata(res[currency])
} )
console.log(data);
    } , [currency] )
  
    return data;
}

export default useCurrencyInfo;