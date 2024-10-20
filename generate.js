let htmlCode;
let cssCode;
let jsCode;
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
    
function getDataFromChunks(key) {
    const chunksCount = parseInt(sessionStorage.getItem(`${key}_chunks_count`), 10);
    if (isNaN(chunksCount)) return '';

    let data = '';
    for (let i = 0; i < chunksCount; i++) {
        const chunk = sessionStorage.getItem(`${key}_chunk_${i}`);
        if (chunk !== null) {
            data += chunk;
        }
    }

    return data;
}

window.addEventListener('load', function() {
    
    // Retrieve and merge the data
     htmlCode = getDataFromChunks('htmlCode');
     cssCode = getDataFromChunks('cssCode');
     jsCode = getDataFromChunks('jsCode');

    
    // Retrieve and display generated HTML, CSS, and JS
let generatedHtml = htmlCode;
let escapedHtml = escapeHtml(generatedHtml);
document.getElementById('result').textContent = escapedHtml;

let generatedCss = cssCode;
document.getElementById("css").textContent = generatedCss;

let generatedJs = jsCode;
document.getElementById("js").textContent = generatedJs;
    Prism.highlightAll();
    typewriter();
});
    
    
// Initialize columns and pre blocks
const columns = document.querySelectorAll('.column');
const preBlocks = document.querySelectorAll('pre');

// Initially activate the first column and display its corresponding pre block
columns[0].classList.add('active');
preBlocks[0].style.display = 'block';

// Copy to clipboard functionality
let copyHtml = document.getElementById('copy');
let copyCss = document.getElementById('copy-css');
let copyJs = document.getElementById('copy-js');

columns.forEach((column, index) => {
    column.addEventListener('click', function() {
        columns.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        preBlocks.forEach(pre => pre.style.display = 'none');
        preBlocks[index].style.display = 'block';

        // Toggle visibility of copy buttons based on column index
        copyHtml.style.display = index === 0 ? 'inline-block' : 'none';
        copyCss.style.display = index === 1 ? 'inline-block' : 'none';
        copyJs.style.display = index === 2 ? 'inline-block' : 'none';
    });
});

Prism.highlightAll();
typewriter();

// Function to escape HTML entities
function escapeHtml(html) {
    let text = document.createElement('textarea');
    text.innerHTML = html;
    return text.textContent;
}

// Copy HTML to clipboard
copyHtml.addEventListener('click', function() {
    let tooltip = bootstrap.Tooltip.getInstance(copyHtml) || new bootstrap.Tooltip(copyHtml);
    tooltip.show();
    setTimeout(() => tooltip.hide(), 1500);

    let copyText = document.getElementById('result').textContent;
    navigator.clipboard.writeText(copyText)
        .then(() => console.log("HTML code copied"))
        .catch(error => console.error('Error retrieving code text:', error));
});

// Copy CSS to clipboard
copyCss.addEventListener('click', function() {
    let tooltip = bootstrap.Tooltip.getInstance(copyCss) || new bootstrap.Tooltip(copyCss);
    tooltip.show();
    setTimeout(() => tooltip.hide(), 1500);

    let generatedCss = document.getElementById('css').textContent;
    if (generatedCss) {
        navigator.clipboard.writeText(generatedCss)
            .then(() => console.log("CSS code copied"))
            .catch(error => console.error('Error copying CSS code:', error));
    } else {
        console.error('No CSS code found');
    }
});

// Copy JavaScript to clipboard
copyJs.addEventListener('click', function() {
    let tooltip = bootstrap.Tooltip.getInstance(copyJs) || new bootstrap.Tooltip(copyJs);
    tooltip.show();
    setTimeout(() => tooltip.hide(), 1500);

    let generatedJs = document.getElementById('js').textContent;
    navigator.clipboard.writeText(generatedJs)
        .then(() => console.log("JavaScript code copied"))
        .catch(error => console.error('Error retrieving code text:', error));
});

// Open new window with HTML content
document.getElementById("run").addEventListener('click', function() {
    let htmlCode = document.getElementById("result").textContent;
    let newWindow = window.open();
    newWindow.document.open();
    newWindow.document.write(htmlCode);
    newWindow.document.close();
});

// Typewriter effect function
function typewriter() {
    let textanimate = document.getElementById("result").textContent;
    let index = 0;
    let speed = 1;

    document.getElementById("result").innerHTML = "";

    function typeChar() {
        if (index < textanimate.length) {
            let resultbox = document.getElementById("result");
            resultbox.innerHTML += textanimate.charAt(index);
            index++;
            setTimeout(typeChar, speed);
        } else {
            Prism.highlightAll();
        }
    }
    typeChar();
}
});