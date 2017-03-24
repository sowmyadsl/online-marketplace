$(function() {
  $("#formOrder").submit(function(event) {
    var firstnameInput = $("input#first-name").val();
    var lastnameInput = $("input#last-name").val();
    var categoryInput = $("input:radio[name=category]:checked").val();
    var productnameInput = $("input#product-name").val();
    var quantityInput = $("input#quantity").val();
    var shippingInput = $("input#shipping-address").val();
    $("#text1").text(firstnameInput);
    $("#text2").text(lastnameInput);
    $("#text3").text(categoryInput);
    $("#text4").text(productnameInput);
    $("#text5").text(quantityInput);
    $("#text6").text(shippingInput);
    $("#formOrder").hide();
    $("#receipt").show();
    $("h2").replaceWith("<h2>Order Receipt Confirmation</h2>");
    event.preventDefault();
  });
});
