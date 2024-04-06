const translations = {
    en: {
        Partners: 'Partners',
        Service: 'Service',
        joinUs: 'Join Us',
        aboutUs: 'About Us',
        fullName: 'Full Name',
        PhoneNumber: 'Phone Number',
        email: 'E-mail',
        message: 'Message',
        submit: 'Submit',
        copyRight: 'All right reserved. Speedy_Go &copy; 2023',
        footerMain: 'An application to solve problems related to transportation inside the east qantra',
        terms: 'Term of Service',
        Privacy: 'Privacy Policy',
        legal: 'legal documents',
        mainText:'We thought about the application because we were facing a lot of problems moving around in the Qantra and outside it as well. Therefore, we hope that all new students will find comfort and a feeling of safety in moving around.',
    },
    ar: {
        Partners: 'الشركاء ',
        Service: 'الخدمات',
        joinUs: 'انضم لنا',
        aboutUs: 'معلومات عننا',
        fullName: 'الاسم كامل',
        PhoneNumber: 'رقم الموبايل',
        email: 'الأيميل',
        message: 'رسالة',
        submit: 'إرسال',
        copyRight: 'جميع الحقوق محفوظة. Speedy Go 2023',
        footerMain: 'تطبيق لحل المشاكل المتعلقة بالنقل داخل القنطرة شرق',
        terms: 'شروط الخدمة',
        Privacy: 'سياسة الخصوصية',
        legal: 'الوثائق القانونية',
        mainText:'فكرنا في التطبيق لأننا كنا نواجه الكثير من المشاكل في الحركة في القنطرة وخارجها أيضًا. ولذلك نأمل من جميع الطلاب الجدد سوف تجد الراحة والشعور بالأمان في التحرك.',
    },
};

const languageSelector = document.querySelector('.switch');
languageSelector.addEventListener("change", (event) => {
    const newLang = event.target.value;
    setLanguage(newLang);
    localStorage.setItem("lang", newLang);
});

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'en'; // Default to English if nothing is stored
    setLanguage(savedLang);
    updateLanguageSelector(savedLang);
});

const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
        const translationKey = element.getAttribute('data-i18n');
        element.textContent = translations[language][translationKey];
    });

    document.dir = language === "ar" ? "rtl" : "ltr";

    // Optionally, handle the rotation or transformation for RTL if needed
    const rotateElements = document.querySelectorAll(".rotate");
    const lamp = document.querySelectorAll(".lamp");
    const humanPhoto = document.querySelectorAll(".rec2-photo");
    const toggle = document.querySelectorAll(".toggle-mode");
    const icons = document.querySelectorAll(".footer__icons");
    const footerLogo = document.querySelectorAll(".footer-logo");
    const copyRight = document.querySelectorAll(".copy-right");
    const footerLeft = document.querySelectorAll(".footer__left-side");
    
    
    if (language === "ar") {
        rotateElements.forEach(el => el.style.transform = 'rotatey(180deg)'); // Mirroring the element for RTL
        rotateElements.forEach(el => el.style.margin = '.5% 31.7% 0 0');
        lamp.forEach(el => el.style.margin = '0% 70% 0 0');
        humanPhoto.forEach(el => el.style.margin = '0% 25% 0 0');
        toggle.forEach(el => el.style.padding = '0% 15% 0 0');
        icons.forEach(el => el.style.transform = 'translateX(3%)');
        footerLogo.forEach(el => el.style.transform = 'translateX(-26%)');
        copyRight.forEach(el => el.style.transform = 'translateX(-12%)');
        footerLeft.forEach(el => el.style.margin = '2% 2% 0 0');
        
    } else {
        rotateElements.forEach(el => el.style.transform = ''); // Reset transformation for LTR
        rotateElements.forEach(el => el.style.margin = '');
        lamp.forEach(el => el.style.margin = '');
        humanPhoto.forEach(el => el.style.margin = '');
        toggle.forEach(el => el.style.padding = '');
        icons.forEach(el => el.style.transform = '');
        footerLogo.forEach(el => el.style.transform = '');
        copyRight.forEach(el => el.style.transform = '');
        footerLeft.forEach(el => el.style.margin = '');
    }
};

// Function to update the language selector to reflect the current language
const updateLanguageSelector = (language) => {
    // Iterate over the options and set the selected attribute accordingly
    Array.from(languageSelector.options).forEach(option => {
        option.selected = option.value === language;
    });
};

const theme = localStorage.getItem('theme');
const imageToToggle = document.getElementById('imageToToggle')




if (theme === 'dark-mode') {
    document.body.classList.add('dark-mode');
    // Optionally, change the image src when in dark mode
}

const toggle = document.querySelector('.toggle-mode');
const sun = document.querySelector('.sun-toggle');
const moon = document.querySelector('.moon-toggle');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode'); // Save dark mode in local storage
        toggleMoonMode(true); // Toggle moon mode and save state
    } else {
        localStorage.removeItem('theme'); // Remove dark mode from local storage
        toggleSunMode(); // Toggle sun mode
    }
});

function toggleMoonMode(saveState = false) {
    sun.style.display = 'none'; // Hide sun icon
    moon.style.display = 'block'; // Show moon icon
    if (saveState) {
        localStorage.setItem('moonMode', 'true'); // Save moon mode state in local storage
    }
}

function toggleSunMode() {
    sun.style.display = 'block'; // Show sun icon
    moon.style.display = 'none'; // Hide moon icon
    localStorage.removeItem('moonMode'); // Remove moon mode state from local storage
}

// Check if moon mode is saved in local storage and apply it if needed
const moonModeSaved = localStorage.getItem('moonMode') === 'true';
if (moonModeSaved) {
    toggleMoonMode(); // Apply moon mode if it was saved
}