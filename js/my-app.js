// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});



// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}

//submit btn

function submit(){
	var empty ="";
	var uemail = document.getElementById('email');
	var passid = document.getElementById('password');
	var tel = document.getElementById('tel');
	var uaddress = document.getElementById('fullAddress');
	var uname = document.getElementById('fullName');
	var bdate = document.getElementById('date');
	
	ValidateEmail(uemail);
	alphanumeric(uaddress);
	passid_validation(passid,5,15);
	allLetter(uname);
	numeric(tel);
	
}
//validate email format
function ValidateEmail(uemail)  
{  
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(uemail.value.match(mailformat))  
{  
return true;  
}  
else  
{  
alert("You have entered an invalid email address!");  
uemail.focus();  
return false;  
}  
} 
//validate full address
function alphanumeric(uaddress)  
{   
var letters = /^[0-9a-zA-Z ]+$/;  
if(uaddress.value.match(letters))  
{  
return true;  
}  
else  
{  
alert('User address must have alphanumeric characters only');  
uaddress.focus();  
return false;  
}  
}
//check the password
function passid_validation(passid,mx,my)  
{  
var passid_len = passid.value.length;  
if (passid_len == 0 ||passid_len >= my || passid_len < mx)  
{  
alert("Password should not be empty, and the length should be between "+mx+" and "+my);  
passid.focus();  
return false;  
}  
return true;  
}  
//check the name
function allLetter(uname)  
{   
var letters = /^[A-Za-z ]+$/;  
if(uname.value.match(letters))  
{  
return true;  
}  
else  
{  
alert('Username must have alphabet characters only');  
uname.focus();  
return false;  
}  
}  
//validate tel
function numeric(tel)  
{   
var letters = /^[0-9]+$/;  
if(tel.value.match(letters))  
{  
return true;  
}  
else  
{  
alert('Invalid phone number!');  
tel.focus();  
return false;  
}  
}
