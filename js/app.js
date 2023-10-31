icon9.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('dark');
    
    if(document.documentElement.classList.contains('dark')){
        icon9.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('mode','dark');
    } else{
        icon9.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.removeItem('mode');
    }
})

if(localStorage.getItem('mode') == 'dark'){
    document.documentElement.classList.add('dark');
}
