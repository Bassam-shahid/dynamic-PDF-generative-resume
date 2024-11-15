var _a, _b, _c, _d;
(_a = document.getElementById('form1')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // Page reload hone se roknay ke liye
    // Form elements ko get karte hain
    var profilePictureInput = document.getElementById('profilepicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && emailElement && phoneElement &&
        educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // Resume output HTML
        var resumeOutput = "\n            <h2>Resume</h2>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilepicture\">") : '', "\n            <p><strong>Name:</strong> ").concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Work Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            document.getElementById('downloadButton').style.display = 'block';
            document.getElementById('editButton').style.display = 'block';
            document.getElementById('shareButton').style.display = 'block';
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more form elements are missing');
    }
});
// Download PDF
(_b = document.getElementById('downloadButton')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var element = document.getElementById('resumeOutput');
    if (element) {
        html2pdf().from(element).save('Resume.pdf');
    }
});
// Edit Resume
(_c = document.getElementById('editButton')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    document.getElementById('form1').style.display = 'block';
    document.getElementById('resumeOutput').innerHTML = '';
    document.getElementById('downloadButton').style.display = 'none';
    document.getElementById('editButton').style.display = 'none';
    document.getElementById('shareButton').style.display = 'none';
});
// Shareable Link
(_d = document.getElementById('shareButton')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
    var shareableLink = window.location.href;
    navigator.clipboard.writeText(shareableLink).then(function () {
        alert("Link copied to clipboard!");
    });
});
