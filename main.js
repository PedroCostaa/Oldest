document.addEventListener("DOMContentLoaded", () =>{
  const login = document.querySelector("#login");
  const accountType = document.querySelector("#accountType");
  const createAccount = document.querySelector("#createAccount");
  const idosoPage = document.querySelector("#idosoPage");
  const voluntarioPage = document.querySelector("#voluntarioPage");
  
  document.querySelector("#linklogin").addEventListener("click", e =>{
        e.preventDefault();
        login.classList.add("hidden");
        accountType.classList.remove("hidden");
    });
  
  document.querySelector("#accountTypeLink").addEventListener("click", e =>{
    e.preventDefault();
    accountType.classList.add("hidden");
    createAccount.classList.remove("hidden");
  });
  
  document.querySelector("#idosoPageLink").addEventListener("click", e =>{
    e.preventDefault();
    accountType.classList.add("hidden");
    idosoPage.classList.remove("hidden");
  })
  
  document.querySelector("#linkcreateAccount").addEventListener("click", e =>{
    e.preventDefault();
    createAccount.classList.add("hidden");
    voluntarioPage.classList.remove("hidden");
  });
});
