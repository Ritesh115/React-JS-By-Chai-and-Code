import { useEffect , useState } from "react";

//1.this hook returns a data
function useCurrencyInfo(currency){
  return(
    //2.useEffect called
    useEffect( () =>{

    } , [currency] )
  );
}