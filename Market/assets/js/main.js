let span = document.getElementsByTagName('span');
let product = document.getElementsByTagName('product');
let product_page = Math.ceil(product.length/4);
let l =0;
let movePer = 25.34;
let maxMove = 203;

//mobile view
let mobile_view =window.matchMedia("(max-width:768px");
if(mobile_view.matches){
    movePer= 50.36;
    maxMove= 504;
}

let right_mover = ()=>{
    l= l+movePer;
    if(product == 1){l =0}
    for(const i of product)
    {
    if(l >maxMove){l = l - movePer;}
    i.computedStyleMap.left ='-' + 1 +'%';
    }
}
span[1].onclick = ()=>{right_mover();}