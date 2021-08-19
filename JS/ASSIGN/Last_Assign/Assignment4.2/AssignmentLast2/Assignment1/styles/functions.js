function myFunction() {
    var x = document.getElementById("cust");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function test() {
    alert("I am an alert box!");
}

var button;
function hidecar() {
    document.getElementById("cust").style.display = "none";
    document.getElementById("cash").style.display = "none";
    document.getElementById("credit").style.display = "none";
    document.getElementById("debit").style.display = "none";
    document.getElementById("senior").style.display = "none";
    document.getElementById("adult").style.display = "none";
    document.getElementById("child").style.display = "none";
}
function viewcar() {
    document.getElementById("cust").style.display = "";
    viewpay();
}
var list = [];
var head = "|Selected Items|<br>";
var clean;
var numlist = [];
function allitems(item) {
    //if item is NOT in the list = true
    if (!list.toString().includes(item)) {
        //if an empty index is found put new item there
        if (list.indexOf('') >= 0) {
            list[list.indexOf('')] = item;
        }
        //add to list
        else {
            list.push(item);
        }
        //output to list span
        clean = add_values(list).toString().replace(/,/g, " ");
        document.getElementById("list").innerHTML = clean;
    }
    else {
        //if item is there delete it and output
        list[list.indexOf(item)] = "";
        clean = add_values(list).toString().replace(/,/g, " ");
        document.getElementById("list").innerHTML = clean;
    }
    document.getElementById("listhead").innerHTML = head;
    var total = 0;
    var tmp3 = 0.00;
    for (var a = 0; a < numlist.length; a++) {
        total = total + numlist[a] * listwqty[a];
        tmp3 = tmp3 + numlist[a] * 0.07;
    }
    var total2 = parseFloat(total) + parseFloat(total) * .07;
    document.getElementById('tax').innerHTML = "Tax: $" + tmp3.toFixed(2);
    document.getElementById("total").innerHTML = "Total: $" + total2;
}
function verify() {
    //var form = document.getElementById("mainform").elements.namedItem("name").value;
    var form = document.forms[0];
    var pay = document.getElementById('cust_pay');
    var age = document.getElementById('cust_age');
    var verifylist = [];
    verifylist[0] = form.elements.namedItem('name').value;
    verifylist[1] = form.elements.namedItem('address').value;
    verifylist[2] = form.elements.namedItem('phone').value;
    verifylist[3] = form.elements.namedItem('cashnum').value;
    verifylist[4] = form.elements.namedItem('credit').value;
    verifylist[5] = form.elements.namedItem('scredit').value;
    verifylist[6] = form.elements.namedItem('inputdredit').value;
    verifylist[7] = form.elements.namedItem('dedit').value;
    verifylist[8] = form.elements.namedItem('sdredit').value;
    verifylist[9] = form.elements.namedItem('cust_pay').options[0].text;
    verifylist[10] = form.elements.namedItem('cust_age').options[0].text;
    var missing = ["Missing"];
    for (var v = 0; v < verifylist.length; v++) {
        if (v === 0 && verifylist[v] === "") {
            missing +=" 1: Address ";
        }
        else if (v === 1 && verifylist[v] === "") {
            missing += "2: Name ";
        }
        else if (v === 2 && verifylist[v] === "") {
            missing +="3: Phone Number none given";
        }
        else if (v === 2 && isNaN(verifylist[v])) {
            missing += "3: Phone Number is not a number ";
        }
        else if (v === 2 && verifylist[v].length !== 10) {
            missing += "3: Phone Number is not long enough or to short to be a phone number";
        }
        if (pay.selectedIndex === 1 && v === 3) {
            if (isNaN(verifylist[v])) {
                missing += "Payment: input amount is not a number ";
            }
        }
        else if (pay.selectedIndex === 0 && v === 9) {
            if (verifylist[v] === "") {
                missing += "Payment: No payment amount selected ";
            }                        
        }
        else if (age.selectedIndex === 0 && v === 10) {
            if (verifylist[v] === "") {
                missing += "Age: No age selected ";
            }
        }
        else if (pay.selectedIndex === 2 && v === 4) {
            if (isNaN(verifylist[v])) {
                missing += "Payment: Credit card number is not a number ";
            }
        }
        else if (pay.selectedIndex === 2 && v === 5) {
            if (isNaN(verifylist[v])) {
                missing += "Payment: Security code number is not a number ";
            }
        }
        else if (pay.selectedIndex === 2 && v === 6) {
            if (isNaN(verifylist[v])) {
                missing += "Payment: input amount is not a number ";
            }
        }

        else if (pay.selectedIndex === 3 && v === 7) {
            if (isNaN(verifylist[v])) {
                missing += "Payment: Dedit card number is not a number ";
            }
        }
        else if (pay.selectedIndex === 3 && v === 8) {
            if (isNaN(verifylist[v])) {
                missing += "Payment: input amount is not a number ";
            }
        }
    }
    if (missing.toString().length > 8) {
        alert(missing.toString());
    }
}

var qtyselectlist = ["jnum", "fnum", "pnum", "anum", "snum", "rnum", "cnum", "mnum", "frnum"];
var qtylist = [];
var listwqty = [];
function getqty() {

    for (var c = 0; c < qtyselectlist.length; c++) {
        var tmp = document.getElementById(qtyselectlist[c]);
        qtylist[c] = tmp.options[tmp.selectedIndex].text;
    }
    //for (var f = 0; f < qtyselectlist.length; f++) {
    //    alert(qtyselectlist[f] + " " + qtylist[f]);
    //}
    for (var g = 0; g < list.length; g++) {
        if (list[g] === "jello") {
            listwqty[g] = qtylist[0];
        }
        else if (list[g] === "fruit") {
            listwqty[g] = qtylist[1];
        }
        else if (list[g] === "prune") {
            listwqty[g] = qtylist[2];
        }
        else if (list[g] === "alcohol") {
            listwqty[g] = qtylist[3];
        }
        else if (list[g] === "steak") {
            listwqty[g] = qtylist[4];
        }
        else if (list[g] === "rolls") {
            listwqty[g] = qtylist[5];
        }
        else if (list[g] === "cool") {
            listwqty[g] = qtylist[6];
        }
        else if (list[g] === "mac") {
            listwqty[g] = qtylist[7];
        }
        else if (list[g] === "french") {
            listwqty[g] = qtylist[8];
        }
    }
}
var bothlist = [];
function add_values(list1) {
    for (var i = 0; i < list1.length; i++) {
        if (list1[i] === "jello" || list1[i] === "rolls" || list1[i] === "cool") {
            numlist[i] = 1.00;
        }
        else if (list1[i] === "steak" || list1[i] === "mac" || list1[i] === "fruit") {
            numlist[i] = 5.00;
        }
        else if (list1[i] === "prune" || list1[i] === "alcohol" || list1[i] === "french") {
            numlist[i] = 2.00;
        }
        else if (list1[i] === "" || list1[i] === null) {
            numlist[i] = "";
        }
    }
    getqty();
    for (var b = 0; b < numlist.length; b++) {
        if (numlist[b] === "" || numlist[b] === null) {
            bothlist[b] = "";
        }
        else {
            var tmp2 = numlist[b] * listwqty[b];            
            bothlist[b] = listwqty[b] + " " + list1[b] + " $" + numlist[b].toFixed(2) + " = $" + tmp2.toFixed(2) + "<br>";
        }

    }

    return bothlist;
}
function viewpay() {
    var select = document.getElementById('cust_pay');
    var agent_id = select.selectedIndex;
    if (agent_id === 1) {
        document.getElementById("cash").style.display = "";
        document.getElementById("credit").style.display = "none";
        document.getElementById("debit").style.display = "none";
    }
    else if (agent_id === 2) {
        document.getElementById("credit").style.display = "";
        document.getElementById("debit").style.display = "none";
        document.getElementById("cash").style.display = "none";
    }
    else if (agent_id === 3) {
        document.getElementById("debit").style.display = "";
        document.getElementById("cash").style.display = "none";
        document.getElementById("credit").style.display = "none";
    }
    var select2 = document.getElementById('cust_age');
    var agent_id2 = select2.selectedIndex;
    if (agent_id2 === 1) {
        document.getElementById("senior").style.display = "";
        document.getElementById("child").style.display = "none";
        document.getElementById("adult").style.display = "none";
    }
    else if (agent_id2 === 2) {
        document.getElementById("adult").style.display = "";
        document.getElementById("child").style.display = "none";
        document.getElementById("senior").style.display = "none";
    }
    else if (agent_id2 === 3) {
        document.getElementById("child").style.display = "";
        document.getElementById("senior").style.display = "none";
        document.getElementById("adult").style.display = "none";
    }

}