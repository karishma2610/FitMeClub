var backdrop=document.querySelector(".backdrop");
var contactModal=document.querySelector(".contact-modal");
var contactButtons=document.querySelectorAll(".cnt");
var okButton=document.querySelector(".ok-button");
for (var i=0; i<contactButtons.length; i++){
    contactButtons[i].addEventListener("click", function(){
        contactModal.classList.add("open");
        backdrop.classList.add("open");
    })
    
}
backdrop.addEventListener("click", function(){
    backdrop.classList.remove("open");
    closeModal();
});
if (okButton){
    okButton.addEventListener("click", closeModal);
}
function closeModal(){
    if(contactModal){
        contactModal.classList.remove("open");   
    }
    backdrop.classList.remove("open");
}