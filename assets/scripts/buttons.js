document.addEventListener('DOMContentLoaded',()=>{
    const link_vacancies = document.getElementById('see-vacancies'); 

    link_vacancies.addEventListener('mouseover',()=>{
        link_vacancies.style.setProperty('color', '#E14072');
    });

    link_vacancies.addEventListener('mouseout',()=>{
        link_vacancies.style.setProperty('color','');
    });
});
