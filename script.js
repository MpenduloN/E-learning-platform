// Course Data
const courses = [
  {
    id: 1,
    title: "Digital Marketing",
    description: "Learn online marketing, SEO, and social media growth.",
    image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?w=800",
    lessons: ["Intro to Marketing", "SEO Basics", "Social Media Ads", "Email Campaigns"]
  },
  {
    id: 2,
    title: "Media",
    description: "Master storytelling, content creation, and broadcasting.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800",
    lessons: ["Media Ethics", "Visual Storytelling", "Video Editing", "Podcast Production"]
  },
  {
    id: 3,
    title: "Beauty",
    description: "Develop your beauty and skincare artistry skills.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
    lessons: ["Skin Types", "Makeup Basics", "Beauty Tools", "Professional Techniques"]
  },
  {
    id: 4,
    title: "Cooking and Baking",
    description: "Cook tasty meals and bake delightful desserts.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    lessons: ["Cooking Safety", "Simple Meals", "Cake Baking", "Food Presentation"]
  },
  {
     id: 5,
    title: "Sewing",
    description: "Create beautiful garments and learn professional sewing skills.",
    image: "pexels-karolina-grabowska-8527753.jpg",
    lessons: ["Sewing Tools", "Fabric Selection", "Stitching Basics", "Design Techniques"]
  },
];

const currentPage = window.location.pathname.split("/").pop();

if (currentPage === "index.html" || currentPage === "") {
  displayCourses();
} else if (currentPage === "course.html") {
  displayCourseDetails();
}

// ----- Homepage -----
function displayCourses() {
  const listContainer = document.getElementById("course-list");
  listContainer.innerHTML = "";

  courses.forEach((course) => {
    const card = document.createElement("div");
    card.classList.add("course-card");

    const completed = localStorage.getItem(`course-${course.id}-completed`);

    card.innerHTML = `
      <img src="${course.image}" alt="${course.title}">
      <div class="course-info">
        <h2>${course.title}</h2>
        <p>${course.description}</p>
        <button onclick="openCourse(${course.id})">View Details</button>
        <p style="color: ${completed ? '#10b981' : '#999'}">
          ${completed ? "✅ Completed" : "In Progress"}
        </p>
      </div>
    `;

    listContainer.appendChild(card);
  });
}

function openCourse(id) {
  localStorage.setItem("selectedCourse", id);
  window.location.href = "course.html";
}

// ----- Course Detail Page -----
function displayCourseDetails() {
  const courseId = localStorage.getItem("selectedCourse");
  const course = courses.find((c) => c.id == courseId);

  if (!course) return;

  document.getElementById("course-title").textContent = course.title;
  document.getElementById("course-image").src = course.image;

  const list = document.getElementById("lesson-list");
  list.innerHTML = course.lessons.map((lesson) => `<li>${lesson}</li>`).join("");

  const completeBtn = document.getElementById("complete-btn");
  const status = document.getElementById("completion-status");
  const completed = localStorage.getItem(`course-${course.id}-completed`);

  if (completed) {
    status.textContent = "✅ You have completed this course!";
    completeBtn.disabled = true;
    completeBtn.style.opacity = 0.7;
  }

  completeBtn.addEventListener("click", () => {
    localStorage.setItem(`course-${course.id}-completed`, "true");
    status.textContent = "✅ You have completed this course!";
    completeBtn.disabled = true;
    completeBtn.style.opacity = 0.7;
  });
}





