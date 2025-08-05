function create_cv() {
    let fromdata = {};

    // Basic Details
    fromdata.name = document.querySelector('#name')?.value || '';
    fromdata.email = document.querySelector('#mail')?.value || '';
    fromdata.number = document.querySelector('#number')?.value || '';
    fromdata.about = document.querySelector('#about')?.value || '';

    // Education
    fromdata.education = [];
    document.querySelectorAll('.education').forEach(block => {
        let degree = block.querySelector('.degree')?.value || '';
        let institution = block.querySelector('.institution')?.value || '';
        let year = block.querySelector('.year')?.value || '';
        fromdata.education.push({ degree, institution, year });
    });

    // Skills
    fromdata.skills = [];
    document.querySelectorAll('.skills_input').forEach(input => {
        let skill = input?.value || '';
        if (skill.trim() !== '') fromdata.skills.push(skill);
    });

    // Experience
    fromdata.experience = [];
    document.querySelectorAll('.experience').forEach(block => {
        let company = block.querySelector('.company')?.value || '';
        let work = block.querySelector('.work')?.value || '';
        let company_year = block.querySelector('.company_year')?.value || '';
        fromdata.experience.push({ company, work, company_year });
    });

    // Render Output
    let final_cv = document.querySelector('.final_cv');

    final_cv.innerHTML = `
  <div class="left-panel">
    <h2>${fromdata.name}</h2>
    <div>
      <h3>Skills</h3>
      <ul>
        ${fromdata.skills.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
    </div>
    <div>
      <h3>Contact</h3>
      <p>${fromdata.email}</p>
      <p>${fromdata.number}</p>
    </div>
  </div>

  <div class="right-panel">
    <div>
      <h3 class="section-title">Profile</h3>
      <p>${fromdata.about}</p>
    </div>
    <div>
      <h3 class="section-title">Education</h3>
      ${fromdata.education.map(edu => `
        <p><strong>${edu.degree}</strong> at ${edu.institution} ${edu.year}</p>
      `).join('')}
    </div>
    <div>
      <h3 class="section-title">Experience</h3>
      ${fromdata.experience.map(exp => `
        <p><strong>${exp.company}</strong> - ${exp.company_year}</p>
        <p>${exp.work}</p>
      `).join('')}
    </div>
  </div>
`;

}
