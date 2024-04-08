// script.js

// logo 클릭
function div_logoClick(event){
    window.scroll( {top: 0, left: 0, behavior:"smooth"} );
    // location.href = "./index.html";
}

// Nav 버튼 클릭
function btn_Click(event){
    switch(event.target.id){
        case 'btn_About':
            console.log(event.target.id);
            break;

        case 'btn_SignUp':
            console.log(event.target.id);
            break;

        case 'btn_SignIn':
            console.log(event.target.id);
            break;            
    }    
}