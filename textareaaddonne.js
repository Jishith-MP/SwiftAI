const tagList = [
    { tagName: 'div', htmlContent: '&lt;div&gt;&lt;/div&gt;' },
    { tagName: 'span', htmlContent: '&lt;span&gt;&lt;/span&gt;' },
    { tagName: 'em', htmlContent: '&lt;em&gt;&lt;/em&gt;' },
    { tagName: 'mark', htmlContent: '&lt;mark&gt;&lt;/mark&gt;' },
    { tagName: 'a', htmlContent: '&lt;a href=""&gt;&lt;/a&gt;' },
    { tagName: 'table', htmlContent: '&lt;table&gt;&lt;/table&gt;' },
    { tagName: 'tr', htmlContent: '&lt;tr&gt;&lt;/tr&gt;' },
    { tagName: 'th', htmlContent: '&lt;th&gt;&lt;/th&gt;' },
    { tagName: 'td', htmlContent: '&lt;td&gt;&lt;/td&gt;' },
    { tagName: 'thead', htmlContent: '&lt;thead&gt;&lt;/thead&gt;' },
    { tagName: 'tbody', htmlContent: '&lt;tbody&gt;&lt;/tbody&gt;' },
    { tagName: 'tfoot', htmlContent: '&lt;tfoot&gt;&lt;/tfoot&gt;' },
    { tagName: 'hr', htmlContent: '&lt;hr /&gt;' },
    { tagName: 'br', htmlContent: '&lt;br /&gt;' },
    { tagName: 'p', htmlContent: '&lt;p&gt;&lt;/p&gt;' },
    { tagName: 'h1', htmlContent: '&lt;h1&gt;&lt;/h1&gt;' },
    { tagName: 'h2', htmlContent: '&lt;h2&gt;&lt;/h2&gt;' },
    { tagName: 'h3', htmlContent: '&lt;h3&gt;&lt;/h3&gt;' },
    { tagName: 'h4', htmlContent: '&lt;h4&gt;&lt;/h4&gt;' },
    { tagName: 'h5', htmlContent: '&lt;h5&gt;&lt;/h5&gt;' },
    { tagName: 'h6', htmlContent: '&lt;h6&gt;&lt;/h6&gt;' },
    { tagName: 'b', htmlContent: '&lt;b&gt;&lt;/b&gt;' },
    { tagName: 'i', htmlContent: '&lt;i&gt;&lt;/i&gt;' },
    { tagName: 'strong', htmlContent: '&lt;strong&gt;&lt;/strong&gt;' },
    { tagName: 'small', htmlContent: '&lt;small&gt;&lt;/small&gt;' },
    { tagName: 'code', htmlContent: '&lt;code&gt;&lt;/code&gt;' },
    { tagName: 'pre', htmlContent: '&lt;pre&gt;&lt;/pre&gt;' },
    { tagName: 'blockquote', htmlContent: '&lt;blockquote&gt;&lt;/blockquote&gt;' },
    { tagName: 'ul', htmlContent: '&lt;ul&gt;&lt;/ul&gt;' },
    { tagName: 'ol', htmlContent: '&lt;ol&gt;&lt;/ol&gt;' },
    { tagName: 'li', htmlContent: '&lt;li&gt;&lt;/li&gt;' },
    { tagName: 'form', htmlContent: '&lt;form&gt;&lt;/form&gt;' },
    { tagName: 'input', htmlContent: '&lt;input type="" /&gt;' },
    { tagName: 'button', htmlContent: '&lt;button&gt;&lt;/button&gt;' },
    { tagName: 'select', htmlContent: '&lt;select&gt;&lt;/select&gt;' },
    { tagName: 'option', htmlContent: '&lt;option&gt;&lt;/option&gt;' }
];

const container = document.getElementById('dropdown-container');

const dropdownMenu = document.createElement('div');
dropdownMenu.id = 'dropdown';

const header = document.createElement('h3');
header.style.color = 'blue';
header.textContent = 'Select the desired tag';
dropdownMenu.appendChild(header);

tagList.forEach(({ tagName, htmlContent }) => {
    const tagDiv = document.createElement('div');
    tagDiv.setAttribute('data-tag', tagName);
    tagDiv.innerHTML = htmlContent;
    dropdownMenu.appendChild(tagDiv);
});

container.appendChild(dropdownMenu);

// Function to create dropdown
function createDropdown(ids, grids, targetId) {
  // Create the dropdown container
  const dropdownDiv = document.createElement('div');
  dropdownDiv.className = 'dropdown';

  // Create the button
  const button = document.createElement('button');
  button.className = 'btn btn-secondary dropdown-toggle';
  button.type = 'button';
  button.setAttribute('data-bs-toggle', 'dropdown');
  button.setAttribute('aria-expanded', 'false');

  // Create the icon element
  const icon = document.createElement('i');
  icon.className = 'bi bi-plus-square';
  icon.setAttribute('data-bs-toggle', 'tooltip');
  icon.setAttribute('data-bs-placement', 'left');
  icon.setAttribute('data-bs-title', 'Add elements');

  // Append icon to button
  button.appendChild(icon);

  // Create the dropdown menu
  const dropdownMenu = document.createElement('ul');
  dropdownMenu.className = 'dropdown-menu';

  // Create the dropdown items
  grids.forEach((grid, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.className = 'dropdown-item';
    a.id = ids[index];
    a.textContent = grid;
    li.appendChild(a);
    dropdownMenu.appendChild(li);
  });

  // Append button and dropdownMenu to dropdownDiv
  dropdownDiv.appendChild(button);
  dropdownDiv.appendChild(dropdownMenu);

  // Append the created dropdownDiv to the target element
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.appendChild(dropdownDiv);
  } else {
    console.error(`Element with ID "${targetId}" not found.`);
  }
}

// IDs and grids for the first dropdown
const firstIds = ['fifthaddon', 'sixthaddon', 'seventhaddon', 'eighthaddon'];
const firstGrids = ['Text content elements', 'Links', 'Media elements', 'lists'];
createDropdown(firstIds, firstGrids, 'secondaddongrid');

// IDs and grids for the second dropdown
const secondIds = ['ninthaddon', 'tenthaddon', 'eleventhaddon', 'twelthaddon'];
const secondGrids = ['Text content elements', 'links', 'media elements', 'lists'];
createDropdown(secondIds, secondGrids, 'thirdaddongrid');


let navbar = document.getElementById("navbar");
let navbtn = document.getElementById("navbtn");

navbtn.addEventListener('click', function() {
    
if (navbtn.classList.contains('open')) {
                navbtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>`;
                navbtn.classList.remove('open');
            } else {
                navbtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>`;
                navbtn.classList.add('open');
            }
    
  if (navbar.style.display === "block") {
    navbar.style.transform = "scaleY(0)";
    setTimeout(() => {
      navbar.style.display = "none";
    }, 500); 
  } else {
      navbar.style.display = "block";
    setTimeout(() => {
      navbar.style.transform = "scaleY(1)";
    }, 10); 
  }
});

document.getElementById("home").addEventListener('click', function() {
    window.location.href = "index.html";
});
document.getElementById("documentation").addEventListener('click', function() {
    window.location.href = "documentation.html";
});
document.getElementById("support").addEventListener('click', function() {
    window.location.href = "faq.html";
});
document.getElementById("contact").addEventListener('click', function() {
    window.location.href = "contact.html";
});
const markElement = document.getElementById('highlight');

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function getBrightness(hex) {
            // Convert hex to RGB
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);

            // Calculate brightness
            return 0.2126 * r + 0.7152 * g + 0.0722 * b;
        }

        function getValidColor() {
            let color;
            do {
                color = getRandomColor();
            } while (getBrightness(color) < 100);
            return color;
        }

        function changeBackgroundColor() {
            markElement.style.backgroundColor = getValidColor();
        }

setInterval(changeBackgroundColor, 20000); 
