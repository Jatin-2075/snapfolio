function showslide(index){
    let form = document.querySelectorAll('.form-about')
    form.forEach((sec, i) => {
        sec.style.display = (index === i)? 'block' : 'none';
    })
}