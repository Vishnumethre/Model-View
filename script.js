'use strict';
let model = document.querySelector('.modal');
let closeModel = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const showModel = document.querySelectorAll('.show-modal');
console.log(showModel.length);
showModel.forEach(val =>
{
    val.addEventListener('click', () =>
    {
        console.log(model.classList.remove('hidden'));
        overlay.classList.remove('hidden')
     })
})
    
const closeModellist = () =>
{
    model.classList.add('hidden');
    overlay.classList.add('hidden');
    }
closeModel.addEventListener('click', closeModellist);
overlay.addEventListener('click', closeModellist);

document.addEventListener('keydown', (event) =>
{
    console.log(event);
    console.log(event.key  )
});
let count = 0;
document.addEventListener('keypress', () =>
{
    if (count % 2 == 0)
    {
        model.classList.add('hidden');
        overlay.classList.add('hidden');
        count++
    }
    else {
        console.log(model.classList.remove('hidden'));
        overlay.classList.remove('hidden')
        count++;
    }
})