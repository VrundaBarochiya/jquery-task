$(document).ready(function() {
    $('#fullname').on('blur', function() {
        validateFullName();
    });

    $('#fullname').on('focus', function() {
        $('#fullname-error').css({'display':'none'});
    });

    $('#email').on('blur', function() {
        validateEmail();
    });

    $('#email').on('focus', function() {
        $('#email-error').css({'display':'none'});
    });

    $('#mobile').on('blur', function() {
        validateMobile();
    });

    $('#mobile').on('focus', function() {
        $('#mobile-error').css({'display':'none'});
    });

    $('#dob').on('blur', function() {
        validateDOB();
    });

    $('#dob').on('focus', function() {
        $('#dob-error').css({'display':'none'});
    });

    $('#password').on('blur', function() {
        validatePassword();
    });

    $('#password').on('focus', function() {
        $('#password-error').css({'display':'none'});
    });

    $('#cpassword').on('blur', function() {
        validateConfirmPassword();
    });

    $('#cpassword').on('focus', function() {
        $('#cpassword-error').css({'display':'none'});
    });

    $('#registration-form').on('submit', function(e) {
        e.preventDefault();

        validateFullName();
        validateEmail();
        validateMobile();
        validateDOB();
        validatePassword();
        validateConfirmPassword();

        if ($('.error:visible').length === 0) {
        }
    });

    function validateFullName() {
        var fullName = $('#fullname').val();
        if (fullName === '') {
            $('#fullname-error').text('Full Name is required').show();
        } else {
            $('#fullname-error').hide();
        }
    }

    function validateEmail() {
        var email = $('#email').val();
        if (email === '') {
            $('#email-error').text('Email is required').show();
        } else if (!isValidEmail(email)) {
            $('#email-error').text('Invalid Email').show();
        } else {
            $('#email-error').hide();
        }
    }

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateMobile() {
        var mobile = $('#mobile').val();
        if (mobile === '') {
            $('#mobile-error').text('Mobile No is required').show();
        } else if (!isValidMobile(mobile)) {
            $('#mobile-error').text('Invalid Mobile No').show();
        } else {
            $('#mobile-error').hide();
        }
    }

    function isValidMobile(mobile) {
        var mobileRegex = /^\d{10}$/;
        return mobileRegex.test(mobile);
    }

    function validateDOB() {
        var dob = $('#dob').val();
        var todaysDate = new Date();
        if (new Date(dob) > todaysDate) {
            $('#dob-error').text('Date of Birth should be less than todays date').show();
        }else if (dob === '') {
            $('#dob-error').text('Date of Birth is required').show();
        }else {
            $('#dob-error').hide();
        }
    }

    function validatePassword() {
        var password = $('#password').val();
        if (password === '') {
            $('#password-error').text('Password is required').show();
        } else {
            $('#password-error').hide();
        }
    }

    function validateConfirmPassword() {
        var password = $('#password').val();
        var confirmPassword = $('#cpassword').val();
        if (confirmPassword === '') {
            $('#cpassword-error').text('Confirm Password is required').show();
        } else if (password !== confirmPassword) {
            $('#cpassword-error').text('Passwords do not match').show();
        } else {
            $('#cpassword-error').hide();
        }
    }
});