const translations = {
    en: {
        Partners: 'Partners',
        Service: 'Service',
        joinUs: 'Join Us',
        aboutUs: 'About Us',
        copyRight: 'All right reserved. Speedy_Go &copy; 2023',
        footerMain: 'An application to solve problems related to transportation inside the east qantra',
        terms: 'Term of Service',
        Privacy: 'Privacy Policy',
        legal: 'legal documents',
        convenient:'convenient',
        convenientContent:'brings convenience to users fingertips,  allowing them to book a ride with ease wherever  and whenever need transportation.',
        options:'options',
        car:'Moving inside or outside  the city',
        toktok:'Movement  within the  city is  always  available',
        bus:'Transportation  outside the  city has  specific times',
        rate:'Finally, an application for transportation  inside and outside east Qantra',
        safety:'safety',
        safetyContent:'prioritizes safety with features like driver identification real-time tracking, and emergency assistance enhances user confidence and satisfaction.',
    },
    ar: {
        Partners: 'الشركاء ',
        Service: 'الخدمات',
        joinUs: 'انضم لنا',
        aboutUs: 'معلومات عننا',
        copyRight: 'جميع الحقوق محفوظة. Speedy Go 2023',
        footerMain: 'تطبيق لحل المشاكل المتعلقة بالنقل داخل القنطرة شرق',
        terms: 'شروط الخدمة',
        Privacy: 'سياسة الخصوصية',
        legal: 'الوثائق القانونية',
        convenient:'مريح',
        convenientContent:'يجلب الراحة لأطراف أصابع المستخدمين، مما يسمح لهم بحجز رحلة بكل سهولة أينما كانوا ومتى تحتاج إلى وسائل النقل.',
        options:'خيارات',
        car:'نقل داخلي / خارجي',
        toktok:'نقل داخلي دائما متاح',
        bus:'نقل خارجي يحدد الأوقات',
        rate:'وأخيرا، تطبيق للنقل  داخل وخارج شرق القنطرة',
        safety:'الأمان',
        safetyContent:'يعطي الأولوية للسلامة مع ميزات مثل تحديد هوية السائق تتبع في الوقت الحقيقي، والمساعدة في حالات الطوارئ يعزز ثقة المستخدم ورضاه.',
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
    const toggle = document.querySelectorAll(".toggle-mode");
    const icons = document.querySelectorAll(".footer__icons");
    const footerLogo = document.querySelectorAll(".footer-logo");
    const copyRight = document.querySelectorAll(".copy-right");
    const footerLeft = document.querySelectorAll(".footer__left-side");
    const safetyImg = document.querySelectorAll(".safety__img");
    const rate = document.querySelectorAll(".rating");
    const starLabel = document.querySelectorAll(".rating > label");
    if (language === "ar") {
        toggle.forEach(el => el.style.padding = '0% 15% 0 0');
        icons.forEach(el => el.style.transform = 'translateX(3%)');
        footerLogo.forEach(el => el.style.transform = 'translateX(-26%)');
        copyRight.forEach(el => el.style.transform = 'translateX(-12%)');
        footerLeft.forEach(el => el.style.margin = '2% 2% 0 0');
        safetyImg.forEach(el => el.style.transform = 'translateX(-50%)');
        rate.forEach(el =>el.style.float = 'right' );
        starLabel.forEach(el =>el.style.float = 'left' );
        // starLabel.forEach(el =>{const style = window.getComputedStyle(label, '::before');
        // style.})
    } else {
        toggle.forEach(el => el.style.padding = '');
        icons.forEach(el => el.style.transform = '');
        footerLogo.forEach(el => el.style.transform = '');
        copyRight.forEach(el => el.style.transform = '');
        footerLeft.forEach(el => el.style.margin = '');
        safetyImg.forEach(el => el.style.transform = '');
        rate.forEach(el =>el.style.float = '' );
        starLabel.forEach(el =>el.style.float = '' );
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

if (theme) {
    document.body.classList.add('dark-mode');
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