let hr_btn = document.getElementById('selection_btn_hr');
let way1_btn = document.getElementById('selection_btn_1way');
let hr_form = document.getElementById('hr_form');
let way1_form = document.getElementById('way1_form');

hr_btn.addEventListener('click', ()=>{
    way1_btn.classList.add('unselected');
    hr_btn.classList.remove('unselected');
    hr_form.classList.remove('none');
    way1_form.classList.add('none');
})

way1_btn.addEventListener('click', ()=>{
    way1_btn.classList.remove('unselected');
    hr_btn.classList.add('unselected');
    hr_form.classList.add('none');
    way1_form.classList.remove('none');
})