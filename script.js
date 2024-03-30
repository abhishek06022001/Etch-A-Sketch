const button = document.querySelector('#setGrid');
button.addEventListener('click',function(){
    // resizeTo()
    resetGrid();
  let input = prompt("Input the grid rows u want!");
  makeGrid(input);
})
const container = document.querySelector('.container');
function makeGrid(num)
{
    for(let i = 0 ; i < num ; i++)
    {
        let row = document.createElement('div');
        row.style.display="flex";
        for( let j = 0 ; j < num ; j ++)
        {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.flexGrow ="1";
            square.style.width =`${560/num}px`;
            square.style.height = `${560/num}px`;
            square.style.backgroundColor = "pink";
            square.style.border="0.00000011rem solid white";
            square.style.boxSizing = "border-box";
            square.addEventListener('mouseover',function(){
                square.style.backgroundColor= '#E75480';
            });

            
            row.appendChild(square);

        }
        container.style.flexWrap = "wrap";
        container.appendChild(row);

    }
    
}
function resetGrid()
{
 // 
const squares = document.querySelectorAll('.square');
squares.forEach(element => {
    element.remove();
});
}
