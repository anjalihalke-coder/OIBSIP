/* --------- Language & Theme -------------- */

const translations = {
    en: {
        nav_how: "How it works", nav_catalog: "Catalog", nav_stories: "Stories",
        nav_feedback: "Feedback", nav_cta: "Find your nearest shed",
        hero_eyebrow: "A neighbourhood tool library",
        hero_title: "Why <em>own</em> a drill<br>you'll use twice a year?",
        hero_sub: "The Lending Shed is a member-run library of tools, tested and shelved by neighbours, so the whole street doesn't need six identical ladders sitting in six identical garages.",
        hero_cta_primary: "Find your nearest shed", hero_cta_ghost: "See how borrowing works",
        peg_lbl: "tools shared",
        how_eyebrow: "How it works", how_title: "Borrowing beats buying, three ways",
        how_sub: "No app, no deposit, no fuss. Just a logbook on a clipboard and a community that keeps each other honest.",
        step1_tag: "Step one", step1_title: "Sign the logbook",
        step1_desc: "Stop by any shed, write down what you're taking and when you'll bring it back. That's the whole membership process.",
        step2_tag: "Step two", step2_title: "Use it for the weekend",
        step2_desc: "Most loans run three days, long enough to finish the fence, fix the bike, or hang the shelves properly.",
        step3_tag: "Step three", step3_title: "Return it clean",
        step3_desc: "Wipe it down, hang it back on its peg, and cross your name off. The next neighbour is already on the list.",
        catalog_eyebrow: "What's on the wall", catalog_title: "A small library, well stocked",
        catalog_sub: "Every shed carries the same core set, checked and serviced after each return.",
        tool_drills: "Power drills", tool_drills_stock: "12 in stock",
        tool_saws: "Hand saws", tool_saws_stock: "8 in stock",
        tool_toolboxes: "Toolboxes", tool_toolboxes_stock: "15 in stock",
        tool_pressurewashers: "Pressure washers", tool_pressurewashers_stock: "4 in stock",
        tool_ladders: "Ladders", tool_ladders_stock: "6 in stock",
        tool_paintsprayers: "Paint sprayers", tool_paintsprayers_stock: "5 in stock",
        tool_gardenforks: "Garden forks", tool_gardenforks_stock: "9 in stock",
        tool_wheelbarrows: "Wheelbarrows", tool_wheelbarrows_stock: "3 in stock",
        stories_eyebrow: "From the logbook", stories_title: "Neighbours, on borrowing",
        stories_sub: "Three entries pulled from the shed's actual sign-out sheet.",
        testi1_quote: "Borrowed the pressure washer for a Saturday and finally got the moss off the patio. Would've cost more to buy one than to hire someone.",
        testi1_role: "Member since 2025",
        testi2_quote: "I've fixed three neighbours' fences with the same borrowed drill. We've started leaving notes for each other in the logbook.",
        testi2_role: "Member since 2026",
        testi3_quote: "As a renter, owning tools never made sense. The shed means I can still hang shelves and fix what breaks.",
        testi3_role: "Member since 2026",
        feedback_eyebrow: "Customer Feedback", feedback_title: "What our neighbours say",
        feedback_sub: "Share your experience and read feedback from our lending shed members.",
        feedback_name_ph: "Your Name", feedback_message_ph: "Write your feedback...",
        feedback_submit: "Submit Feedback", feedback_thankyou: "Thank you for your feedback!",
        delete_label: "Delete", member_since: "Member since",
        findshed_eyebrow: "Find a Shed", findshed_title: "Locate a Lending Shed near you",
        findshed_sub: "Enter your location and discover the nearest community tool library.",
        findshed_placeholder: "Enter your location", findshed_button: "Search Shed",
        shed_enter_location: "Please enter your location.",
        shed_map_loading: "Map is still loading, please try again in a moment.",
        shed_searching: "Searching for sheds near",
        shed_not_found: "We couldn't find",
        shed_not_found_suffix: "Try a more specific address, area, or city.",
        shed_nearest_prefix: "Nearest shed to",
        shed_km_away: "km away",
        shed_hours: "Open: Monday - Saturday | 9 AM - 6 PM",
        footer_tagline: "A volunteer-run network of tool libraries. Borrow more, own less, build something with the neighbours.",
        footer_visit: "Visit", footer_contact: "Contact", footer_follow: "Follow",
        footer_instagram: "Instagram", footer_facebook: "Facebook group", footer_newsletter: "Newsletter",
        footer_copy: "© 2026 The Lending Shed. Run by volunteers, for neighbours.",
        footer_builtwith: "Built with care, not capital."
    },
    hi: {
        nav_how: "यह कैसे काम करता है", nav_catalog: "सूची", nav_stories: "अनुभव",
        nav_feedback: "प्रतिक्रिया", nav_cta: "नज़दीकी शेड खोजें",
        hero_eyebrow: "एक मोहल्ले की टूल लाइब्रेरी",
        hero_title: "ऐसी ड्रिल <em>खरीदें</em> क्यों<br>जो साल में दो बार चले?",
        hero_sub: "द लेंडिंग शेड पड़ोसियों द्वारा चलाई जाने वाली टूल लाइब्रेरी है, ताकि पूरी गली को छह जैसी सीढ़ियाँ अलग-अलग गैराज में रखने की ज़रूरत न पड़े।",
        hero_cta_primary: "नज़दीकी शेड खोजें", hero_cta_ghost: "उधार लेने का तरीका देखें",
        peg_lbl: "उपकरण साझा किए गए",
        how_eyebrow: "यह कैसे काम करता है", how_title: "खरीदने से बेहतर है उधार लेना",
        how_sub: "कोई ऐप नहीं, कोई जमा राशि नहीं। बस एक लॉगबुक और एक-दूसरे पर भरोसा करने वाला समुदाय।",
        step1_tag: "चरण एक", step1_title: "लॉगबुक में लिखें",
        step1_desc: "किसी भी शेड पर जाएँ, लिखें कि आप क्या ले जा रहे हैं और कब वापस लाएंगे। बस यही पूरी सदस्यता प्रक्रिया है।",
        step2_tag: "चरण दो", step2_title: "सप्ताहांत में उपयोग करें",
        step2_desc: "अधिकतर उधारी तीन दिन की होती है, इतना समय बाड़ ठीक करने या साइकिल सुधारने के लिए काफी है।",
        step3_tag: "चरण तीन", step3_title: "साफ करके लौटाएं",
        step3_desc: "इसे पोंछें, वापस उसकी जगह पर टांगें, और अपना नाम सूची से हटा दें। अगला पड़ोसी पहले से इंतज़ार में है।",
        catalog_eyebrow: "दीवार पर क्या है", catalog_title: "छोटी पर भरपूर लाइब्रेरी",
        catalog_sub: "हर शेड में एक जैसा मुख्य सेट होता है, हर वापसी के बाद जाँचा और सर्विस किया जाता है।",
        tool_drills: "पावर ड्रिल", tool_drills_stock: "12 उपलब्ध",
        tool_saws: "हाथ की आरी", tool_saws_stock: "8 उपलब्ध",
        tool_toolboxes: "टूलबॉक्स", tool_toolboxes_stock: "15 उपलब्ध",
        tool_pressurewashers: "प्रेशर वॉशर", tool_pressurewashers_stock: "4 उपलब्ध",
        tool_ladders: "सीढ़ियाँ", tool_ladders_stock: "6 उपलब्ध",
        tool_paintsprayers: "पेंट स्प्रेयर", tool_paintsprayers_stock: "5 उपलब्ध",
        tool_gardenforks: "बगीचे के कांटे", tool_gardenforks_stock: "9 उपलब्ध",
        tool_wheelbarrows: "ठेला", tool_wheelbarrows_stock: "3 उपलब्ध",
        stories_eyebrow: "लॉगबुक से", stories_title: "पड़ोसी, उधार लेने के अनुभव",
        stories_sub: "शेड की असली साइन-आउट शीट से लिए गए तीन अनुभव।",
        testi1_quote: "शनिवार के लिए प्रेशर वॉशर उधार लिया और आखिरकार आँगन की काई साफ की। खरीदने से सस्ता पड़ा।",
        testi1_role: "सदस्य 2025 से",
        testi2_quote: "इसी उधार ली गई ड्रिल से मैंने तीन पड़ोसियों की बाड़ ठीक की। अब हम लॉगबुक में एक-दूसरे के लिए नोट्स छोड़ते हैं।",
        testi2_role: "सदस्य 2026 से",
        testi3_quote: "किराएदार होने के नाते औज़ार खरीदना समझ नहीं आता था। शेड की वजह से मैं फिर भी शेल्फ लगा और चीज़ें ठीक कर पाता हूँ।",
        testi3_role: "सदस्य 2026 से",
        feedback_eyebrow: "ग्राहक प्रतिक्रिया", feedback_title: "हमारे पड़ोसी क्या कहते हैं",
        feedback_sub: "अपना अनुभव साझा करें और अन्य सदस्यों की प्रतिक्रिया पढ़ें।",
        feedback_name_ph: "आपका नाम", feedback_message_ph: "अपनी प्रतिक्रिया लिखें...",
        feedback_submit: "प्रतिक्रिया भेजें", feedback_thankyou: "आपकी प्रतिक्रिया के लिए धन्यवाद!",
        delete_label: "हटाएं", member_since: "सदस्य",
        findshed_eyebrow: "शेड खोजें", findshed_title: "अपने पास की लेंडिंग शेड खोजें",
        findshed_sub: "अपना स्थान दर्ज करें और नज़दीकी टूल लाइब्रेरी खोजें।",
        findshed_placeholder: "अपना स्थान दर्ज करें", findshed_button: "शेड खोजें",
        shed_enter_location: "कृपया अपना स्थान दर्ज करें।",
        shed_map_loading: "मानचित्र अभी लोड हो रहा है, कृपया थोड़ी देर बाद पुनः प्रयास करें।",
        shed_searching: "के पास शेड खोजे जा रहे हैं",
        shed_not_found: "हमें नहीं मिला",
        shed_not_found_suffix: "कृपया अधिक स्पष्ट पता, क्षेत्र या शहर लिखें।",
        shed_nearest_prefix: "के लिए निकटतम शेड",
        shed_km_away: "किमी दूर",
        shed_hours: "खुला: सोमवार - शनिवार | सुबह 9 - शाम 6",
        footer_tagline: "स्वयंसेवकों द्वारा चलाया जाने वाला टूल लाइब्रेरी नेटवर्क। कम खरीदें, ज़्यादा उधार लें, पड़ोसियों के साथ कुछ बनाएं।",
        footer_visit: "जाएं", footer_contact: "संपर्क", footer_follow: "फॉलो करें",
        footer_instagram: "इंस्टाग्राम", footer_facebook: "फेसबुक ग्रुप", footer_newsletter: "न्यूज़लेटर",
        footer_copy: "© 2026 द लेंडिंग शेड। स्वयंसेवकों द्वारा, पड़ोसियों के लिए।",
        footer_builtwith: "देखभाल से बना, पूंजी से नहीं।"
    },
    mr: {
        nav_how: "हे कसं चालतं", nav_catalog: "यादी", nav_stories: "अनुभव",
        nav_feedback: "प्रतिक्रिया", nav_cta: "जवळचा शेड शोधा",
        hero_eyebrow: "शेजारच्या परिसरातील टूल लायब्ररी",
        hero_title: "वर्षातून दोनदाच वापरणार असाल तर ड्रिल <em>का घ्यायची</em>?",
        hero_sub: "द लेंडिंग शेड ही शेजाऱ्यांनी चालवलेली टूल लायब्ररी आहे, जेणेकरून प्रत्येक घरात सारखीच शिडी ठेवायची गरज उरत नाही.",
        hero_cta_primary: "जवळचा शेड शोधा", hero_cta_ghost: "उधार कसं घ्यायचं ते पहा",
        peg_lbl: "साधनं शेअर केली",
        how_eyebrow: "हे कसं चालतं", how_title: "विकत घेण्यापेक्षा उधार घेणं सोपं",
        how_sub: "कोणतंही अ‍ॅप नाही, ठेव नाही. फक्त एक लॉगबुक आणि एकमेकांवर विश्वास ठेवणारा समुदाय.",
        step1_tag: "पायरी एक", step1_title: "लॉगबुकमध्ये नोंद करा",
        step1_desc: "कोणत्याही शेडला भेट द्या, काय नेत आहात आणि कधी परत आणणार ते लिहा. हीच संपूर्ण सदस्यता प्रक्रिया आहे.",
        step2_tag: "पायरी दोन", step2_title: "वीकेंडला वापरा",
        step2_desc: "बहुतेक कर्ज तीन दिवसांचं असतं, कुंपण दुरुस्त करायला किंवा सायकल ठीक करायला पुरेसं.",
        step3_tag: "पायरी तीन", step3_title: "स्वच्छ करून परत करा",
        step3_desc: "पुसून घ्या, जागेवर टांगा आणि यादीतून नाव काढा. पुढचा शेजारी आधीच वाट पाहतोय.",
        catalog_eyebrow: "भिंतीवर काय आहे", catalog_title: "छोटी पण भरलेली लायब्ररी",
        catalog_sub: "प्रत्येक शेडमध्ये तेच मुख्य साहित्य असतं, प्रत्येक परतीनंतर तपासलं जातं.",
        tool_drills: "पॉवर ड्रिल", tool_drills_stock: "12 उपलब्ध",
        tool_saws: "हाताची करवत", tool_saws_stock: "8 उपलब्ध",
        tool_toolboxes: "टूलबॉक्स", tool_toolboxes_stock: "15 उपलब्ध",
        tool_pressurewashers: "प्रेशर वॉशर", tool_pressurewashers_stock: "4 उपलब्ध",
        tool_ladders: "शिडी", tool_ladders_stock: "6 उपलब्ध",
        tool_paintsprayers: "पेंट स्प्रेयर", tool_paintsprayers_stock: "5 उपलब्ध",
        tool_gardenforks: "बागेचे काटे", tool_gardenforks_stock: "9 उपलब्ध",
        tool_wheelbarrows: "हातगाडी", tool_wheelbarrows_stock: "3 उपलब्ध",
        stories_eyebrow: "लॉगबुकमधून", stories_title: "शेजारी, उधार घेण्याबद्दल",
        stories_sub: "शेडच्या खऱ्या साइन-आउट शीटमधून घेतलेले तीन अनुभव.",
        testi1_quote: "शनिवारसाठी प्रेशर वॉशर उधार घेतला आणि अंगणातलं शेवाळ साफ केलं. विकत घेण्यापेक्षा स्वस्त पडलं.",
        testi1_role: "सदस्य 2025 पासून",
        testi2_quote: "याच उधार घेतलेल्या ड्रिलने मी तीन शेजाऱ्यांचं कुंपण दुरुस्त केलं. आता आम्ही लॉगबुकमध्ये एकमेकांसाठी नोंदी ठेवतो.",
        testi2_role: "सदस्य 2026 पासून",
        testi3_quote: "भाडेकरू असल्याने साधनं विकत घेणं योग्य वाटत नव्हतं. शेडमुळे मी अजूनही शेल्फ लावू शकतो आणि दुरुस्ती करू शकतो.",
        testi3_role: "सदस्य 2026 पासून",
        feedback_eyebrow: "ग्राहक प्रतिक्रिया", feedback_title: "आमचे शेजारी काय म्हणतात",
        feedback_sub: "तुमचा अनुभव शेअर करा आणि इतर सदस्यांच्या प्रतिक्रिया वाचा.",
        feedback_name_ph: "तुमचं नाव", feedback_message_ph: "तुमची प्रतिक्रिया लिहा...",
        feedback_submit: "प्रतिक्रिया पाठवा", feedback_thankyou: "तुमच्या प्रतिक्रियेबद्दल धन्यवाद!",
        delete_label: "काढून टाका", member_since: "सदस्य",
        findshed_eyebrow: "शेड शोधा", findshed_title: "तुमच्या जवळचा लेंडिंग शेड शोधा",
        findshed_sub: "तुमचं ठिकाण टाका आणि जवळची टूल लायब्ररी शोधा.",
        findshed_placeholder: "तुमचं ठिकाण टाका", findshed_button: "शेड शोधा",
        shed_enter_location: "कृपया तुमचं ठिकाण टाका.",
        shed_map_loading: "नकाशा अजून लोड होतोय, कृपया थोड्या वेळाने पुन्हा प्रयत्न करा.",
        shed_searching: "जवळील शेड शोधत आहोत",
        shed_not_found: "आम्हाला सापडलं नाही",
        shed_not_found_suffix: "कृपया अधिक स्पष्ट पत्ता, परिसर किंवा शहर टाका.",
        shed_nearest_prefix: "साठी सर्वात जवळचा शेड",
        shed_km_away: "किमी अंतरावर",
        shed_hours: "उघडं: सोमवार - शनिवार | सकाळी 9 - संध्याकाळी 6",
        footer_tagline: "स्वयंसेवकांनी चालवलेलं टूल लायब्ररी नेटवर्क. कमी विकत घ्या, जास्त उधार घ्या, शेजाऱ्यांसोबत काहीतरी घडवा.",
        footer_visit: "भेट द्या", footer_contact: "संपर्क", footer_follow: "फॉलो करा",
        footer_instagram: "इंस्टाग्राम", footer_facebook: "फेसबुक ग्रुप", footer_newsletter: "न्यूजलेटर",
        footer_copy: "© 2026 द लेंडिंग शेड. स्वयंसेवकांनी, शेजाऱ्यांसाठी.",
        footer_builtwith: "काळजीने बनवलं, भांडवलाने नाही."
    }
};

let currentLang = localStorage.getItem("lang") || "en";

function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
}

function applyLanguage(lang) {

    currentLang = translations[lang] ? lang : "en";
    localStorage.setItem("lang", currentLang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        const key = el.getAttribute("data-i18n");
        el.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
        const key = el.getAttribute("data-i18n-html");
        el.innerHTML = t(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
        const key = el.getAttribute("data-i18n-placeholder");
        el.setAttribute("placeholder", t(key));
    });

    const langSwitch = document.getElementById("langSwitch");
    if (langSwitch) langSwitch.value = currentLang;

    // Re-render dynamic feedback list and any shed result in the new language
    if (typeof renderFeedback === "function") renderFeedback();
}

function applyTheme(theme) {

    const resolved = theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", resolved);
    localStorage.setItem("theme", resolved);

    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) themeToggle.textContent = resolved === "dark" ? "☀️" : "🌙";
}

document.addEventListener("DOMContentLoaded", function () {

    const savedTheme = localStorage.getItem("theme") ||
        (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    applyTheme(savedTheme);
    applyLanguage(currentLang);

    const langSwitch = document.getElementById("langSwitch");
    if (langSwitch) {
        langSwitch.addEventListener("change", function (e) {
            applyLanguage(e.target.value);
        });
    }

    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            const isDark = document.documentElement.getAttribute("data-theme") === "dark";
            applyTheme(isDark ? "light" : "dark");
        });
    }
});

/* --------- Feedback ------------ */

const feedbackForm = document.getElementById("feedbackForm");

if (feedbackForm) {

    feedbackForm.addEventListener("submit", function(e) {

        e.preventDefault();

        let name = document.getElementById("name").value;
        let message = document.getElementById("message").value;


        let feedback = {
            name: name,
            message: message,
            date: new Date().getFullYear()
        };


        let feedbackData = JSON.parse(localStorage.getItem("feedback")) || [];


        feedbackData.push(feedback);


        localStorage.setItem("feedback", JSON.stringify(feedbackData));


        alert(t("feedback_thankyou"));


        feedbackForm.reset();


        // Redirect to home page
        window.location.href = "index.html";

    });

}


const feedbackList = document.getElementById("feedback-list");


function renderFeedback(){

    if(!feedbackList) return;

    let feedbackData = JSON.parse(localStorage.getItem("feedback")) || [];

    feedbackList.innerHTML = "";

    feedbackData.forEach(function(item,index){


        feedbackList.innerHTML += `

        <div class="testi">

            <p class="quote">
            "${item.message}"
            </p>

            <div class="who">
            ${item.name}
            </div>

            <div class="role">
            ${t("member_since")} ${item.date}
            </div>


            <button onclick="deleteFeedback(${index})">
            ${t("delete_label")}
            </button>

        </div>

        `;


    });

}

renderFeedback();


function deleteFeedback(index){


    let feedbackData = JSON.parse(localStorage.getItem("feedback")) || [];


    feedbackData.splice(index,1);


    localStorage.setItem("feedback",JSON.stringify(feedbackData));


    location.reload();

}

/* -------------- Finding Shed ------------- */

let map;
let geocoder;
let userMarker;

// Shared source of truth for shed locations — used by both the map
// markers and the "nearest shed" search.
const sheds = [
    {
        name: "Pune Lending Shed",
        lat: 18.5204,
        lng: 73.8567
    },
    {
        name: "MITAOE Community Shed",
        lat: 18.6305,
        lng: 73.7997
    }
];

// Distance between two lat/lng points in km (haversine formula)
function distanceKm(lat1, lng1, lat2, lng2) {

    const toRad = deg => deg * Math.PI / 180;
    const R = 6371;

    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);

    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

function findShed() {

    let locationValue = document.getElementById("location").value.trim();
    let result = document.getElementById("shed-result");

    if (locationValue === "") {
        result.innerHTML = `
        <div class="testi">
        <p>${t("shed_enter_location")}</p>
        </div>
        `;
        return;
    }

    if (!map || !window.google) {
        result.innerHTML = `
        <div class="testi">
        <p>${t("shed_map_loading")}</p>
        </div>
        `;
        return;
    }

    if (!geocoder) {
        geocoder = new google.maps.Geocoder();
    }

    result.innerHTML = `
    <div class="testi">
    <p>${t("shed_searching")} "${locationValue}"...</p>
    </div>
    `;

    geocoder.geocode({ address: locationValue }, function (results, status) {

        console.log("Geocoder status:", status, results);

        if (status !== "OK" || !results || !results[0]) {
            result.innerHTML = `
            <div class="testi">
            <p>${t("shed_not_found")} "${locationValue}". (${status}) ${t("shed_not_found_suffix")}</p>
            </div>
            `;
            return;
        }

        const userLat = results[0].geometry.location.lat();
        const userLng = results[0].geometry.location.lng();

        // Find the closest shed to the searched location
        let nearestShed = null;
        let nearestDistance = Infinity;

        sheds.forEach(function (shed) {
            const d = distanceKm(userLat, userLng, shed.lat, shed.lng);
            if (d < nearestDistance) {
                nearestDistance = d;
                nearestShed = shed;
            }
        });

        // Recenter the map on the searched location
        map.setCenter({ lat: userLat, lng: userLng });
        map.setZoom(12);

        // Mark the searched location itself
        if (userMarker) {
            userMarker.setMap(null);
        }

        userMarker = new google.maps.Marker({
            position: { lat: userLat, lng: userLng },
            map: map,
            title: "Your search location",
            icon: {
                url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            }
        });

        result.innerHTML = `
        <div class="testi">
        <p class="quote">
        ${t("shed_nearest_prefix")} "${locationValue}": ${nearestShed.name}
        </p>
        <div class="who">
        ${nearestDistance.toFixed(1)} ${t("shed_km_away")}
        </div>
        <div class="role">
        ${t("shed_hours")}
        </div>
        </div>
        `;
    });
}

function initMap() {

    map = new google.maps.Map(
        document.getElementById("map"),
        {
            zoom: 12,
            center: {
                lat: 18.5204,
                lng: 73.8567
            }
        }
    );

    sheds.forEach(function (shed) {

        let marker = new google.maps.Marker({
            position: {
                lat: shed.lat,
                lng: shed.lng
            },
            map: map,
            title: shed.name
        });

        let info = new google.maps.InfoWindow({
            content: `
            <h3>${shed.name}</h3>
            <p>Open: 9 AM - 6 PM</p>
            `
        });

        marker.addListener("click", function () {
            info.open(map, marker);
        });

    });

}
window.onload = initMap;

