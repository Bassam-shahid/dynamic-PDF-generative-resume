document.getElementById('form1')?.addEventListener('submit', function(event: Event) {
    event.preventDefault(); 

    
    const profilePictureInput = document.getElementById('profilepicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    if (
        profilePictureInput && nameElement && emailElement && phoneElement &&
        educationElement && experienceElement && skillsElement
    ) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

        // Resume output HTML
        const resumeOutput = `
            <h2>Resume</h2>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilepicture">` : ''}
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Work Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            document.getElementById('downloadButton')!.style.display = 'block';
            document.getElementById('editButton')!.style.display = 'block';
            document.getElementById('shareButton')!.style.display = 'block';
        } else {
            console.error('The resume output element is missing');
        }
    } else {
        console.error('One or more form elements are missing');
    }
});


document.getElementById('downloadButton')?.addEventListener('click', () => {
    const element = document.getElementById('resumeOutput');
    if (element) {
        html2pdf().from(element).save('Resume.pdf');
    }
});


document.getElementById('editButton')?.addEventListener('click', () => {
    document.getElementById('form1')!.style.display = 'block';
    document.getElementById('resumeOutput')!.innerHTML = '';
    document.getElementById('downloadButton')!.style.display = 'none';
    document.getElementById('editButton')!.style.display = 'none';
    document.getElementById('shareButton')!.style.display = 'none';
});


document.getElementById('shareButton')?.addEventListener('click', () => {
    const shareableLink = window.location.href;
    navigator.clipboard.writeText(shareableLink).then(() => {
        alert("Link copied to clipboard!");
    });
});
