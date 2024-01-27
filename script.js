//scrolltoView
const scrollView = () => {
    //doms
    const navMenu = document.querySelectorAll('li');
    const section = document.querySelectorAll('section');
    //function to scroll
     const scroll = (sec) => sec.scrollIntoView({behavior: 'smooth'})
    
     //addEventListener
     navMenu[0].addEventListener('click', () => scroll(section[0]))
     navMenu[1].addEventListener('click', () => scroll(section[1]))
     navMenu[2].addEventListener('click', () => scroll(section[2]))
     navMenu[3].addEventListener('click', () => scroll(section[3]))

     //addEventListener the toggleList in Small Screens
}
scrollView();

//toggleIcon 
const toggleIcon = document.querySelectorAll('i')[0].addEventListener('click', () => {
    //get the toggleDiv Doms and Spans
    const toggleList = document.getElementById("toggleList");
    //then toggle
    toggleList.classList.toggle("hidden")
    toggleList.classList.toggle("flex")
    
    //for list scroll
    const toggleScrollView = () => {
    //get the doms
        const toggleNavs = document.querySelectorAll('span');
        const section = document.querySelectorAll('section');

    //function to scroll
        const scroll = (sec) => sec.scrollIntoView({behavior: 'smooth'})

    //addEventListner the toggleNavs
        toggleNavs[0].addEventListener('click', () => scroll(section[0]))
        toggleNavs[1].addEventListener('click', () => scroll(section[1]))
        toggleNavs[2].addEventListener('click', () => scroll(section[2]))
        toggleNavs[3].addEventListener('click', () => scroll(section[3]))
    }
    toggleScrollView();
   

})



