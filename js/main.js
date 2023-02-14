


window.addEventListener('load', ()=>{   
    // change grow sales block title when display <= 900px
    //title
    const growSalesBlockTitle = document.getElementsByClassName('salseGrow_title')[0];
    //section 
    const growSalesSection = document.getElementsByClassName('salseGrow')[0];
    if(window.innerWidth <= 900){
        growSalesBlockTitle.parentNode.removeChild(growSalesBlockTitle);
        const newGrowSalesTitle = document.createElement('h1');
        newGrowSalesTitle.className = 'salseGrow_title';
        newGrowSalesTitle.innerHTML = 'Кому будет полезно?'
        growSalesSection.prepend(newGrowSalesTitle);
    }
})