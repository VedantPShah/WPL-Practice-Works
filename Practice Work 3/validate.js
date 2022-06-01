window.onload = function()
{

    //there will be one span element for each input field
    // when the page is loaded, we create them and append them to corresponding input elements 
	// they are initially empty and hidden

	var email = document.getElementById("email");
    var span1 = document.createElement("span");
	span1.style.display = "none"; //hide the span element
    email.parentNode.appendChild(span1);

	

    email.onfocus = function()
    {
       span1.style.display = "block";
       span1.style.color = "grey";
       span1.innerHTML = "•    The email field should be a valid email address (abc@def.xyz). A valid email consists of an email prefix and an email domain with two parts. <prefix>@<domain_part1>.<domain_part2>";
    }

    email.onblur = function()
    {
        span1.style.display = "none";
    }

    var pwd = document.getElementById("pwd");
    var span2 = document.createElement("span");
    span2.style.display = "none";
    pwd.parentNode.appendChild(span2);
    
    pwd.onfocus = function()
    {
        span2.style.display = "block";
        span2.style.color = "grey";
        span2.innerHTML = "•   The password field should contain at least six characters, one uppercase letter, one number and one special character (!,@,#,$,%,^,&,*,+).";
    }

    pwd.onblur = function()
    {
        span2.style.display = "none";
    }


    var confirm = document.getElementById("confirm");
    var span3 = document.createElement("span");
    span3.style.display = "none";
    confirm.parentNode.appendChild(span3);
    
    confirm.onfocus = function()
    {
        span3.style.display = "block";
        span3.style.color = "grey";
        span3.innerHTML = "•   Password and confirm password fields should match";
    }

    confirm.onblur = function()
    {
        span3.style.display = "none";
    }

    email.onchange = function(e) 
    {
        if(email.classList.contains("error")) 
        {
            email.classList.remove("error");
        }
    }
    
    pwd.onchange = function(e) 
    {
        if(pwd.classList.contains("error")) 
        {
            pwd.classList.remove("error");
        }
    }
        
    confirm.onchange = function(e) 
    {
        if(confirm.classList.contains("error")) 
        {
            confirm.classList.remove("error");
        }
    }


    
    var form = document.getElementById("myForm");
    form.onsubmit = function(e)
    {
        var regexEmail = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
        var regexPwd = /^(?=.*\d)(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*+]).{6,}$/;
        
        if(!regexEmail.test(email.value)) 
        {         
            span1.innerHTML = "Enter a valid Email Address";
            span1.style.display = "block";
            span1.style.fontSize = "14px";
            span1.style.color = "red";
            email.classList.add("error");
            return false;
        }
        
        if(!regexPwd.test(pwd.value)) 
        {
            span2.innerHTML = "Enter a valid Password. Password must contain atleast 6 characters, one uppercase, one letter, one number and one special character.";
            span2.style.display = "block";
            span2.style.fontSize = "14px";
            span2.style.color = "red";
            pwd.classList.add("error");
            return false;
        }
        
        if(pwd.value !== confirm.value) 
        {
            span3.innerHTML = "Passwords do not match. Please try again."
            span3.style.display = "block";
            span3.style.fontSize = "14px";
            span3.style.color = "red";
            pwd.classList.add("error");
            confirm.classList.add("error");
            return false;
        }
        
        return true;
    }


}


