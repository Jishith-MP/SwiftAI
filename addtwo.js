
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

let isClicked;
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
            } while (getBrightness(color) < 100); // Adjust brightness threshold as needed
            return color;
        }

        function changeBackgroundColor() {
            markElement.style.backgroundColor = getValidColor();
        }

        setInterval(changeBackgroundColor, 20000); // Change color every 20 seconds
document.addEventListener("DOMContentLoaded", function() {
    const firstaddon = document.getElementById("firstaddon");
    const secondaddon = document.getElementById("secondaddon");
    const thirdaddon = document.getElementById("thirdaddon");
    const fourthaddon = document.getElementById("fourthaddon");
    const fifthaddon = document.getElementById("fifthaddon");
    const sixthaddon = document.getElementById("sixthaddon");
    const seventhaddon = document.getElementById("seventhaddon");
    const eighthaddon = document.getElementById("eighthaddon");
    const ninthaddon = document.getElementById("ninthaddon");
    const tenthaddon = document.getElementById("tenthaddon");
    const eleventhaddon = document.getElementById("eleventhaddon");
    const twelthaddon = document.getElementById("twelthaddon");
        
    const inputs = document.querySelectorAll('input[type="number"]');
    const maxValues = [40, 30, 100, 40, 30, 100, 30];
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    //grid one full css and html
    let oneintoonegridcss = "", oneintoonegridhtml = "";
    
    //grid two full css and html
    let twointotwogridhtml = "", twointotwogridcss = "";

    //grid three full css and html
    let thereeintothreegridhtml = "", threeintothreegridcss = "";

    
    //add on
    
    //grid one
    var gridoneimgcss;
    var gridonetextcss;
    var gridoneimghtml;
    var gridonetexthtml;

    //grid two
    var gridtwoimgcss;
    var gridtwotextcss;
    var gridtwoimghtml;
    var gridtwotexthtml;
    var article;
       
    //grid three
    var gridthreeimgcss;
    var gridthreetextcss;
    var gridthreeimghtml;
    var gridthreetexthtml;
    // Define global variables for all input values
    let gridoneimageurl, gridonetext, gridonebrrd, gridonebgcolor;
    let gridtwoimgoneurl, gridtwoimgtwourl, gridtwoimgthreeurl, gridtwoimgfoururl;
    let gridtwotextvaluefirst, gridtwotextvaluesecond, gridtwotextvaluethird, gridtwotextvaluefourth;
    let gridtwobrrd, gridtwobgcolor;
    let gridthreeimgurlfirst, gridthreeimgurlsecond, gridthreeimgurlthird, gridthreeimgurlfourth, gridthreeimgurlfifth, gridthreeimgurlsixth, gridthreeimgurlseventh, gridthreeimgurleight, gridthreeimgurlninth;
    let gridthreetextfirst, gridthreetextsecond, gridthreetextthird, gridthreetextfourth, gridthreetextfifth, gridthreetextsixth, gridthreetextseventh, gridthreetexteighth, gridthreetextninth;
    let gridthreebrrd, gridthreebgcolor;
    let title, titlesize, titlecolor, titlefontfamily, headerpadding, headerimg, headerheight, headerposition, color, menuiconcolor, logo, logourl, contentmargin, contentfontsize, contentfontfamily, contentfontcolor, footer, copywrite, footeraddcontent, footerbgcolor, footerposition, footerheight, footercntinfocolor, footercntinfosize, footeraftervalue, footerbgimg;
    
    let textctnelmts, linktagurl, linktagtext, imagetagurl, imagetagtext, ul, ol;
    
     // Function to update global variables with input values
    function all() {
        
    //grid one image url
     gridoneimageurl = document.getElementById('one_layout_firstchild-IMG').value;
    //grid one text   
     gridonetext = document.getElementById('one_layout_firstchild').value;
    //grid one bgcolor and border radius
     gridonebrrd = document.getElementById('one_layout_brd_rds').value;
     gridonebgcolor = document.getElementById('one_layout_bgcolor').value; 
    //grid two image url
     gridtwoimgoneurl = document.getElementById('two_layout_firstchild-IMG').value;
     gridtwoimgtwourl = document.getElementById('two_layout_secondchild-IMG').value;
     gridtwoimgthreeurl = document.getElementById('two_layout_thirdchild-IMG').value;
     gridtwoimgfoururl = document.getElementById('two_layout_fourthchild-IMG').value;
    //grid two text
     gridtwotextvaluefirst = document.getElementById('two_layout_firstchild').value;
     gridtwotextvaluesecond = document.getElementById('two_layout_secondchild').value;
     gridtwotextvaluethird = document.getElementById('two_layout_thirdchild').value;
     gridtwotextvaluefourth = document.getElementById('two_layout_fourthchild').value;
    //grid two bgcolor and border radius
     gridtwobrrd = document.getElementById('two_layout_brd_rds').value;
     gridtwobgcolor = document.getElementById('two_layout_bgcolor').value;
    //grid three image url
     gridthreeimgurlfirst = document.getElementById('three_layout_firstchild-IMG').value;
     gridthreeimgurlsecond = document.getElementById('three_layout_secondchild-IMG').value;
     gridthreeimgurlthird = document.getElementById('three_layout_thirdchild-IMG').value;
     gridthreeimgurlfourth = document.getElementById('three_layout_fourthchild-IMG').value;
     gridthreeimgurlfifth = document.getElementById('three_layout_fifthchild-IMG').value;
     gridthreeimgurlsixth = document.getElementById('three_layout_sixthchild-IMG').value;
     gridthreeimgurlseventh = document.getElementById('three_layout_seventhchild-IMG').value;
     gridthreeimgurleight = document.getElementById('three_layout_eighthchild-IMG').value;
     gridthreeimgurlninth = document.getElementById('three_layout_ninthchild-IMG').value;
    //grid three text
     gridthreetextfirst = document.getElementById('three_layout_firstchild').value;
     gridthreetextsecond = document.getElementById('three_layout_secondchild').value;
     gridthreetextthird = document.getElementById('three_layout_thirdchild').value;
     gridthreetextfourth = document.getElementById('three_layout_fourthchild').value;
     gridthreetextfifth = document.getElementById('three_layout_fifthchild').value;
     gridthreetextsixth = document.getElementById('three_layout_sixthchild').value;
     gridthreetextseventh = document.getElementById('three_layout_seventhchild').value;
     gridthreetexteighth = document.getElementById('three_layout_eigthchild').value;
     gridthreetextninth = document.getElementById('three_layout_ninthchild').value;
    //grid three bg color and border radius
     gridthreebrrd = document.getElementById('three_layout_brd_rds').value;
     gridthreebgcolor = document.getElementById('three_layout_bgcolor').value;
        
     title = document.getElementById("heading").value;
     titlesize = document.getElementById("Title-size").value;
     titlecolor = document.getElementById("title-color").value;
     titlefontfamily = document.getElementById("fontSelector").value;
     headerpadding = document.getElementById("header-padding").value;
     headerimg = document.getElementById("header-img").value;
     headerheight = document.getElementById("header-height").value;
     headerposition = document.getElementById("header-position").value;
     color = document.getElementById("header-color").value;
     menuiconcolor = document.getElementById("menu-icon-color").value;
     logo = document.getElementById("logo").value;
     logourl;
     article = document.getElementById("article").value;
     contentmargin = document.getElementById("content-margin").value;
     contentfontsize = document.getElementById("content-font-size").value;
     contentfontfamily = document.getElementById("content-fontSelector").value;
     contentfontcolor = document.getElementById("content-font-color").value;
     footer = document.getElementById("footer-content").value;
     copywrite = document.getElementById("copy-year").value;
     footeraddcontent = document.getElementById("footer-add-content").value;
     footerbgcolor = document.getElementById("footer-bgcolor").value;
     footerposition = document.getElementById("footer-position").value;
     footerheight = document.getElementById("footer-height").value;
     footercntinfocolor = document.getElementById("footer-cnt-info-color").value;
     footercntinfosize = document.getElementById("footer-cnt-info-size").value;
     footerbgimg = document.getElementById("footer-bgimg").value;

textctnelmts = document.getElementById("h1tag").value;
linktagurl = document.getElementById("linktagurl").value;
linktagtext = document.getElementById("linktagtxt").value;
imagetagurl = document.getElementById("imagetagurl").value;
imagetagtext = document.getElementById("imagetagtxt").value;
ul = document.getElementById("ul").value;
ol = document.getElementById("ol").value;
    let honetag;       
    let linktag;   
    let imagetag;  
    let ultag; 
    let oltag; 
    const footerheightStr = footerheight !== undefined && footerheight !== null
  ? footerheight.toString().trim()
  : '';
const footerheightdyn = footerheightStr === '' ? 'auto' : '';
footeraftervalue = `${footerheightStr === '' ? footerheightdyn : footerheightStr + 'px'}`;
    }
    function updateDisplay() {
         all();
    const oneselect = document.querySelector(".one-select").value;
    const twoselect = document.querySelector(".two-select").value;
    const threeselect = document.querySelector(".three-select").value;
    const firstlyt = document.getElementById("oneintoonelyt");
    const secondlyt = document.getElementById("twointotwolyt");
    const thirdlyt = document.getElementById("threeintothreelyt");
    const firstlytimg = document.getElementById("onelytimg");
    const secondlytimg = document.getElementById("twolytimg");
    const thirdlytimg = document.getElementById("threelytimg");
        
        
    firstlyt.style.display = "none";
    secondlyt.style.display = "none";
    thirdlyt.style.display = "none";
    firstlytimg.style.display = "none";
    secondlytimg.style.display = "none";
    thirdlytimg.style.display = "none";
 /*       
   if (document.getElementById("addelement9").style.display === "block")  { */
        if (textctnelmts !== "") { 
         honetag = `<h1 id="h1tag">${textctnelmts}</h1>`;
   } else {
       honetag = "";
   }
       
   if (linktagurl && linktagtext !== "") { 
       linktag = `<a id="anchortag" href="${linktagurl}">${linktagtext}</a>`;
   } else {
       linktag = "";
   }
         
   if (imagetagurl && imagetagtext !== "") { 
       imagetag = `<img id="imagetag" src="${imagetagurl}" alt="imagetagtext">`;
   } else {
       imagetag = "";
   }
              
   if (ul !== "") { 
         ultag = `
        <ul id="ultag">
        <li id="ullitag">${ul}</li> 
        </ul>`;
   } else {
       ultag = "";
   }
              
   if (ol !== "") { 
         oltag = `
        <ol id="oltag">
        <li id="ollitag">${ol}</li> 
        </ol>`;
   } else {
       oltag = "";
   }
        
         // Display elements based on selection
if (oneselect === "image") {
    firstlytimg.style.display = "block";
    gridonetextcss = "";
    gridonetexthtml = "";
    gridoneimgcss = `
        .grid-item img {
            width: 100%; 
            height: 100%; 
            object-fit: cover; 
            display: block; 
        }
    `;
    gridoneimghtml = `
        <div class="grid-container">
            <div class="grid-item"><img src="${gridoneimageurl}" alt="image1"></div>
        </div>
    `;
} else {
    firstlyt.style.display = "block";
    gridoneimgcss = "";
    gridoneimghtml = "";
    gridonetextcss = `
        .grid-item p {
            margin: 0; 
            text-align: center; 
        }
    `;
    gridonetexthtml = `
        <div class="grid-container">
            <div class="grid-item"><p>${gridonetext}</p></div>
        </div>
    `;
}

if (twoselect === "image") {
    secondlytimg.style.display = "block";
    gridtwotextcss = "";
    gridtwotexthtml = "";
    gridtwoimgcss = `
        .grid-itemtwo img {
            width: 100%; 
            height: 100%; 
            object-fit: cover; 
            display: block; 
        }
    `;
    gridtwoimghtml = `
        <div class="grid-containertwo">
            <div class="grid-itemtwo"><img src="${gridtwoimgoneurl}" alt="image1"></div>
            <div class="grid-itemtwo"><img src="${gridtwoimgtwourl}" alt="image2"></div>
            <div class="grid-itemtwo"><img src="${gridtwoimgthreeurl}" alt="image3"></div>
            <div class="grid-itemtwo"><img src="${gridtwoimgfoururl}" alt="image4"></div>
        </div>
    `;
} else {
    secondlyt.style.display = "block";
    gridtwoimgcss = "";
    gridtwoimghtml = "";
    gridtwotextcss = `
        .grid-itemtwo p {
            margin: 0; 
            text-align: center;
        }
    `;
    gridtwotexthtml = `
        <div class="grid-containertwo">
            <div class="grid-itemtwo"><p>${gridtwotextvaluefirst}</p></div>
            <div class="grid-itemtwo"><p>${gridtwotextvaluesecond}</p></div>
            <div class="grid-itemtwo"><p>${gridtwotextvaluethird}</p></div>
            <div class="grid-itemtwo"><p>${gridtwotextvaluefourth}</p></div>
        </div>
    `;
}

if (threeselect === "image") {
    thirdlytimg.style.display = "block";
    gridthreetextcss = "";
    gridthreetexthtml = "";
    gridthreeimgcss = `
        .grid-itemthree img {
            width: 100%; 
            height: 100%; 
            object-fit: cover; 
            display: block; 
        }
    `;
    gridthreeimghtml = `
        <div class="grid-container">
            <div class="grid-itemthree"><img src="${gridthreeimgurlfirst}" alt="image1"></div>
            <div class="grid-itemthree"><img src="${gridthreeimgurlsecond}" alt="image2"></div>
            <div class="grid-itemthree"><img src="${gridthreeimgurlthird}" alt="image3"></div>
            <div class="grid-itemthree"><img src="${gridthreeimgurlfourth}" alt="image4"></div>
            <div class="grid-itemthree"><img src="${gridthreeimgurlfifth}" alt="image5"></div>
            <div class="grid-itemthree"><img src="${gridthreeimgurlsixth}" alt="image6"></div>
            <div class="grid-itemthree"><img src="${gridthreeimgurlseventh}" alt="image7"></div>
            <div class="grid-itemthree"><img src="${gridthreeimgurleight}" alt="image8"></div>
            <div class="grid-itemthree"><img src="${gridthreeimgurlninth}" alt="image9"></div>
        </div>
    `;
} else {
    thirdlyt.style.display = "block";
    gridthreeimgcss = "";
    gridthreeimghtml = "";
    gridthreetextcss = `
        .grid-itemthree {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #ccc;
            padding: 20px;
            box-sizing: border-box;
            background-color: ${gridthreebgcolor};
            height: 100px; /* Adjust height as needed */
            text-align: center;
            border-radius: ${gridthreebrrd}px;  
        }
    `;
    gridthreetexthtml = `
        <div class="grid-containerthree">
            <div class="grid-itemthree"><p>${gridthreetextfirst}</p></div>
            <div class="grid-itemthree"><p>${gridthreetextsecond}</p></div>
            <div class="grid-itemthree"><p>${gridthreetextthird}</p></div>
            <div class="grid-itemthree"><p>${gridthreetextfourth}</p></div>
            <div class="grid-itemthree"><p>${gridthreetextfifth}</p></div>
            <div class="grid-itemthree"><p>${gridthreetextsixth}</p></div>
            <div class="grid-itemthree"><p>${gridthreetextseventh}</p></div>
            <div class="grid-itemthree"><p>${gridthreetexteighth}</p></div>
            <div class="grid-itemthree"><p>${gridthreetextninth}</p></div>
        </div>
    `;
}
     }   
// Call updateDisplay when the select values change
Array.from(document.getElementsByClassName("one-select")).forEach(element => {
    element.addEventListener("change", updateDisplay);
});

Array.from(document.getElementsByClassName("two-select")).forEach(element => {
    element.addEventListener("change", updateDisplay);
});

Array.from(document.getElementsByClassName("three-select")).forEach(element => {
    element.addEventListener("change", updateDisplay);
});
    
// Call updateDisplay initially to set the correct state based on the current selections
updateDisplay();
function generate() {
    //generate button trigger
    document.getElementById("run").addEventListener("click", function() {
        isClicked = true;
        all();
        updateDisplay();
        logourl = logo.trim() !== "" ? `<img class="header-logo" src="${logo}" alt="logo">` : "";
        if (document.getElementById("addelement3").style.display === "block") {
    oneintoonegridhtml = `
        ${gridoneimghtml}
        ${gridonetexthtml}
    `;
    oneintoonegridcss = `
    .grid-container {
        display: grid;
        grid-template-columns: 1fr; 
        grid-template-rows: 1fr; 
        gap: 10px; 
        height: auto;
        padding: 10px;
        margin: 15px;  
    }

    .grid-item {
        display: flex;
        align-items: center; 
        justify-content: center; 
        border: 1px solid #ccc; 
        padding: 20px;
        border-radius: ${gridonebrrd}px;  
        box-sizing: border-box;
        background-color: ${gridonebgcolor}; 
    }

    ${gridonetextcss}
    ${gridoneimgcss}
    /* Responsive Styles */
    @media (max-width: 768px) {
        .grid-container {
            grid-template-columns: 1fr; 
            grid-template-rows: 1fr;
        }
    }`;
}
if (document.getElementById("addelement2").style.display === "block") {
    twointotwogridcss = `
        .grid-containertwo {
            display: grid;
            grid-template-columns: repeat(2, 1fr); 
            grid-template-rows: repeat(2, 1fr); 
            gap: 10px; 
            height: auto; 
            padding: 10px;
            margin: 15px;  
        }
        .grid-itemtwo {
            display: flex;
            align-items: center; 
            justify-content: center; 
            border: 1px solid #ccc; 
            padding: 20px;
            box-sizing: border-box;
            border-radius: ${gridtwobrrd}px;  
            background-color: ${gridtwobgcolor}; 
        }

        ${gridtwotextcss}
        ${gridtwoimgcss}

        @media (max-width: 768px) {
            .grid-containertwo {
                grid-template-columns: 1fr; 
                grid-template-rows: repeat(4, 1fr);
            }
        }
    `;
    twointotwogridhtml = `
        ${gridtwoimghtml}
        ${gridtwotexthtml}
    `;
}
if (document.getElementById("addelement4").style.display === "block") {
    thereeintothreegridhtml = `
        ${gridthreeimghtml}
        ${gridthreetexthtml}
    `;
    threeintothreegridcss = `
    .grid-containerthree {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3 columns */
        grid-template-rows: repeat(3, 1fr);    /* 3 rows */
        gap: 10px; /* Space between grid items */
        padding: 10px;
        border-radius: ${gridthreebrrd}px;
    }

    ${gridthreetextcss}
    ${gridthreeimgcss}            

    @media (max-width: 768px) {
        .grid-containerthree {
            grid-template-columns: 1fr; /* Single column for smaller screens */
            grid-template-rows: repeat(9, 1fr); /* 9 rows for smaller screens */
        }
    }
    `;
}
const articleValues = [];
        for (let i = 1; i <= 10; i++) {
            const textarea = document.getElementById(`article-${i}`);
            if (textarea) {
                articleValues.push(textarea.value);
            }
        }
const cssContent = `
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }
    header {
        background-color: ${color};
        color: white;
        height: ${headerheight}px;
        width: 100%;
        padding: ${headerpadding}px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-image: url('${headerimg}');
        background-size: cover;
        background-position: center;
        position: ${headerposition};
        top: 0;
        left: 0;
        box-sizing: border-box;
    }
    #header-title {
        color: ${titlecolor};
        font-size: ${titlesize}px;
        font-family: ${titlefontfamily};
        margin: 0;
        flex: 1;
        text-align: center;
        white-space: nowrap;
    }
    .header-content {
        display: flex;
        align-items: center;
        gap: 5px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    .header-logo {
        width: 40px;
        height: auto;
        margin-right: 5px;
    }
    .menu-icon {
        display: inline-block;
        padding: 10px;
    }
    .bar {
        width: 25px;
        height: 3px;
        background-color: ${menuiconcolor};
        margin: 5px 0;
        transition: transform 0.3s ease-in-out;
    }
    .menu-icon.open .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    .menu-icon.open .bar:nth-child(2) {
        opacity: 0;
    }
    .menu-icon.open .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
    #site-content p {
        font-size: ${contentfontsize}px;
        font-family: ${contentfontfamily};
        color: ${contentfontcolor};
        margin: ${contentmargin}px;
        margin-bottom: 20px;
        position: relative;
        top: ${headerheight}px;
        padding-bottom: 20%;
    }
    ${twointotwogridcss}
    ${oneintoonegridcss}
    ${threeintothreegridcss}
    footer {
        background-color: ${footerbgcolor};
        color: white;
        text-align: center;
        position: ${footerposition};
        bottom: 0;
        width: 100%;
        height: ${footeraftervalue};
        background-image: url('${footerbgimg}');
        background-size: cover;
        background-position: center;
    }
    .additonal_ctn {
        color: ${footercntinfocolor};
        font-size: ${footercntinfosize}px;
    }
    #copywrite {
        text-align: center;
        color: skyblue;
    }`;
        const blob = new Blob([cssContent], { type: 'text/css' });
        const cssURL = URL.createObjectURL(blob);
        
const jscode = `
document.addEventListener('DOMContentLoaded', function() {
function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('open');
}

const container = document.getElementById('site-content');
const mainContent = document.querySelector('main');
const footer = document.querySelector('footer');
const footerHeight = footer.offsetHeight;
    mainContent.style.paddingBottom = \`\${footerHeight + 10}px\`;
            
${articleValues.map((value, index) => `
    const paragraph${index + 1} = document.createElement('p');
    paragraph${index + 1}.textContent = \`${value !== undefined ? value : ''}\`;
    container.appendChild(paragraph${index + 1});
`).join('\n')}
    
});
`;
        const jsblob = new Blob([jscode], { type: 'application/javascript' });
        const jsURL = URL.createObjectURL(jsblob);
       
 const htmlCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>document</title>
    <link rel="stylesheet" href="${cssURL}">
</head>
<body>
    <header id="site-header">
        <div class="menu-icon" onclick="toggleMenu()">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <div class="header-content">
            ${logourl || ''}
            <h1 id="header-title">${title}</h1>
        </div>
    </header>
        ${twointotwogridhtml || ''}
        ${oneintoonegridhtml || ''}
        ${thereeintothreegridhtml || ''}
    <main>
        <div id="site-content">
            <div>${article}</div>
        </div>
        ${honetag || ''}
        ${linktag || ''}
        ${imagetag || ''}
        ${ultag || ''}
        ${oltag || ''}
        </main>
    <footer id="site-footer">
        <p>${footer}</p>
        <p class="additonal_ctn">${footeraddcontent}</p>
        <p id="end">${copywrite}</p>
    </footer>
    <script type="text/javascript" src="${jsURL}"></script>
</body>
</html>
        `;
// Function to remove unnecessary blank lines while keeping proper indentation
function removeEmptyLines(html) {
    let lines = html.split('\n');
    let result = [];
    let inNonEmptySection = false;

    lines.forEach((line, index) => {
        let trimmedLine = line.trim();
        
        if (trimmedLine.length > 0) {
            result.push(line);
            inNonEmptySection = true;
        } else if (inNonEmptySection) {
            // Add only if previous line was non-empty
            result.push('');
            inNonEmptySection = false;
        }
    });

    // Remove trailing empty lines
    while (result.length && !result[result.length - 1].trim()) {
        result.pop();
    }

    return result.join('\n');
}

const formattedHtmlCode = removeEmptyLines(htmlCode);
const formattedCssCode = removeEmptyLines(cssContent);
const formattedJsCode = removeEmptyLines(jscode);
        sessionStorage.setItem('generatedHtml', formattedHtmlCode);
        sessionStorage.setItem('generatedCSS', formattedCssCode);
        sessionStorage.setItem('generatedJS', formattedJsCode);
    });
}
    if (isClicked === true) {
   document.getElementById('generate').addEventListener('click', function() {
        const loadingElement = document.getElementById('loading');
        const loadertxt = document.getElementById('loader_text');

        loadingElement.style.display = "flex";
        loadingElement.style.justifyContent = 'center';
        loadingElement.style.alignItems = 'center';
        loadingElement.style.flexDirection = 'column';

        setTimeout(() => {
            loadertxt.innerText = "Preparing...";
            loadertxt.style.fontSize = "30px";
            loadertxt.style.color = "red";
        }, 2000);

        setTimeout(() => {
            loadertxt.innerText = "Almost there...";
            loadertxt.style.fontSize = "30px";
            loadertxt.style.color = "coral";
        }, 4000);

        setTimeout(() => {
            window.location.href = "generatedcode.html";
            loadingElement.style.display = "none";
        }, 6000); 

   });
    } else {
        generate();
        document.getElementById('generate').addEventListener('click', function() {
        const loadingElement = document.getElementById('loading');
        const loadertxt = document.getElementById('loader_text');

        loadingElement.style.display = "flex";
        loadingElement.style.justifyContent = 'center';
        loadingElement.style.alignItems = 'center';
        loadingElement.style.flexDirection = 'column';

        setTimeout(() => {
            loadertxt.innerText = "Preparing...";
            loadertxt.style.fontSize = "30px";
            loadertxt.style.color = "red";
        }, 2000);

        setTimeout(() => {
            loadertxt.innerText = "Almost there...";
            loadertxt.style.fontSize = "30px";
            loadertxt.style.color = "coral";
        }, 4000);

        setTimeout(() => {
            window.location.href = "generatedcode.html";
            loadingElement.style.display = "none";
        }, 6000); 

   });
    }



    
    //insert elements
    firstaddon.addEventListener('click', function() {
        document.getElementById("addelement1").style.display = "block";
    });

    secondaddon.addEventListener('click', function() {
        document.getElementById("addelement2").style.display = "block";
    });
    
    thirdaddon.addEventListener('click', function() {
        document.getElementById("addelement3").style.display = "block";
    });
    
    fourthaddon.addEventListener('click', function() {
        document.getElementById("addelement4").style.display = "block";
    });

    fifthaddon.addEventListener('click', function() {
        document.getElementById("addelement5").style.display = "block";
    });

    sixthaddon.addEventListener('click', function() {
        document.getElementById("addelement6").style.display = "block";
    });
    
    seventhaddon.addEventListener('click', function() {
        document.getElementById("addelement7").style.display = "block";
    });
    
    eighthaddon.addEventListener('click', function() {
        document.getElementById("addelement8").style.display = "block";
    });

    ninthaddon.addEventListener('click', function() {
        document.getElementById("addelement9").style.display = "block";
    });
    
    tenthaddon.addEventListener('click', function() {
        document.getElementById("addelement10").style.display = "block";
    });
    
    eleventhaddon.addEventListener('click', function() {
        document.getElementById("addelement11").style.display = "block";
    });
    
    twelthaddon.addEventListener('click', function() {
        document.getElementById("addelement12").style.display = "block";
    });
    
    document.getElementById("run").addEventListener('click', function() {
      let htmlcode = sessionStorage.getItem('generatedHtml');
      let newwindow = window.open();
      newwindow.document.open();
      newwindow.document.write(htmlcode);
      newwindow.document.close();
    });
    //input numbers limit
    inputs.forEach((input, index) => {
        input.addEventListener('input', function() {
            if (this.value > maxValues[index]) {
                this.value = maxValues[index];
            }
        });
    });
});