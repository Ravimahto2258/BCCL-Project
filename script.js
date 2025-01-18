var mynameError = document.getElementById('myname-error');
var mnameError = document.getElementById('mname-error');
var fnameError = document.getElementById('fname-error');
var dobError = document.getElementById('dob-error');
var emailError = document.getElementById('email-error');
var genderError = document.getElementById('gender-error');
var mobileError = document.getElementById('mobile-error');
var countryError = document.getElementById('country-error');
var stateError = document.getElementById('state-error');
var addressError = document.getElementById('address-error');
var pinCodeError = document.getElementById('pin-error');
var cityError = document.getElementById('city-error');
var districtError = document.getElementById('district-error');
var hobbiesError = document.getElementById('hobbies-error');
var submitError = document.getElementById('submit-error');
var resetError= document.getElementById('reset-error')
var categoryError = document.getElementById('category-error');
var matriculationError = document.getElementById('matriculation-error');
var percentError = document.getElementById('percent-error');
var rollnoError = document.getElementById('rollno-error');
var passingError = document.getElementById('passing-error');
var IintermediateError = document.getElementById('intermediate-error');
var IpercentError = document.getElementById('Ipercent-error');
var IrollnoError = document.getElementById('Irollno-error');
var IpassingError = document.getElementById('Ipassing-error');
var picError = document.getElementById('pic-error');
var signError = document.getElementById('sign-error');


//Function to validate Your name

function validateMyName(){
    var myname = document.getElementById('myname').value;

    if(myname.length == 0){
        mynameError.innerHTML = ' **Student Name is required';
        return false;
    }
    if(myname.length < 3){
        mynameError.innerHTML = ' **Minimum 3 char required';
        return false;
    }
    if(myname.length > 20){
        mynameError.innerHTML = ' **First name should be less than 20 char';
        return false;
    }
    if(myname.match(/^[0-9]*$/)){
        mynameError.innerHTML = ' **Name should in alphabet';
        return false;
    }
    mynameError.innerHTML = '';
    return true;
}

//Function to validate Mother name
function validateMName(){
    var mname = document.getElementById('mname').value;

    if(mname.length == 0){
        mnameError.innerHTML = ' **Mother Name is required';
        return false;
    }
    if(mname.length < 3){
        mnameError.innerHTML = ' **Minimum 3 char required';
        return false;
    }
    if(mname.length > 20){
        mnameError.innerHTML = ' **Last name should be less than 20 char';
        return false;
    }
    if(mname.match(/^[0-9]*$/)){
        mynameError.innerHTML = ' **Name should in alphabet';
        return false;
    }
    mnameError.innerHTML = '';
    return true;
}

//Function to validate Father name
function validateFName(){
    var fname = document.getElementById('fname').value;

    if(fname.length == 0){
        fnameError.innerHTML = ' **Father Name is required';
        return false;
    }
    if(fname.length < 3){
        fnameError.innerHTML = ' **Minimum 3 char required';
        return false;
    }
    if(fname.length > 20){
        fnameError.innerHTML = ' **Last name should be less than 20 char';
        return false;
    }
    if(fname.match(/^[0-9]*$/)){
        mynameError.innerHTML = ' **Name should in alphabet';
        return false;
    }
    fnameError.innerHTML = '';
    return true;
}

//Function to validate Date of Birth
function validateDOB(){
    var dobString = document.getElementById('dob').value;
    var myDate = new Date();
    var parts = dobString.split("-");
    console.log(dobString);
    console.log(parts);

    if(dobString == ""){
        dobError.innerHTML = ' **Date of Birth required';
        return false;
    }
   
    if(Date.parse(dobString) > Date.parse(myDate.toDateString())){
        dobError.innerHTML = " **You can't select future date as DOB";
        return false;
    }

    if(myDate.getFullYear() - parts[0] > 24){
        dobError.innerHTML = ' **Date of Birth should not be greater than 24';
        return false;
    }
    dobError.innerHTML = '';
    return true;
}

//Function to validate Email
function validateEmail(){
    var emailId = document.getElementById('email-id').value;

    if(emailId.length == 0){
        emailError.innerHTML = ' **Email is required';
        return false;
    }
    if(!emailId.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        emailError.innerHTML = ' **Invalid Email';
        return false;
    }
    emailError.innerHTML = '';
    return true;
}

//Function to validate Phone Number
function validatePhone(){
    var phoneNum = document.getElementById('phone-no').value;

    if(phoneNum.length == 0){
        mobileError.innerHTML = ' **Phone number is required';
        return false;
    }
    if(phoneNum.length !== 10){
        mobileError.innerHTML = ' **Phone Number should be of 10 digits';
        return false;
    }
    if(!phoneNum.match(/^[0-9]{10}$/)){
        mobileError.innerHTML = ' **Only digits please';
        return false;
    }
    mobileError.innerHTML = '';
    return true;
}

//Function to validate Gender
function validateGender(){
    var genderSelected = document.querySelector('input[name = "gender"]:checked');

    if(genderSelected != null){
        genderError.innerHTML = '<img src="Checkmark.svg" alt="">';
        return true;
    }
    genderError.innerHTML = ' **Please enter your gender';
    return false;
}
//Function for valid category name
function validCategory(){
    var categoryName = document.getElementById('category-name').value;

    if(categoryName == "select category"){
        categoryError.innerHTML ='**Select the category';
        return false;
    }
    categoryError.innerHTML = '';
    return true;
}

//Function to validate Country Name
function validateCountry(){
    var countryName = document.getElementById('country').value;

    if(countryName == ""){
        countryError.innerHTML = ' **Country name required';
        return false;
    }

    if(!countryName.match(/^[A-Za-z]*$/) ){
        countryError.innerHTML = ' **Country name should be in alphabet';
        return false;
    }
    countryError.innerHTML = '';
    return true;
}

//Function to validate State Name
function validateState(){
    var stateName = document.getElementById('state').value;

    if(stateName == ""){
        stateError.innerHTML = ' **State name required';
        return false;
    }
    if(!stateName.match(/^[A-Za-z]*$/) ){
        stateError.innerHTML = ' **State name should be in alphabet';
        return false;
    }
    stateError.innerHTML = '';
    return true;
}

//Function to validate Address
function validateAddress(){
    var address = document.getElementById('address').value;

    if(address == ""){
        addressError.innerHTML = ' **Address is required';
        return false;
    }

    if(!address.match(/^[A-Za-z]*$/)){
        addressError.innerHTML = ' **Numeric is not allowed';
        return false;
    }
    addressError.innerHTML = '';
    return true;
}

//Function to validate PinCode
function validatePinCode(){
    var pinCode = document.getElementById('pincode').value;

    if(pinCode.length == 0){
        pinCodeError.innerHTML = ' **PinCode is required';
        return false;
    }
    if(pinCode.length !== 6){
        pinCodeError.innerHTML = ' **PinCode should be of 6 digits';
        return false;
    }
    if(!pinCode.match(/^[0-9]{6}$/)){
        pinCodeError.innerHTML = ' **Only digits please';
        return false;
    }
    pinCodeError.innerHTML = '';
    return true;
}

//Function to validate City Name
function validateCity(){
    var cityName = document.getElementById('city').value;

    if(cityName == ""){
        cityError.innerHTML = ' **City name required';
        return false;
    }
    if(!cityName.match( /^[A-Za-z]*$/)) {
        cityError.innerHTML ='** Only alphabets';
        return false;
    }
    cityError.innerHTML = '';
    return true;
}

//Function to validate District Name
function validateDistrict(){
    var districtName = document.getElementById('district').value;

    if(districtName == ""){
        districtError.innerHTML = ' **District name required';
        return false;
    }
    if(!districtName.match(/^[A-Za-z]*$/) ){
        districtError.innerHTML = ' **District name should be in alphabet';
        return false;
    }
    districtError.innerHTML = '';
    return true;
}

//Function to validate Matriculation Board
function validateBoard(){
    var boardName = document.getElementById('board').value;

    if(boardName == 0){
        matriculationError.innerHTML = '**Enter the Board';
        return false;
    }
    if(!boardName.match(/^[A-Za-z]*$/)){
        matriculationError.innerHTML = '**Number is not allowed';
        return false;
    }
    matriculationError.innerHTML = '';
    return true;
}

//Function to validate Percentage
function validatePercent(){
    var percentage = document.getElementById('percent').value;

    if(percentage == 0){
        percentError.innerHTML = '**Enter your percentage';
        return false;
    }
    if(!percentage.match(/^[0-9.%]*$/)){
        percentError.innerHTML = '**Aplbhabet is not allowed';
        return false;
    }
    percentError.innerHTML = '';
    return true;
}

//Function to validate Roll no.
function validateRollno(){
    var rollno = document.getElementById('rollno').value;

        if(rollno.length == 0){
            rollnoError.innerHTML = ' **Roll no. is required';
            return false;
        }
        if(rollno.length !== 6){
            rollnoError.innerHTML = ' **Roll no. should be of 6 digits';
            return false;
        }
        if(!rollno.match(/^[0-9]{6}$/)){
            rollnoError.innerHTML = ' **Only digits please';
            return false;
        }
        rollnoError.innerHTML = '';
        return true;
    }

//Function to validate Passing Year
function validatePassingYear(){
    var passing = document.getElementById('passing').value;
    
    if(passing.length == 0){
        passingError.innerHTML = ' **Pasing Year is required';
        return false;
    }
    if(passing.length !== 4){
        passingError.innerHTML = ' **Passing Year should be of 4 digits';
        return false;
    }
    if(!passing.match(/^[0-9]{4}$/)){
       passingError.innerHTML = ' **Only digits please';
        return false;
    }
    passingError.innerHTML = '';
    return true;
}

//Function to validate Hobbies
function validateHobbies(){
    var hobbies = document.getElementById('hobbies').value;
    var requiredChar = 15;
    var leftChar = requiredChar - hobbies.length;

    if(leftChar > 0){
        hobbiesError.innerHTML = leftChar + ' more characters required';
        return false;
    }
    hobbiesError.innerHTML = '';
    return true;
}

//Function to validate Matriculation Board
function validateIBoard(){
    var IboardName = document.getElementById('Iboard').value;

    if(IboardName == ""){
        IintermediateError.innerHTML = '**Enter the Board';
        return false;
    }
    if(!IboardName.match(/^[A-Za-z]*$/)){
        IintermediateError.innerHTML = '**Number is not allowed';
        return false;
    }
    IintermediateError.innerHTML = '';
    return true;
}

//Function to validate Percentage
function validateIPercent(){
    var Ipercentage = document.getElementById('Ipercent').value;

    if(Ipercentage == 0){
        IpercentError.innerHTML = '**Enter your percentage';
        return false;
    }
    if(Ipercentage <= 3){
        IpercentError.innerHTML = '**Enter valid percentage';
        return false;
    }
    if(!Ipercentage.match(/^[0-9.%]*$/)){
        IpercentError.innerHTML = '**Aplbhabet is not allowed';
        return false;
    }
    IpercentError.innerHTML = '';
    return true;
}

//Function to validate Roll no.
function validateIRollno(){
    var Irollno = document.getElementById('Irollno').value;

        if(Irollno.length == 0){
            IrollnoError.innerHTML = ' **Roll no. is required';
            return false;
        }
        if(Irollno.length !== 6){
            IrollnoError.innerHTML = ' **Roll no. should be of 6 digits';
            return false;
        }
        if(!Irollno.match(/^[0-9]{6}$/)){
            IrollnoError.innerHTML = ' **Only digits please';
            return false;
        }
        IrollnoError.innerHTML = '';
        return true;
    }

//Function to validate Passing Year
function validateIPassingYear(){
    var Ipassing = document.getElementById('Ipassing').value;
    
    if(Ipassing.length == 0){
        IpassingError.innerHTML = ' **Pasing Year is required';
        return false;
    }
    if(Ipassing.length !== 4){
        IpassingError.innerHTML = ' **Passing Year should be of 4 digits';
        return false;
    }
    if(!Ipassing.match(/^[0-9]{4}$/)){
        IpassingError.innerHTML = ' **Only digits please';
         return false;
     }
    IpassingError.innerHTML = '';
    return true;
}

function validatePicture(){
    var pic = document.getElementById("fileupload");

    if(pic == 0){
        picError.innerHTML = 'no file chosen';
        return false;
    }
    picError.innerHTML = '';
    return true;
}
function validateSignature(){
    var sign = document.getElementById("signupload");

    if(sign == 0){
        signError.innerHTML = 'no file chosen';
        return false;
    }
    signError.innerHTML = '';
    return true;
}

//Function to validate while the submit button is clicked aby the user
function validateForm(){
    if(!validateMyName() || !validateMName() || !validateFName() || !validateLName() || !validateDOB() ||
    !validateEmail() || !validatePhone() || !validateGender() ||
    !validateCountry() || !validateState() || !validateAddress() ||
    !validatePinCode() || !validateCity() || !validateDistrict() ||
    !validCategory ||!validateHobbies() || !validateBoard || !validateRollno 
    || !validatePercent() || !validatePassingYear() || !validateIPassingYear() || !validatePicture() ||
     !validateSignature()){
        submitError.innerHTML = 'Please fix the error to submit';
        return false;
        
    }
}