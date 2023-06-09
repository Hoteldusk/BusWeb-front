document.addEventListener("DOMContentLoaded", ()=>{

    function handleChange() {
        const select1 = document.getElementById("select1");
        const select2 = document.getElementById("select2");
        const selval_default = select2.options[0].value;

        const mainviewForm = document.getElementById("mainview");

        if (select1.value === "str_default") {
          alert("첫 번째 선택지를 먼저 선택해주세요.");
          // select2.value = "";
          select2.value = selval_default

          return false;
        }

        if(select1.value === "str0006" && select2.value === "end0001") {
          mainviewForm.style.display = "block";
          mainviewForm.style.display = "flex";
        } else {
          mainviewForm.style.display = "none";
        }
      };

      select1.addEventListener("change", handleChange);
      select2.addEventListener("change", handleChange);
})