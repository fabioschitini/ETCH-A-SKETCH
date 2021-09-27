function LightenDarkenColor(col,amt) {
    var usePound = false;
    if ( col[0] == "#" ) {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if ( r > 255 ) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if ( b > 255 ) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if ( g > 255 ) g = 255;
    else if  ( g < 0 ) g = 0;

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


  let grid=document.querySelector(".grid")
  let  cell=document.querySelectorAll(".cell")
  let definer=document.querySelector("#definer")
  definer.value=""
  let colors=document.querySelector("#colors")
 
  


  for(let i=0;i<256;i++){
          console.log('yo')
          let cel=document.createElement("div")
          cel.classList.add("cell")
          grid.appendChild(cel)
         }
         let  cells=document.querySelectorAll(".cell")
         
         cells.forEach(function(cells){
            cells.addEventListener("mouseenter",function(e){
              let randomColor = Math.floor(Math.random()*16777215).toString(16)
              cells.style.background= "#" + randomColor
             })})
  


     let btn=document.querySelector("#change")
     btn.addEventListener("click",function(){
         console.log('pres mee working')
       cell.forEach(function(cells){
        cells.classList.remove("cell")
       })
    let elem = document.querySelector('.container');
elem.parentNode.removeChild(elem);


let superContainer=document.querySelector('#superContainer')

        let container1=document.createElement("div")
        container1.classList.add("container")
        superContainer.appendChild(container1)
        let grid1=document.createElement("div")
        grid1.classList.add("grid")
        container1.appendChild(grid1)
       


         let value=prompt("Please insert the number of squares you want per line")
         grid1.style['grid-template-columns']="repeat(" + value + ",2rem)";
         grid1.style['grid-template-rows']="repeat(" + value + ",2rem)";
         
         if(value<100)
         for(let i=0;i<value*value;i++){
          
     let celll=document.createElement("div")
     celll.classList.add("cell")
     grid1.appendChild(celll)
     let  cells=document.querySelectorAll(".cell")
     cells.forEach(function(cells){
      let randomColor = Math.floor(Math.random()*16777215).toString(16)
      let randomColor1= LightenDarkenColor(randomColor, -10)
       cells.addEventListener("mouseenter",function(){
        cells.style.background= "#" + randomColor1})})
    }
    else return 
     })