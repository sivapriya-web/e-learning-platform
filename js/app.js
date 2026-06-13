/* ==========================================
   EDUVERSE - MAIN JAVASCRIPT FILE
========================================== */

/* ==========================================
   DARK MODE
========================================== */

const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");
        }
    });
}

/* ==========================================
   COURSE SEARCH
========================================== */

function searchCourses() {

    const input =
        document.getElementById("courseSearch");

    if (!input) return;

    const filter =
        input.value.toLowerCase();

    const cards =
        document.querySelectorAll(".searchable-card");

    cards.forEach(card => {

        const title =
            card.querySelector("h3")
                .textContent
                .toLowerCase();

        if (title.includes(filter)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";
        }
    });
}

/* ==========================================
   CATEGORY FILTER
========================================== */

function filterCourses() {

    const select =
        document.getElementById("categoryFilter");

    if (!select) return;

    const value = select.value;

    const cards =
        document.querySelectorAll(".searchable-card");

    cards.forEach(card => {

        const category =
            card.getAttribute("data-category");

        if (
            value === "all" ||
            category === value
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";
        }
    });
}

/* ==========================================
   COURSE ENROLLMENT
========================================== */

function enrollCourse() {

    localStorage.setItem(
        "enrolled",
        "true"
    );

    alert(
        "🎉 Successfully enrolled in the course!"
    );
}

/* ==========================================
   LESSON COMPLETION
========================================== */

function completeLesson(lessonIndex) {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const course =
        params.get("course");

    const key =
        `progress_${course}`;

    let completed =
        JSON.parse(
            localStorage.getItem(key)
        ) || [];

    if (!completed.includes(lessonIndex)) {

        completed.push(lessonIndex);

        localStorage.setItem(
            key,
            JSON.stringify(completed)
        );
    }

    updateProgress();


    if (percent === 100) {

        alert(
            "🏆 Congratulations! Course Completed."
        );

    } else {

        alert(
            `✅ Progress Updated: ${percent}%`
        );
    }
}

/* ==========================================
   UPDATE PROGRESS
========================================== */

function updateProgress() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const course =
        params.get("course");

    if (!course) return;

    const key =
        `progress_${course}`;

    const completed =
        JSON.parse(
            localStorage.getItem(key)
        ) || [];

    const totalLessons =
        document.querySelectorAll(
            ".lesson-item"
        ).length;

    if (totalLessons === 0) return;

    const percentage =
        Math.round(
            (completed.length /
             totalLessons) * 100
        );

    const progressBar =
        document.getElementById(
            "courseProgress"
        );

    const progressText =
        document.getElementById(
            "progressText"
        );

    if (progressBar)
        progressBar.style.width =
            percentage + "%";

    if (progressText)
        progressText.textContent =
            percentage + "% Completed";
}

/* ==========================================
   CERTIFICATE DOWNLOAD
========================================== */

const certificateButtons =
    document.querySelectorAll(
        ".certificate-card button"
    );

certificateButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        alert(
            "📄 Certificate Download Started"
        );
    });
});

/* ==========================================
   SAVE PROFILE
========================================== */

const saveButtons =
    document.querySelectorAll(
        ".profile-info .primary-btn"
    );

saveButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        alert(
            "✅ Profile Updated Successfully"
        );
    });
});

/* ==========================================
   NEWSLETTER SUBSCRIBE
========================================== */

const newsletterBtn =
    document.querySelector(
        ".newsletter-form button"
    );

if (newsletterBtn) {

    newsletterBtn.addEventListener(
        "click",
        () => {

            const email =
                document.querySelector(
                    ".newsletter-form input"
                );

            if (
                email.value.trim() === ""
            ) {

                alert(
                    "Please enter your email"
                );

                return;
            }

            alert(
                "📧 Successfully Subscribed!"
            );

            email.value = "";
        }
    );
}

/* ==========================================
   ANIMATED COUNTERS
========================================== */

function animateCounters() {

    const counters =
        document.querySelectorAll(
            ".stat-card h2"
        );

    counters.forEach(counter => {

        const text =
            counter.innerText;

        const number =
            parseInt(text);

        if (isNaN(number)) return;

        let count = 0;

        const speed = 25;

        const update = () => {

            if (count < number) {

                count +=
                    Math.ceil(
                        number / 60
                    );

                counter.innerText =
                    count + "+";

                setTimeout(
                    update,
                    speed
                );

            } else {

                counter.innerText =
                    text;
            }
        };

        update();
    });
}

/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

function revealElements() {

    const reveals =
        document.querySelectorAll(
            ".course-card, .stat-card, .category-card, .testimonial, .dashboard-card, .achievement-card"
        );

    reveals.forEach(item => {

        const top =
            item.getBoundingClientRect()
                .top;

        const visible =
            window.innerHeight - 100;

        if (top < visible) {

            item.classList.add(
                "active-reveal"
            );
        }
    });
}

window.addEventListener(
    "scroll",
    revealElements
);

/* ==========================================
   ACTIVE NAV LINK
========================================== */

const navLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );

const currentPage =
    window.location.pathname
        .split("/")
        .pop();

navLinks.forEach(link => {

    const href =
        link.getAttribute("href");

    if (href === currentPage) {

        link.classList.add(
            "active"
        );
    }
});

/* ==========================================
   PAGE LOAD
========================================== */

window.addEventListener(
    "DOMContentLoaded",
    () => {

        updateProgress();

        animateCounters();

        revealElements();
    }
);

/* ==========================================
   COURSE CONTINUE BUTTONS
========================================== */

const continueButtons =
    document.querySelectorAll(
        ".table-row button"
    );

continueButtons.forEach(btn => {

    btn.addEventListener(
        "click",
        () => {

            window.location.href =
                "course-details.html";
        }
    );
});

/* ==========================================
   SOCIAL ICONS
========================================== */

const socialIcons =
    document.querySelectorAll(
        ".social-icons a"
    );

socialIcons.forEach(icon => {

    icon.addEventListener(
        "mouseenter",
        () => {

            icon.style.transform =
                "translateY(-8px)";
        }
    );

    icon.addEventListener(
        "mouseleave",
        () => {

            icon.style.transform =
                "translateY(0)";
        }
    );
});

/* ==========================================
   SETTINGS TOGGLE
========================================== */

const settingsSwitches =
    document.querySelectorAll(
        ".switch input"
    );

settingsSwitches.forEach(toggle => {

    toggle.addEventListener(
        "change",
        () => {

            if (toggle.checked) {

                console.log(
                    "Setting Enabled"
                );

            } else {

                console.log(
                    "Setting Disabled"
                );
            }
        }
    );
});

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(
    "%cEduVerse LMS Loaded Successfully 🚀",
    "color:#7c3aed;font-size:16px;font-weight:bold;"
);

/* ==========================
   COURSE DETAILS DYNAMIC DATA
========================== */

function loadCourseDetails() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const course =
        params.get("course");

    const data = {

        frontend: {

            title:
                "Frontend Development Bootcamp",

            description:
                "Master HTML, CSS, JavaScript, Bootstrap and React through hands-on projects.",

            duration:
                "⏱ 12 Weeks",

            lessons:
                "📚 48 Lessons",

            level:
                "🟢 Beginner",

            video:
                "https://www.youtube.com/embed/Ke90Tje7VS0",

            instructor:
                "Sarah Johnson",

            instructorImg:
                "https://randomuser.me/api/portraits/women/44.jpg",

            instructorBio:
                "Senior Frontend Engineer with 8+ years experience.",

            curriculum: [

                "HTML Fundamentals",
                "CSS Layouts",
                "Flexbox & Grid",
                "JavaScript Basics",
                "DOM Manipulation",
                "React Fundamentals"
            ],

            outcomes: [

                "Build Responsive Websites",
                "Create React Apps",
                "Master CSS Layouts",
                "Use Modern JavaScript"
            ]
        },

        python: {

            title:
                "Python Programming Masterclass",

            description:
                "Learn Python programming from basics to advanced projects and automation.",

            duration:
                "⏱ 10 Weeks",

            lessons:
                "📚 42 Lessons",

            level:
                "🟡 Intermediate",

            video:
                "https://www.youtube.com/embed/_uQrJ0TkZlc",

            instructor:
                "David Miller",

            instructorImg:
                "https://randomuser.me/api/portraits/men/32.jpg",

            instructorBio:
                "Python Developer and Data Analyst.",

            curriculum: [

                "Python Basics",
                "Variables & Data Types",
                "Functions",
                "OOP Concepts",
                "File Handling",
                "Automation Projects"
            ],

            outcomes: [

                "Write Python Scripts",
                "Build Automation Tools",
                "Understand OOP",
                "Work With Files"
            ]
        },

        uiux: {

            title:
                "UI UX Design Professional",

            description:
                "Learn professional user interface and user experience design using Figma.",

            duration:
                "⏱ 8 Weeks",

            lessons:
                "📚 35 Lessons",

            level:
                "🟢 Beginner",

            video:
                "https://www.youtube.com/embed/c9Wg6Cb_YlU",

            instructor:
                "Emily Watson",

            instructorImg:
                "https://randomuser.me/api/portraits/women/55.jpg",

            instructorBio:
                "Lead Product Designer and UX Specialist.",

            curriculum: [

                "Design Thinking",
                "Wireframing",
                "Prototyping",
                "Figma Basics",
                "Design Systems",
                "Portfolio Project"
            ],

            outcomes: [

                "Create UI Designs",
                "Build Design Systems",
                "Use Figma Professionally",
                "Design User Experiences"
            ]
        },

        ai: {

            title:
                "AI & Machine Learning",

            description:
                "Explore artificial intelligence and machine learning fundamentals.",

            duration:
                "⏱ 14 Weeks",

            lessons:
                "📚 60 Lessons",

            level:
                "🔴 Advanced",

            video:
                "https://www.youtube.com/embed/GwIo3gDZCVQ",

            instructor:
                "Dr. Michael Chen",

            instructorImg:
                "https://randomuser.me/api/portraits/men/65.jpg",

            instructorBio:
                "AI Researcher and University Professor.",

            curriculum: [

                "AI Basics",
                "Machine Learning",
                "Neural Networks",
                "Deep Learning",
                "NLP",
                "AI Projects"
            ],

            outcomes: [

                "Understand AI Concepts",
                "Train ML Models",
                "Use Neural Networks",
                "Build AI Applications"
            ]
        },

        marketing: {

            title:
                "Digital Marketing Strategy",

            description:
                "Learn SEO, content marketing and social media growth strategies.",

            duration:
                "⏱ 6 Weeks",

            lessons:
                "📚 25 Lessons",

            level:
                "🟢 Beginner",

            video:
                "https://www.youtube.com/embed/nU-IIXBWlS4",

            instructor:
                "Rachel Green",

            instructorImg:
                "https://randomuser.me/api/portraits/women/67.jpg",

            instructorBio:
                "Digital Marketing Consultant.",

            curriculum: [

                "SEO Basics",
                "Content Marketing",
                "Google Ads",
                "Social Media",
                "Email Marketing",
                "Analytics"
            ],

            outcomes: [

                "Run Ad Campaigns",
                "Improve SEO",
                "Build Brand Awareness",
                "Analyze Marketing Data"
            ]
        },

        fullstack: {

            title:
                "Full Stack Web Development",

            description:
                "Become a full stack developer using MongoDB, Express, React and Node.",

            duration:
                "⏱ 16 Weeks",

            lessons:
                "📚 70 Lessons",

            level:
                "🔴 Advanced",

            video:
                "https://www.youtube.com/embed/7CqJlxBYj-M",

            instructor:
                "Alex Carter",

            instructorImg:
                "https://randomuser.me/api/portraits/men/77.jpg",

            instructorBio:
                "Senior MERN Stack Architect.",

            curriculum: [

                "HTML & CSS",
                "JavaScript",
                "React",
                "Node.js",
                "MongoDB",
                "Deployment"
            ],

            outcomes: [

                "Build Full Stack Apps",
                "Create REST APIs",
                "Use MongoDB",
                "Deploy Applications"
            ]
        }
    };

    if (!data[course]) return;

    const c = data[course];

    document.getElementById("courseTitle").textContent = c.title;
    document.getElementById("courseDescription").textContent = c.description;
    document.getElementById("courseDuration").textContent = c.duration;
    document.getElementById("courseLessons").textContent = c.lessons;
    document.getElementById("courseLevel").textContent = c.level;
    document.getElementById("courseVideo").src = c.video;

    document.getElementById("instructorName").textContent = c.instructor;
    document.getElementById("instructorBio").textContent = c.instructorBio;
    document.getElementById("instructorImage").src = c.instructorImg;

    const curriculumContainer =
        document.getElementById("curriculumContainer");

    curriculumContainer.innerHTML = "";

    c.curriculum.forEach((lesson, index) => {

        curriculumContainer.innerHTML += `
        <div class="lesson-item">
            <span>
                Lesson ${index + 1}: ${lesson}
            </span>

            <button onclick="completeLesson(${(index+1)*15})">
                Complete
            </button>
        </div>
        `;
    });

    const outcomesContainer =
        document.getElementById("outcomesContainer");

    outcomesContainer.innerHTML = "";

    c.outcomes.forEach(outcome => {

    outcomesContainer.innerHTML += `
    <div class="outcome-card">

        <i class="fa-solid fa-circle-check"></i>

        <span>${outcome}</span>

    </div>
        `;
    });
}


window.addEventListener(
    "DOMContentLoaded",
    () => {

        updateProgress();

        animateCounters();

        revealElements();

        loadCourseDetails();
    }
);