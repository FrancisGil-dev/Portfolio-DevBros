//scrolltoView
const scrollView = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({behavior: 'smooth'})  
}
//toggleDarkmode
const toggle = document.getElementById('toggleIcon').addEventListener('click', () => {
    const toggleIcon = document.getElementById('toggleIcon');
    const body = document.body;
    const logo = document.querySelectorAll('h1')[0].classList.toggle('text-white')
    body.classList.add("transition-all");
    body.classList.toggle("bg-[#272829]");
    body.classList.toggle("text-white");
    
    toggleIcon.classList.remove();
    toggleIcon.classList.toggle('bi-sun');
})