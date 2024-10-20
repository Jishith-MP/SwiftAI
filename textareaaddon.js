
const plusicon = document.getElementById('contentsvg');
const addon = document.getElementById('add-on');
let numParagraphs = 1;

// Text area incrementation
plusicon.addEventListener('click', function() {
    addon.style.display = "block";
    if (numParagraphs < 10) {
        numParagraphs++;
        const fragment = document.createDocumentFragment();
        const newLabel = document.createElement('label');
        newLabel.textContent = `Paragraph - ${numParagraphs}`;
        const newTextarea = document.createElement('textarea');
        newTextarea.id = `article-${numParagraphs}`;
        newTextarea.rows = 2;
        newTextarea.maxLength = 600;
        newTextarea.placeholder = "Enter paragraph content here...";
        
        fragment.appendChild(newLabel);
        fragment.appendChild(newTextarea);
        addon.appendChild(fragment);

        // Force a reflow
        newTextarea.offsetHeight;

        // Position the plusicon near the newly added textarea
        const rect = newTextarea.getBoundingClientRect();
        const addonRect = addon.getBoundingClientRect();
        plusicon.style.position = 'absolute'; // Ensure it's positioned absolutely
        plusicon.style.top = `${rect.bottom - addonRect.top + 260}px`; // 10px offset from the textarea
        plusicon.style.right = `${rect.left - addonRect.left}px`; // Align with the textarea
    } else {
        alert("Maximum limit of 10 paragraphs reached.");
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Select dropdown and its items
    const dropdown = document.getElementById('dropdown');
    const dropdownItems = Array.from(dropdown.querySelectorAll('div'));

    // Keep track of the currently focused textarea
    let currentTextarea = null;

    
    function showDropdown() {
        if (currentTextarea) {
            // Append the dropdown to the textarea's parent or a suitable container
            const parent = currentTextarea.parentNode;
            parent.appendChild(dropdown);
            dropdown.style.display = 'block';
            dropdown.style.position = 'absolute';
            dropdown.style.left = `${currentTextarea.offsetLeft + 80}px`;
            dropdown.style.top = `${currentTextarea.offsetTop + currentTextarea.offsetHeight - 60}px`;
        }
    }
    function hideDropdown() {
        dropdown.style.display = 'none';
    }

    function filterDropdown(filter) {
        let hasVisibleItems = false;
        dropdownItems.forEach(item => {
            const tag = item.dataset.tag;
            if (tag.startsWith(filter)) {
                item.style.display = 'block';
                hasVisibleItems = true;
            } else {
                item.style.display = 'none';
            }
        });
        if (!hasVisibleItems) {
            hideDropdown();
        }
    }

    function updateTextareaValue(textarea, newValue) {
        const cursorPos = textarea.selectionStart;
        const textBeforeCursor = textarea.value.substring(0, cursorPos);
        const textAfterCursor = textarea.value.substring(cursorPos);
        const lastAngleBracketIndex = textBeforeCursor.lastIndexOf('<');
        const textBeforeLastAngleBracket = textBeforeCursor.substring(0, lastAngleBracketIndex);
        const finalValue = textBeforeLastAngleBracket + newValue + textAfterCursor;
        
        textarea.value = finalValue;
        textarea.dispatchEvent(new Event('input'));
    }

    // Add event listener for dynamically added textareas
    document.addEventListener('input', function(event) {
        if (event.target.tagName === 'TEXTAREA') {
            currentTextarea = event.target;
            const textBeforeCursor = currentTextarea.value.substring(0, currentTextarea.selectionStart);
            const lastChar = textBeforeCursor.slice(-1);
            const textInsideAngleBrackets = textBeforeCursor.split('<').pop().trim();

            if (lastChar === '<') {
                showDropdown();
            } else if (textInsideAngleBrackets === '') {
                hideDropdown();
            }
            
            filterDropdown(textInsideAngleBrackets);
        }
    });
// Function to handle click events outside the dropdown and textareas
    function handleClick(event) {
        if (!dropdown.contains(event.target)) {
            hideDropdown();
        }
    }

    document.addEventListener('click', handleClick);

    dropdown.addEventListener('click', function(event) {
        if (event.target.dataset.tag && currentTextarea) {
            const tag = event.target.dataset.tag;
            const tagStructure = {
                div: '<div></div>',
                span: '<span></span>',
                em: '<em></em>',
                mark: '<mark></mark>',
                a: '<a href=""></a>',
                table: '<table></table>',
                tr: '<tr></tr>',
                th: '<th></th>',
                td: '<td></td>',
                thead: '<thead></thead>',
                tbody: '<tbody></tbody>',
                tfoot: '<tfoot></tfoot>',
                hr: '<hr />',
                br: '<br />',
                p: '<p></p>',
                h1: '<h1></h1>',
                h2: '<h2></h2>',
                h3: '<h3></h3>',
                h4: '<h4></h4>',
                h5: '<h5></h5>',
                h6: '<h6></h6>',
                b: '<b></b>',
                i: '<i></i>',
                strong: '<strong></strong>',
                small: '<small></small>',
                code: '<code></code>',
                pre: '<pre></pre>',
                blockquote: '<blockquote></blockquote>',
                ul: '<ul></ul>',
                ol: '<ol></ol>',
                li: '<li></li>',
                form: '<form></form>',
                input: '<input type="" />',
                button: '<button></button>',
                select: '<select></select>',
                option: '<option></option>'
            };

            updateTextareaValue(currentTextarea, tagStructure[event.target.dataset.tag]);
            hideDropdown();
        }
    });
});