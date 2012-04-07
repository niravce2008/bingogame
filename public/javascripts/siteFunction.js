$(document).ready(function(){
	$('.close').live('click',function(e){
		e.preventDefault();
		$(this).parent('div').remove();
		})
	
	$('#submitRegistration').live("click",function(){
		if ($('#name').val() == "")
		{
			$('#errorRegistration').html('<div class="alert alert-error" align="center"><a class="close" href="#" data-dismiss="alert">x</a><span>Please enter your name.</span></div>');
			$('#name').focus();
			return false;			
		}
		else
		if ($('#email').val() == "")
		{
			$('#errorRegistration').html('<div class="alert alert-error" align="center"><a class="close" href="#" data-dismiss="alert">x</a><span>Please enter email.</span></div>');
			$('#email').focus();
			return false;
		}
		else
		if(!isValidEmailAddress($('#email').val()))
		{
			$('#errorRegistration').html('<div class="alert alert-error" align="center"><a class="close" href="#" data-dismiss="alert">x</a><span>Please enter valid email.</span></div>');
			$('#email').focus();
			return false;
		}
		else
		if ($('#password').val() == "")
		{
			$('#errorRegistration').html('<div class="alert alert-error" align="center"><a class="close" href="#" data-dismiss="alert">x</a><span>Please enter password.</span></div>');
			$('#password').focus();
			return false;			
		}
		else
		if ($('#confirmPassword').val() == "")
		{
			$('#errorRegistration').html('<div class="alert alert-error" align="center"><a class="close" href="#" data-dismiss="alert">x</a><span>Please confirm password.</span></div>');
			$('#confirmPassword').focus();
			return false;			
		}
		else
		if ($('#password').val() != $('#confirmPassword').val())
		{
			$('#errorRegistration').html('<div class="alert alert-error" align="center"><a class="close" href="#" data-dismiss="alert">x</a><span>Password does not match.</span></div>');
			$('#confirmPassword').focus();
			return false;			
		}
		if ($('#address').val() == "")
		{
			$('#errorRegistration').html('<div class="alert alert-error" align="center"><a class="close" href="#" data-dismiss="alert">x</a><span>Please enter address.</span></div>');
			$('#address').focus();
			return false;			
		}
		if ($('#state').val() == "0")
		{
			$('#errorRegistration').html('<div class="alert alert-error" align="center"><a class="close" href="#" data-dismiss="alert">x</a><span>Please select state.</span></div>');
			$('#state').focus();
			return false;			
		}
		if ($('#city').val() == "")
		{
			$('#errorRegistration').html('<div class="alert alert-error" align="center"><a class="close" href="#" data-dismiss="alert">x</a><span>Please select city.</span></div>');
			$('#city').focus();
			return false;			
		}
		if ($('#zipcode').val() == "")
		{
			$('#errorRegistration').html('<div class="alert alert-error" align="center"><a class="close" href="#" data-dismiss="alert">x</a><span>Please enter zipcode.</span></div>');
			$('#zipcode').focus();
			return false;			
		}
		if ($('#phone').val() == "")
		{
			$('#errorRegistration').html('<div class="alert alert-error" align="center"><a class="close" href="#" data-dismiss="alert">x</a><span>Please enter your phone number.</span></div>');
			$('#phone').focus();
			return false;			
		}
		else
		{
			$.post("",{email : $('#email').val() , 
					password:$('#password').val() , 
					name : $('#name').val(),
					country :$('#country').val(),
					state :$('#state').val(),
					city : $('#city').val(),
					address :$('#address').val(),
					zip : $('#zipcode').val(),
					phone : $('#phone').val()
					},function(result){
					if (result == "Error")
					{
						$('#errorRegistration').html('<div class="alert alert-error" align="center"><a class="close" href="#" data-dismiss="alert">x</a><span>Error in regisration.</span></div>');
					}
					else
					{
						$('#body').html(result);
					}
			});
		}
		return false;
	});
	
	
	$('#submitSignin').live("click",function(){
		if ($('#email').val() == "")
		{
			$('#errorSignin').html('<div class="alert alert-error" align="center"><a class="close" href="#" data-dismiss="alert">x</a><span>Please enter email.</span></div>');
			$('#email').focus();
			return false;
		}
		else
		if(!isValidEmailAddress($('#email').val()))
		{
			$('#errorSignin').html('<div class="alert alert-error" align="center"><a class="close" href="#" data-dismiss="alert">x</a><span>Please enter valid email.</span></div>');
			$('#email').focus();
			return false;
		}
		else
		if ($('#password').val() == "")
		{
			$('#errorSignin').html('<div class="alert alert-error" align="center"><a class="close" href="#" data-dismiss="alert">x</a><span>Please enter password.</span></div>');
			$('#password').focus();
			return false;			
		}
		else
		{
			$.post("",{email : $('#email').val() , password:$('#password').val()},function(result){
				if(result == 'success')
				{
					document.location.href="/";
				}
				else
				{
					$('#errorSignin').html('<div class="alert alert-error" align="center"><a class="close" href="#" data-dismiss="alert">x</a><span>Please enter correct information.</span></div>');
					$('#email').focus();
				}
				return false;
			});
		}
		return false;
	});
	});
