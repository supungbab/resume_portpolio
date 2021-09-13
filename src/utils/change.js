function change(name,image,title,info){
    const $h1=document.querySelector('.projectIntro > h1')
    const $h3=document.querySelector('.projectIntro > h3')
    const $h2=document.querySelector('.projectIntro > h2')
    const $project=document.querySelector('.project')
    $h1.innerHTML=name;
    $h3.innerHTML=title;
    $h2.innerHTML=info;
    $project.style.backgroundImage= `linear-gradient(
        to bottom,
        rgba(32, 35, 40, 0),
        rgba(32, 35, 40, 0),
        rgba(32, 35, 40, 0.8),
        rgba(32, 35, 40, 1)),
    url("${image}")`

    const $slides = document.querySelectorAll('.slide')
    $slides.forEach((slide)=>{
        slide.className=slide.getAttribute("select")===name?"slide img-sel":"slide"
    })
}