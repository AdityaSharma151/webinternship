const blogContainer = document.getElementById('blog-container');
const blogForm = document.getElementById('blog-form');
const titleInput = document.getElementById('title');
const bodyInput = document.getElementById('body');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageInfo = document.getElementById('page-info');

let currentPage = 1;
const blogsPerPage = 5;
let totalBlogs = 0;
let localBlogs = []; // for storing mock new posts

async function fetchBlogs(page = 1) {
  const offset = (page - 1) * blogsPerPage;

  try {
    const res = await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts?offset=${offset}&limit=${blogsPerPage}`);
    const data = await res.json();
    totalBlogs = data.totalBlogs;

    blogContainer.innerHTML = '';
    const allBlogs = [...localBlogs, ...data.blogs];
    allBlogs.forEach(displayBlog);

    pageInfo.textContent = `Page ${currentPage}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = offset + blogsPerPage >= totalBlogs;
  } catch (error) {
    blogContainer.innerHTML = `<p>Error loading blogs.</p>`;
    console.error(error);
  }
}

function displayBlog(blog) {
  const card = document.createElement('div');
  card.classList.add('blog-card');
  card.setAttribute('data-id', blog.id || Date.now());

  const fullBody = blog.content_text || blog.body;
  const isLong = fullBody.length > 150;
  const shortBody = isLong ? fullBody.slice(0, 150) + '...' : fullBody;

  card.innerHTML = `
    <h2 class="blog-title">${blog.title}</h2>
    <p class="blog-body">${shortBody}</p>
    <div class="card-actions">
      ${isLong ? '<button class="read-more-btn">📖 Read More</button>' : ''}
      <button class="edit-btn">✏️ Edit</button>
      <button class="delete-btn">🗑️ Delete</button>
    </div>
  `;

  const bodyEl = card.querySelector('.blog-body');
  const readMoreBtn = card.querySelector('.read-more-btn');
  const editBtn = card.querySelector('.edit-btn');
  const deleteBtn = card.querySelector('.delete-btn');

  if (readMoreBtn) {
    readMoreBtn.addEventListener('click', () => {
      bodyEl.textContent = fullBody;
      readMoreBtn.remove(); // only removes its own
    });
  }

  editBtn.addEventListener('click', () => editBlog(card, blog));
  deleteBtn.addEventListener('click', () => deleteBlog(card, blog));

  blogContainer.prepend(card);
}



function deleteBlog(card, blog) {
  const index = localBlogs.findIndex(b => b.id === blog.id);
  if (index !== -1) {
    localBlogs.splice(index, 1);
    card.remove();
    alert('Blog deleted (local)');
  } else {
    alert('You can only delete your own posts.');
  }
}

function editBlog(card, blog) {
  const titleEl = card.querySelector('.blog-title');
  const bodyEl = card.querySelector('.blog-body');
  const actionsEl = card.querySelector('.card-actions');

  titleEl.innerHTML = `<input type="text" value="${blog.title}" class="edit-title" />`;
  bodyEl.innerHTML = `<textarea class="edit-body">${blog.content_text || blog.body}</textarea>`;

  actionsEl.innerHTML = `
    <button class="save-btn">💾 Save</button>
    <button class="cancel-btn">❌ Cancel</button>
  `;

  actionsEl.querySelector('.save-btn').addEventListener('click', () => {
    const newTitle = card.querySelector('.edit-title').value.trim();
    const newBody = card.querySelector('.edit-body').value.trim();

    if (!newTitle || !newBody) return alert("Fields can't be empty");

    blog.title = newTitle;
    blog.body = newBody;
    blog.content_text = newBody;

    titleEl.textContent = newTitle;
    bodyEl.textContent = newBody;

    actionsEl.innerHTML = `
      <button class="edit-btn">✏️ Edit</button>
      <button class="delete-btn">🗑️ Delete</button>
    `;
    actionsEl.querySelector('.edit-btn').addEventListener('click', () => editBlog(card, blog));
    actionsEl.querySelector('.delete-btn').addEventListener('click', () => deleteBlog(card, blog));

    alert("Blog updated (local)");
  });

  actionsEl.querySelector('.cancel-btn').addEventListener('click', () => {
    titleEl.textContent = blog.title;
    bodyEl.textContent = blog.content_text || blog.body;
    actionsEl.innerHTML = `
      <button class="edit-btn">✏️ Edit</button>
      <button class="delete-btn">🗑️ Delete</button>
    `;
    actionsEl.querySelector('.edit-btn').addEventListener('click', () => editBlog(card, blog));
    actionsEl.querySelector('.delete-btn').addEventListener('click', () => deleteBlog(card, blog));
  });
}

// Simulated form submission
blogForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();
  if (!title || !body) return alert('Both fields required');

  const newBlog = {
    id: Date.now(),
    title,
    body,
    content_text: body
  };

  localBlogs.unshift(newBlog); // store locally
  displayBlog(newBlog);
  blogForm.reset();
  alert('Blog posted (local)');
});

// Pagination
prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    fetchBlogs(currentPage);
  }
});

nextBtn.addEventListener('click', () => {
  currentPage++;
  fetchBlogs(currentPage);
});

// Initial fetch
fetchBlogs();
