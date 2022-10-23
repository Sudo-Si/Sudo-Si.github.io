const observer = new IntersectionObserver ((entries)=>
{
entries.forEach((entry)=>{
    console.log(entry)
    if (entry.isIntersecting){
        entry.target.classList.add('show');
    }
    else {
        entry.target.classList.remove('show');
    }
})

})
const hiddenElements = document.querySelectorAll('.hidden');

//telling observer what to observe
hiddenElements.forEach((el)=> observer.observe(el));