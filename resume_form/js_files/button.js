document.addEventListener('DOMContentLoaded', function (){
    function education(){
        let addedu = document.querySelector('.addededucation')
        let newedu = document.createElement('div')
        newedu.innerHTML = `
            <h4>education</h4>
            <input class="degree" type="text" placeholder="degree">
            <input class="institution" type="text" placeholder="institution">
            <input class="year" type="text" placeholder="year">`;

        addedu.appendChild(newedu)
    }

    function skills(){
        let adddedskill = document.querySelector('.addedskill')
        let newskills = document.createElement('div')
        newskills.innerHTML = `
        <input type="text" class="skills_input" placeholder="skills">`
        adddedskill.appendChild(newskills)
    }

    function addedexperience () {
        let addexperience = document.querySelector('.addedexperience')
        let newset = document.createElement('div')
        newset.innerHTML = `
            <h4>Another Experience</h4>
            <input class="company" type="text" placeholder="company's name">
            <input class="work" type="text" placeholder="what did you do">
            <input class="company_year" type="text" placeholder="year">
        `;
        addexperience.appendChild(newset)
    }

    document.querySelector('.experienceadd').addEventListener('click', addedexperience)
    document.querySelector('.skill_add').addEventListener('click', skills)
    document.querySelector('.addeducation').addEventListener('click', education)
});