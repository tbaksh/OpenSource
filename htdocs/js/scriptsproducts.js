//Business Logic

var Kitchen = {
  smallkitchenPackage: 2000,
  allblackKitchen: 5000,
  marbleKitchen: 9000,
  outdoorKitchen: 

}

var Bathroom = {
  shower: 2500,
  showerslidingDoor: 600,
  bathTub: 500,
  fullBathroom: 4000
}

var Patio = {
  simplePatio: 500,
  firePit: 500
}

var Stone = {
  venner: 5.50
}

var Floorings = {
  porcelainWood: 1.99,
  naturalWood: 1.99

}

var Extras = {
  painting: 400,
  trim:
  crownMoulding:
  ceilingDesigns:
}

var pricing = [];

function grandTotal() {
  var total = 0;
  var i = 0;

  for (i = 0; i < pricing.length; i++) {
    total += pricing[i];
  }
  return total;
}




$(document).ready(function () {

  $("button#btnSubmit").click(function (event) {
    event.preventDefault();
    var user = document.getElementById('btnSubmit').value;

  });


  $("button#tileBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityKitchen").val());
    var price = kitchenPackage.small;
    var total = tilePrice * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders'>"
      + "<td><span> Small Kitchen Package</span></td>"
      + "<td><span>" + total + "$ " + "</span></td>" + "<td> <button type='submit' id='delete' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete").click(function () {
      $(".myOrders").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("$ " + grandTotal());

    });

    $(".myOrders").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Kitchen");
      $("#productOrdered").text("Small Kitchen Package");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("$  " + total);
    });

    $('#tileForm')[0].reset();
    $("#totalPay").text("$ " + grandTotal());


  });


  $("button#sinkBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantity2").val());
    var blackPrice = kitchenPackage.allblackkitchen;
    var total = blackPrice * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders2'>"
      + "<td><span> All Black Kitchen</span></td>"
      + "<td><span>" + total + "$ " + "</span></td>" + "<td> <button type='submit' id='delete2' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    $("button#delete2").click(function () {
      $(".myOrders2").remove();
      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("$ " + grandTotal());

    });

    pricing.push(total);

    $(".myOrders2").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Kitchen");
      $("#productOrdered").text("All Black Kitchen");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("$  " + total);
    });

    $('#blackForm')[0].reset();
    $("#totalPay").text("$ " + grandTotal());


  });

  $("button#marbleBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantity3").val());
    var price = kitchenPackage.marblekitchen;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders3'>"
      + "<td><span> Marble Kitchen Package</span></td>"
      + "<td><span>" + total + "$ " + "</span></td>"+ "<td> <button type='submit' id='delete3' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete3").click(function () {
      $(".myOrders3").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("$ " +grandTotal());

    });

    $(".myOrders3").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Marble Kitchen Package");
      $("#productOrdered").text("Marble Kitchen Package");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("$  " + total);
    });

    $('#marbleForm')[0].reset();


  });

  $("button#outdoorBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantity4").val());
    var price = kitchenProducts.outdoor;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders4'>"
      + "<td><span> Outdoor Kitchen & Grill</span></td>"
      + "<td><span>" + total + "$ " + "</span></td>"+ "<td> <button type='submit' id='delete4' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete4").click(function () {
      $(".myOrders4").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("$ " + grandTotal());

    });

    $(".myOrders4").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Marble");
      $("#productOrdered").text("Marble");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("$  " + total);
    });

    $('#marbleForm')[0].reset();
    $("#totalPay").text("$ " + grandTotal());


  });

  $("button#concreteBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityEquip1").val());
    var price = bathroom.shower;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders5'>"
      + "<td><span> Shower</span></td>"
      + "<td><span>" + total + "$ " + "</span></td>"+ "<td> <button type='submit' id='delete5' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete5").click(function () {
      $(".myOrders5").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("$ " + grandTotal());

    });

    $(".myOrders5").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Shower");
      $("#productOrdered").text("Shower");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("$  " + total);
    });

    $('#showerForm')[0].reset();
    $("#totalPay").text("$ " + grandTotal());


  });

  $("button#slidingBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityEquip2").val());
    var price = bathroom.sliding;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders6'>"
      + "<td><span> Showing Sliding</span></td>"
      + "<td><span>" + total + "$ " + "</span></td>" + "<td> <button type='submit' id='delete6' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete6").click(function () {
      $(".myOrders6").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("$ " + grandTotal());

    });

    $(".myOrders6").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Shower Sliding Door");
      $("#productOrdered").text("Shower Sliding Door");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("$  " + total);
    });

    $('#slidingForm')[0].reset();
    $("#totalPay").text("$ " + grandTotal());


  });

  $("button#tubBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityEquip3").val());
    var price = bathroom.bathTub;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders7'>"
      + "<td><span> Bath Tub</span></td>"
      + "<td><span>" + total + "$ " + "</span></td>" + "<td> <button type='submit' id='delete7' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete7").click(function () {
      $(".myOrders7").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("$ " + grandTotal());

    });

    $(".myOrders7").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Bath Tub");
      $("#productOrdered").text("Bath Tub");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("$  " + total);
    });

    $('#tubForm')[0].reset();
    $("#totalPay").text("$ " + grandTotal());


  });

  $("button#fullBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityEquip4").val());
    var price = bathroom.fullbathroom;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders8'>"
      + "<td><span> Full Bathroom</span></td>"
      + "<td><span>" + total + "$ " + "</span></td>" + "<td> <button type='submit' id='delete8' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete8").click(function () {
      $(".myOrders8").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("$ " + grandTotal());

    });

    $(".myOrders8").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Full Bathroom");
      $("#productOrdered").text("Full Bathroom");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("$  " + total);
    });

    $('#fullForm')[0].reset();
    $("#totalPay").text("$ " + grandTotal());


  });

  $("button#simpleBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityBuild1").val());
    var price = patio.simplePatio;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders9'>"
      + "<td><span> Simple Patio</span></td>"
      + "<td><span>" + total + "$ " + "</span></td>" + "<td> <button type='submit' id='delete9' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete9").click(function () {
      $(".myOrders9").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("$ " + grandTotal());

    });

    $(".myOrders9").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Simple Patio");
      $("#productOrdered").text("Simple Patio");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("$  " + total);
    });

    $('#simpleForm')[0].reset();
    $("#totalPay").text("$ " + grandTotal());


  });


  $("button#blocksBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityBuild2").val());
    var price = buildingProducts.blocks;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders10'>"
      + "<td><span> Patio with Fire Pit</span></td>"
      + "<td><span>" + total + "$ " + "</span></td>" + "<td> <button type='submit' id='delete10' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete10").click(function () {
      $(".myOrders10").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("$ " + grandTotal());

    });

    $(".myOrders10").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Fire Pit");
      $("#productOrdered").text("Fire Pit");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("$  " + total);
    });

    $('#blocksForm')[0].reset();
    $("#totalPay").text("$ " + grandTotal());


  });


  $("button#vennerBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityFit1").val());
    var price = stone.venner;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders13'>"
      + "<td><span> Venner Stone</span></td>"
      + "<td><span>" + total + "$ " + "</span></td>" + "<td> <button type='submit' id='delete13' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete13").click(function () {
      $(".myOrders13").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("$ " + grandTotal());

    });

    $(".myOrders13").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Venner");
      $("#productOrdered").text("Venner");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("$  " + total);
    });

    $('#vennerForm')[0].reset();
    $("#totalPay").text("$ " + grandTotal());


  });


  $("button#porcelainBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityPorcelain1").val());
    var price = floorings.porcelain;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders16'>"
      + "<td><span> Porcelain</span></td>"
      + "<td><span>" + total + "$ " + "</span></td>" + "<td> <button type='submit' id='delete16' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete16").click(function () {
      $(".myOrders16").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("$ " + grandTotal());

    });

    $(".myOrders16").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Porcelain Floor");
      $("#productOrdered").text("Porcelain Floor");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("$  " + total);
    });

    $('#porcelainForm')[0].reset();
    $("#totalPay").text("$ " + grandTotal());


  });

  $("button#woodBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#woodProduct2").val());
    var price = floorings.wood;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders17'>"
      + "<td><span> Wood Product</span></td>"
      + "<td><span>" + total + "$ " + "</span></td>" + "<td> <button type='submit' id='delete17' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete17").click(function () {
      $(".myOrders17").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("$ " + grandTotal());

    });

    $(".myOrders17").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Wood");
      $("#productOrdered").text("Wood");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("$  " + total);
    });

    $('#woodForm')[0].reset();
    $("#totalPay").text("$ " + grandTotal());


  });

  $("button#tileBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityTile3").val());
    var price = floorings.tile;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders18'>"
      + "<td><span> Sockets</span></td>"
      + "<td><span>" + total + "$ " + "</span></td>" + "<td> <button type='submit' id='delete18' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete18").click(function () {
      $(".myOrders18").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("$ " + grandTotal());

    });

    $(".myOrders18").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Tile");
      $("#productOrdered").text("Tile");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("$  " + total);
    });

    $('#tileForm')[0].reset();
    $("#totalPay").text("$ " + grandTotal());


  });


  $("button#paintBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityPaint1").val());
    var price = extras.extrasPaint;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders20'>"
      + "<td><span> Painting</span></td>"
      + "<td><span>" + total + "$ " + "</span></td>" + "<td> <button type='submit' id='delete20' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete20").click(function () {
      $(".myOrders20").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("$ " + grandTotal());

    });

    $(".myOrders20").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Painting");
      $("#productOrdered").text("Painting");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("$  " + total);
    });

    $('#paintForm')[0].reset();

    $("#totalPay").text("$ " + grandTotal());


  });

  $("button#trimBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityTrim").val());
    var price = extras.trim;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders21'>"
      + "<td><span> Trim</span></td>"
      + "<td><span>" + total + "$ " + "</span></td>" + "<td> <button type='submit' id='delete21' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete21").click(function () {
      $(".myOrders21").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("$ " + grandTotal());

    });

    $(".myOrders21").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Trim");
      $("#productOrdered").text("Trim");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("$  " + total);
    });

    $('#trimForm')[0].reset();

    $("#totalPay").text("$ " + grandTotal());


  });

  $("button#checkoutBtn").click(function (event) {
    event.preventDefault();

    alert("Thank you, Your order had been recieved. Total amount to be paid is  $ " + grandTotal());

  });


























});
