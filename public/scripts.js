function myJsFunction(){
    //var username=document.getElementById('input1').value;
    //var password=document.getElementById('input2').value;
    
    //window.location.href = '/result?username=' + username + '&password=' + password ; 

    form(action='/register', method='POST', enctype='multipart/form-data')
    form(action='/index', method='POST', enctype='multipart/form-data')
 }
