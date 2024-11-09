document.getElementById('form1')?.addEventListener('submit', function(event: Event) {
    event.preventDefault(); // Page reload ho ke liyene se roknay

  
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
        } else {
            console.error('The resume output element is missing');
        }
    } else {
        console.error('One or more form elements are missing');
    }
});
document.getElementById('form1')?.addEventListener('submit', function(event: Event) {
    event.preventDefault(); // Page reload hone se roknay ke liye

    
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
        } else {
            console.error('The resume output element is missing');
        }

        
        const downloadButton = document.getElementById('downloadButton');
        if (downloadButton) {
            downloadButton.style.display = 'block';

            
            downloadButton.addEventListener('click', function() {
                const element = document.getElementById('resumeOutput');
                if (element) {
                    html2pdf().from(element).save('Resume.pdf'); 
                }
            });
        }
    } else {
        console.error('One or more form elements are missing');
    }
});
