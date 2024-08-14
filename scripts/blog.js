const blogs = document.getElementById("blogs");
const adminBlogs = JSON.parse(localStorage.getItem("blogEntries")) || [];
const blogEntries = [
    ...adminBlogs,
    {
        imageUrl: "/images/aidsDay.jpg",
        title: "World AIDS day",
        description: "The world aids day is held on december first",
    },
    {
        imageUrl: "/images/bloodDonation.jpg",
        title: "World blood donation day",
        description: "The world blood day is held on april second",
    },
    {
        imageUrl: "/images/autismDay.jpg",
        title: "World autism day",
        description: "The world autism day is held on april second",
    },
];
const newDiv = document.createElement("div");
newDiv.classList.add("blog__div");
const showContent = (index) => {
    document.getElementById(index).style.display =
        document.getElementById(index).style.display === "block"
            ? "none"
            : "block";
};

const displayedBlogs = blogEntries.map((value, index) => {
    const days =
        value.imageUrl &&
        `
        <div>
        <img src=${value.imageUrl} class="blog__image" alt='No image available'/>
        <p>${value.title}</p>
        <p id=${index} style="display:none;">${value.description}</p>
        <button class="blog-btn" onclick="showContent(${index})">Click me</button>
        </div>
    `;
    return days;
});
newDiv.innerHTML = displayedBlogs;
blogs.appendChild(newDiv);
