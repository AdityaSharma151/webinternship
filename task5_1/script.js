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

async function fetchBlogs(page = 1) {
  const skip = (page - 1) * blogsPerPage;

  try {
    const res = await fetch(`https://dummyjson.com/posts?limit=${blogsPerPage}&skip=${skip}`);
    const data = await res.json();
    totalBlogs = data.total;

    blogContainer.innerHTML = '';
    data.posts.forEach(displayBlog);

    pageInfo.textContent = `Page ${currentPage}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = skip + blogsPerPage >= totalBlogs;

  } catch (error) {
    blogContainer.innerHTML = `<p>Error loading blogs.</p>`;
    console.error(error);
  }
}

function displayBlog(blog) {
  const card = document.createElement('div');
  card.classList.add('blog-card');
  card.setAttribute('data-id', blog.id);

  card.innerHTML = `
    <h2 class="blog-title">${blog.title}</h2>
    <p class="blog-body">${blog.body}</p>
    <div class="card-actions">
      <button class="edit-btn">✏️ Edit</button>
      <button class="delete-btn">🗑️ Delete</button>
    </div>
  `;

  const editBtn = card.querySelector('.edit-btn');
  const deleteBtn = card.querySelector('.delete-btn');

  editBtn.addEventListener('click', () => editBlog(card, blog));
  deleteBtn.addEventListener('click', () => deleteBlog(card, blog.id));

  blogContainer.prepend(card);
}

function deleteBlog(card, id) {
  fetch(`https://dummyjson.com/posts/${id}`, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(() => {
      card.remove();
      alert('Blog deleted (mock)');
    })
    .catch(() => {
      alert('Failed to delete blog.');
    });
}

function editBlog(card, blog) {
  const titleEl = card.querySelector('.blog-title');
  const bodyEl = card.querySelector('.blog-body');
  const actionsEl = card.querySelector('.card-actions');

  titleEl.innerHTML = `<input type="text" value="${blog.title}" class="edit-title" />`;
  bodyEl.innerHTML = `<textarea class="edit-body">${blog.body}</textarea>`;

  actionsEl.innerHTML = `
    <button class="save-btn">💾 Save</button>
    <button class="cancel-btn">❌ Cancel</button>
  `;

  const saveBtn = actionsEl.querySelector('.save-btn');
  const cancelBtn = actionsEl.querySelector('.cancel-btn');

  saveBtn.addEventListener('click', () => {
    const newTitle = card.querySelector('.edit-title').value.trim();
    const newBody = card.querySelector('.edit-body').value.trim();

    if (!newTitle || !newBody) return alert("Title & Body can't be empty!");

    fetch(`https://dummyjson.com/posts/${blog.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle, body: newBody })
    })
      .then(res => res.json())
      .then(updated => {
        
        titleEl.textContent = updated.title;
        bodyEl.textContent = updated.body;

        
        blog.title = updated.title;
        blog.body = updated.body;

    
        actionsEl.innerHTML = `
          <button class="edit-btn">✏️ Edit</button>
          <button class="delete-btn">🗑️ Delete</button>
        `;

        actionsEl.querySelector('.edit-btn').addEventListener('click', () => editBlog(card, blog));
        actionsEl.querySelector('.delete-btn').addEventListener('click', () => deleteBlog(card, blog.id));

        alert('Blog updated (mock)');
      })
      .catch(() => alert("Failed to update blog"));
  });

  cancelBtn.addEventListener('click', () => {
    titleEl.textContent = blog.title;
    bodyEl.textContent = blog.body;

    actionsEl.innerHTML = `
      <button class="edit-btn">✏️ Edit</button>
      <button class="delete-btn">🗑️ Delete</button>
    `;

    actionsEl.querySelector('.edit-btn').addEventListener('click', () => editBlog(card, blog));
    actionsEl.querySelector('.delete-btn').addEventListener('click', () => deleteBlog(card, blog.id));
  });
}

// Form submission
blogForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();
  if (!title || !body) return alert('Both fields required');

  try {
    const res = await fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body, userId: 1 }),
    });

    const newBlog = await res.json();
    displayBlog(newBlog);
    blogForm.reset();
    alert('Blog posted.');
  } catch (error) {
    console.error(error);
    alert('Error posting blog.');
  }
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
