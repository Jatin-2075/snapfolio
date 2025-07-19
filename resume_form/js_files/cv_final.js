// CSS Template Switcher
document.querySelectorAll('[data-template]').forEach(button => {
    button.addEventListener('click', () => {
        const css = button.getAttribute('data-template');
        document.querySelector('#template-style').setAttribute('href', css);
    });
});

    // Download Resume as PDF
function downloadresume () {
    const resume_content = document.getElementById('resume-content');

    const opt = {
        margin: 0,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(resume_content).save();
}