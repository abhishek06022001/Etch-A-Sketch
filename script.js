
/**
 * select the button
 * prompt the user 
 * after prompting take input call make grid 
 * fill the grid 
 */
const button = document.querySelector('#setGrid');
button.addEventListener('click',function(){
  let input = prompt("Input the grid rows u want!");
  makeGrid(input);
})
const container = document.querySelector('.grid');
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
    square.style.width = '${560/input}px';
    square.style.height = '${560/input}px';
    square.style.backgroundColor = "pink";
            
            row.appendChild(square);

        }
        container.style.flexWrap = "wrap";
        container.appendChild(row);

    }
    
}
