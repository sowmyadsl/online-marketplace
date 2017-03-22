$(function() {
  $("#purchase").submit(function(event) {
    var productInput = $("input#product").val();
    var quantityInput = $("input#quantity").val();
    var notesInput = $("input#notes").val();

    $("#text1").text(productInput);
    $("#text2").text(quantityInput);
    $("#text3").text(notesInput);
    $("#purchase-form").hide();
    $("#shipping-form").show();
    event.preventDefault();
  });
  $("#shipping").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var shippingInput = $("input:radio[name=shipping]:checked").val();

    $("#text4").text(nameInput);
    $("#text5").text(addressInput);
    $("#text6").text(shippingInput);

    $("#shipping-form").hide();
    $("#receipt").show();
    event.preventDefault();
  });
});
