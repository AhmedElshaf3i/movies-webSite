export function contactCheck() {
  let emailRegex = /^.{1,}@.{2,}$/;
  let phoneRegex = /^(002)?01[0125][0-9]{8}$/;
  let passRegex = /^((?=.*\d)((?=.*[a-zA-Z]))).{8,}$/;
  let nameFlag = false,
    emailFlag = false,
    phoneFlag = false,
    ageFlag = false,
    passFlag = false,
    repassFlag = false;

  /*************email check********************** */
  /**
   * phone should be contains @
   */
  $("#name").blur((e) => {
    if (  $(e.target).val() == "" ) {
      $("#nameAlert").removeClass("d-none");
      nameFlag = false;
    } else {
      $("#nameAlert").addClass("d-none");
      nameFlag = true;
    }
  });

  $("#email").blur((e) => {
    if (
      emailRegex.test($("#email").val()) == false ||
      $(e.target).val() == ""
    ) {
      $("#emailAlert").removeClass("d-none");
      emailFlag = false;
    } else {
      $("#emailAlert").addClass("d-none");
      emailFlag = true;
    }
  });

  /*************phone check ****************/
  /**
   * phone should be start 002? and  011-012-015-010 then any 8's numbers
   */
  $("#phone").blur((e) => {
    if (
      phoneRegex.test($("#phone").val()) == false ||
      $(e.target).val() == ""
    ) {
      $("#phoneAlert").removeClass("d-none");
      phoneFlag = false;
    } else {
      $("#phoneAlert").addClass("d-none");
      phoneFlag = true;
    }
  });

  /*********************age check ****************/
  /**
   * age should be graeter than 10 && less than 120
   */
  $("#age").blur((e) => {
    if (
      $("#age").val() < 10 ||
      $("#age").val() > 120 ||
      $(e.target).val() == ""
    ) {
      $("#ageAlert").removeClass("d-none");
      ageFlag = false;
    } else {
      $("#ageAlert").addClass("d-none");
      ageFlag = true;
    }
  });

  /*********************pass check ****************/
  /**
   * pass should contains at least one num and one char 
   *  and length not less than 8 digit
   */
  $("#pass").blur((e) => {
    if ((passRegex.test($("#pass").val()) == false) || $(e.target).val() == "") {
     
      $(e.target).next().removeClass("d-none");
      passFlag = false;
    } else {
     
      $(e.target).next().addClass("d-none");
      passFlag = true;
    }
    if ($("#repass").val() == $("#pass").val()&&$(e.target).val() != "")
    {
      $("#RepasswordAlert").addClass("d-none");
      repassFlag = true;
    }

  });

  /*********************repass check ****************/
  /**
   * if pass not equals repass and repass not empty
   */
  $("#repass").blur((e) => {
    if ($("#repass").val() == $("#pass").val() && $(e.target).val() != "") {
      $("#RepasswordAlert").addClass("d-none");
      repassFlag = true;
    } else {
      $("#RepasswordAlert").removeClass("d-none");
      repassFlag = false;
    }
  });

  /**
   * check if target input is empty show the specific alert
   * check if all input is valid active submit btn
   */

  $(".contactInput").blur(() => {
    if (
      nameFlag == true &&
      emailFlag == true &&
      ageFlag == true &&
      passFlag == true &&
      phoneFlag == true &&
      repassFlag == true
    ) {
      $("#submitBtn").attr("disabled", false);
      



    } else {
      $("#submitBtn").attr("disabled", true);
      $("#submitBtn").next().addClass("d-none");
    }
  });

  $("#submitBtn").click(()=>
  {
       $("#submitBtn").next().removeClass("d-none");
       $("#submitBtn").next().text(`welcome...${$("#name").val()}`);
       $("#submitBtn").attr("disabled", true);
       $(".contactInput").val("");//clear input
  })
}
