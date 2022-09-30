var backdrop=document.querySelector(".backdrop");
var signIn=document.querySelector(".sign-in-modal");
var register=document.querySelector(".register-modal");
var modalButton=document.querySelector(".modal-button");
var regButton=document.querySelector(".reg");
var signInButton=document.querySelector(".sgn");
regButton.addEventListener("click", function(){
    register.classList.add("open");
    backdrop.classList.add("open");
})
signInButton.addEventListener("click", function(){
    signIn.classList.add("open");
    backdrop.classList.add("open");
})
backdrop.addEventListener("click", function(){
    closeModal();
});
if (modalButton){
    modalButton.addEventListener("click", closeModal);
}
function closeModal(){
    if(signIn){
        signIn.classList.remove("open");
        backdrop.classList.remove("open");
    }
    if(register){
        register.classList.remove("open");
        backdrop.classList.remove("open");
    }
    
}
