//HERE WE WILL CREATE ARE OWN REACT library.

//3.
function customRender(reactElement , mainContainer){
  
    /*const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children; 
    domElement.setAttribute('href' , reactElement.props.href )
    domElement.setAttribute('target' , reactElement.props.target )
    mainContainer.appendChild(domElement)*/
     //problrm is that if myltiple attribyte is there wt shoyld we do

     //V-2
     const domElement = document.createElement(reactElement.type);
     domElement.innerHTML = reactElement.children; 
     for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
     }
     mainContainer.appendChild(domElement)
}


//2.
const reactElement = {
  type : 'a' ,
  props : {
    href : 'https://google.com',
    target : '_blank'
  },
  children : 'click me to visit google'
}
//AT THE END of the day jo bhi element me deata hy vo ise tahra se react read karta hai. and elements ko reactDom me add karta hai throygh above fynction.

 
//1.
const mainContainer = document.getElementById('root');

//4.
customRender(reactElement , mainContainer);