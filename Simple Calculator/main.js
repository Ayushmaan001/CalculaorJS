function hesabla() {

    var eded1 = Number(document.getElementById("eded1").value);
    var eded2 = Number(document.getElementById("eded2").value);

    //Bu yolla da alinir eslinde ama tekce 1ci if bloku calisir, sebebini anlamadim ama

    //if (document.getElementById("vurma").click) {
    //    //netice = eded1 * eded2;
    //    document.getElementById("neticee").value = eded1 * eded2;
    //}

    //else if (document.getElementById("bolme").click) {
    //    //netice = eded1 / eded2;
    //    document.getElementById("neticee").value = eded1 / eded2;
    //}

    //else if (document.getElementById("toplama").click) {
    //    //netice = eded1 + eded2;
    //    document.getElementById("neticee").value = eded1 + eded2;
    //}

    //else if (document.getElementById("cixma").click) {
    //    //netice = eded1 - eded2;
    //    document.getElementById("neticee").value = eded1 - eded2;
    //}

    //
    document.getElementById("vurma").onclick = function () {
    document.getElementById("neticee").value = eded1 * eded2;
}

    document.getElementById("bolme").onclick = function () {
    document.getElementById("neticee").value = eded1 / eded2;
}

    document.getElementById("toplama").onclick = function () {
    document.getElementById("neticee").value = eded1 + eded2;
}

    document.getElementById("cixma").onclick = function () {
    document.getElementById("neticee").value = eded1 - eded2;
}

}