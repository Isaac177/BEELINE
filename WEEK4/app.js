
const date = document.getElementById("date");
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const sectors = [
    {
        id: 1,
        title: "This view...",
        description: "The benefits of being surrounded by nature aren’t strictly limited to people who are already obsessed with nature; even if you generally prefer to be indoors, it’s likely you’ll experience less stress and more motivation when you’re surrounded by plants, water and other sensory experiences that remind you of the outdoors.\n" +
            "\n" +
            "Since most of these changes are somewhat innocuous and relatively inexpensive, you should have no trouble making them a reality in your office, and once you and your co-workers respond positively to the new setup, your bosses and peers will be even more likely to improve upon what you’ve started.",
        img: "images/ext1.jpeg",
    },
    {
        id: 2,
        title: "Wonderful Classes",
        description: "When you’re relaxed, you’re in a better position to learn. That’s why our classrooms are set up with you in mind. They’re clean, uncluttered and well-equipped, and because we keep our class sizes small, there’s plenty of opportunity for individual attention.\n" +
        "\n" + "Universities are at the front line of promoting sustainability. The wellbeing of its students plays a key role in advancing such agendas. In the past decade, many university classrooms have been equipped with a projector; however, the lighting design of the classroom remains unchanged. This paper presents a visual comfort study of modern university classrooms by considering three working surfaces: the student’s desk, whiteboard, and projector screen. The study cross-examines the quality of the classroom lighting by high dynamic range image (HDRi) photography and the students’ well-being from user satisfaction surveys. ",
        img: "images/class1.jpeg",
    },
    {
        id: 3,
        title: "Recreation's Halls",
        description: "The Student Recreation Center provides a state-of-the-art facility and a comprehensive recreation program for students, faculty, staff, alumni, and spouses. It aids in the education and development of the whole person and serves as a place of employment for students. More than just a place to exercise, the recreation center also serves as a venue for education: users develop positive self-esteem, enhance their social relationships, and improve their interpersonal skills. \n" +
        "\n" + "The recreation center provides a unique site for programs and activities aimed at meeting the needs, interests, and expectations of a diverse community. Opportunities for interaction, collaboration, and unification are essential if campuses are to develop a sense of community. ",
            img: "images/rec1.jpeg",
    },
    {
        id: 4,
        title: "Halls",
        description: "Simply put, a school multipurpose hall serves multiple program and functional purposes. For example, while school gymnasiums have traditionally functioned as lunchrooms during inclement weather and as performance spaces, today’s students (and teaching models) demand more creativity in design. There is ample opportunity to create a space that facilitates your school’s curriculum and your students’ needs. \n"
            + "\n" +"What if you could divide your cafeteria into two smaller study spaces to be used before and after lunch? Imagine opening a glass exterior wall of this space to the outdoors, allowing students to study or work on projects in the open air on good-weather days, and then rolling workstations and chairs to the perimeter to open the space up for a school dance that evening.",
        img: "images/hall1.jpeg",
    },
    {
        id: 5,
        title: "Security",
        description: "Typically, educational establishments face common threats. Nevertheless, each and every one has its unique challenges they have to address. Thus, before creating a safety plan and choosing proper tools to enhance campus physical security it’s important to conduct a site assessment so as to identify where vulnerabilities lie on the school campus. Potential risks can come from parking lots, playgrounds, learning or residential facilities or relate to intrusion, health risks, and violent incidents, among others. With a big-picture understanding of safety challenges, emergency managers can determine which areas require special attention while students and staff can keep themselves safe from such threats.\n"
            + "\n" + "New technologies coupled with intelligent analytics can help to carry out the site security audit and provide invaluable insights into the weaknesses of the security system so that safety managers can tailor better-defined plans, processes, and policies to cover the incidents most likely to affect each location on the campus, and coordinate actions between educational institutions, local law enforcement agencies, and other first responder professionals. To ensure an effective emergency response it’s also vital to conduct regular training and drills for students and staff so that they know how to behave in critical situations.",
        img: "images/sec1.jpeg",
    }
];

const gallery = [
    {
        id: 1,
        img1: "images/ext1.jpeg",
        img2: "images/ext2.jpeg",
        img3: "images/ext3.jpeg",
        img4: "images/ext4.jpeg",
        img5: "images/ext5.jpeg",
        img6: "images/ext6.jpeg",
    },
    {
        id: 2,
        img1: "images/class1.jpeg",
        img2: "images/class2.jpeg",
        img3: "images/class3.jpeg",
        img4: "images/class4.jpeg",
        img5: "images/class5.jpeg",
        img6: "images/class6.jpeg",
    },
    {
        id: 3,
        img1: "images/rec1.jpeg",
        img2: "images/rec2.jpeg",
        img3: "images/rec3.jpeg",
        img4: "images/rec4.jpeg",
        img5: "images/rec5.jpeg",
        img6: "images/rec6.jpeg",
    },
    {
        id: 4,
        img1: "images/hall1.jpeg",
        img2: "images/hall2.jpeg",
        img3: "images/hall3.jpeg",
        img4: "images/hall4.jpeg",
        img5: "images/hall5.jpeg",
        img6: "images/hall6.jpeg",
    },

    {
        id: 5,
        img1: "images/sec1.jpeg",
        img2: "images/sec2.jpeg",
        img3: "images/sec3.jpeg",
        img4: "images/sec4.jpeg",
        img5: "images/sec5.jpeg",
        img6: "images/sec6.jpeg",
    },
]

const currentCountryImg = document.querySelector(".sectorImg");
const currentCountryTitle = document.querySelector(".sectorTitle");
const currentCountryDescription= document.querySelector(".sectorDescription");

const currentGalleryImg1 = document.querySelector(".galleryImg1");
const currentGalleryImg2 = document.querySelector(".galleryImg2");
const currentGalleryImg3 = document.querySelector(".galleryImg3");
const currentGalleryImg4 = document.querySelector(".galleryImg4");
const currentGalleryImg5 = document.querySelector(".galleryImg5");
const currentGalleryImg6 = document.querySelector(".galleryImg6");

date.innerHTML = new Date().getFullYear();
// changing the country
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // change the chosen country
        chosenSector = sectors[index];

        // change text of current country
        currentCountryTitle.textContent = sectors[index].title;
        currentCountryDescription.textContent = sectors[index].description;
        currentCountryImg.src = sectors[index].img;

        // change gallery img of current country
        currentGalleryImg1.src = gallery[index].img1;
        currentGalleryImg2.src = gallery[index].img2;
        currentGalleryImg3.src = gallery[index].img3;
        currentGalleryImg4.src = gallery[index].img4;
        currentGalleryImg5.src = gallery[index].img5;
        currentGalleryImg6.src = gallery[index].img6;
    });
})

// navbar for mobile
const navbarMenu = document.querySelector(".navbarMenu");
const mobileMenu= document.querySelector("#mobileMenu");

mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("is-active");
    navbarMenu.classList.toggle("show-navbarMenu");
});

