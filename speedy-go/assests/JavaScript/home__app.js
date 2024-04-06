const translations = {
    en: {
        Partners: 'Partners',
        Service: 'Service',
        joinUs: 'Join Us',
        aboutUs: 'About Us',
        submit: 'Submit',
        copyRight: 'All right reserved. Speedy_Go &copy; 2023',
        footerMain: 'An application to solve problems related to transportation inside the east qantra',
        terms: 'Term of Service',
        Privacy: 'Privacy Policy',
        legal: 'legal documents',
        careAbout:'care about',
        cost:'cost',
        costContent:`It allows users to negotiate <br> the price, and its prices are <br> better than most popular <br> programs`,
        Journey:'Journey',
        JourneyContent:'brings convenience to users fingertips,  allowing them to book a ride with ease wherever and whenever need transportation.',
        rate:'rate',
        rateContent:'There is a review of all reviews to help create an environment conducive to use',
        showMore:'show more ',
        Opinions:'Opinions',
        chooseUs:'why choose us',
        problem:'Have Problem',
        qantra:'in  qantra before our app',
        name: "Name",
        email:"Email Address",
        prob:'problem',
        submit: 'submit',
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
        careAbout : "يهتم ب",
        cost:"التكلفة",
        costContent:'يتيح للمستخدمين التفاوض على السعر، كما أن أسعاره أفضل من معظم البرامج المشهورة',
        Journey:"الرحلة",
        JourneyContent:'يوفر الراحة للمستخدمين في متناول أيديهم، مما يسمح لهم بحجز رحلة بسهولة أينما ومتى احتاجوا إلى وسائل النقل.',
        rate:"التقييم",
        rateContent:'هناك مراجعة لجميع المراجعات للمساعدة في خلق بيئة مناسبة للاستخدام',
        showMore:'عرض المزيد',
        Opinions:'الأراء',
        chooseUs:'لماذا نحن',
        problem:'لديك مشكلة',
        qantra:'  في القنطرة قبل تطبيقنا',
        name: "اسمك ",
        email:"البريد الإلكتروني",
        prob:'مشكلة',
        submit: 'ارسل',
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
    const lineOne = document.querySelectorAll(".line-one");
    const lineTwo = document.querySelectorAll(".line-two");
    const cardImg = document.querySelectorAll(".card-img");
    const mainSectionBackground = "./assests/Images/Rectangle731.png";
    var mainSectionBackgroundChange = document.querySelectorAll(".main-section")
    const womanArabic = document.querySelectorAll(".womanArabic")

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
        lineOne.forEach(el => el.style.right = '8%');
        lineTwo.forEach(el => el.style.right = '10%');
        cardImg.forEach(el => el.style.transform = 'translateX(-50%)');
        mainSectionBackgroundChange.forEach(el => el.style.backgroundImage = `url('${mainSectionBackground}')`);
        womanArabic.forEach(el => el.src = './assests/Images/womanArabic.png');
        womanArabic.forEach(el => el.style.transform = 'translateX(60%) translateY(3%)');

        
        
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
        lineOne.forEach(el => el.style.right = '');
        lineTwo.forEach(el => el.style.right = '');
        cardImg.forEach(el => el.style.transform = '');
        mainSectionBackgroundChange.forEach(el => el.style.backgroundImage = "");
        womanArabic.forEach(el => el.src = './assests/Images/Image(35)(1)(1) 1.png')
        womanArabic.forEach(el => el.style.transform = '');
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
const imageToToggle = document.getElementById('imageToToggle');
var darkMainSection = document.getElementById('dark-main');
const savedLang = localStorage.getItem('lang') || 'en'; // Default to English if nothing is stored
const language = savedLang;
const darkMainReversedOne = './assests/Images/Rectangle731dark.png' ;

if(localStorage.getItem('darkarabic')){
    darkMainSection.style.backgroundImage = `url('${darkMainReversedOne}')`;
    console.log('omar')
}

if (theme === 'dark-mode') {
    document.body.classList.add('dark-mode');
    // Optionally, change the image src when in dark mode
    imageToToggle.src = './assests/Images/snapedit_17097712656458 dark.png';
    darkMainSection.classList.add("darkMain");
    
    if (language === 'ar') {
        // Add the darkMainReversed class to darkMainSection
        darkMainSection.style.backgroundImage = `url('${darkMainReversedOne}')`;
        console.log('hello')
        localStorage.setItem('darkarabic', 'true')
      }
};

const toggle = document.querySelector('.toggle-mode');
const sun = document.querySelector('.sun-toggle');
const moon = document.querySelector('.moon-toggle');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode'); // Save dark mode in local storage
        imageToToggle.src = './assests/Images/snapedit_17097712656458 dark.png'
        darkMainSection.classList.add("darkMain");
        if (language === 'ar') {
            // Add the darkMainReversed class to darkMainSection
            darkMainSection.style.backgroundImage = `url('${darkMainReversedOne}')`;
            console.log('hello')
            localStorage.setItem('darkarabic', 'true')
          }else{
            darkMainSection.style.backgroundImage = './assests/Images/Rectangle731.png';
          }
    
        toggleMoonMode(true); // Toggle moon mode and save state

    } else {
        localStorage.removeItem('theme'); // Remove dark mode from local storage
        imageToToggle.src = './assests/Images/snapedit_1709771265648 1.png';
        darkMainSection.classList.remove("darkMain");
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
};

// Function to toggle dark mode and adjust the background image based on the language
const toggleDarkMode = (theme, language) => {
    document.body.classList.toggle('dark-mode', theme);
    if (theme && language === 'ar') {
        darkMainSection.classList.add("darkMainReversed");
        localStorage.setItem('darkModeArabic', 'true');
    } else {
        darkMainSection.classList.remove("darkMainReversed");
        localStorage.removeItem('darkModeArabic');
    }
};

