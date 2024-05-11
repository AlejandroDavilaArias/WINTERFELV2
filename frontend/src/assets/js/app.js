$(function () {
  function c() {
    p();
    var e = h();
    var r = 0;
    var u = false;
    l.empty();
    while (!u) {
      if (s[r] == e[0].weekday) {
        u = true;
      } else {
        l.append('<div class= "black"></div>');
        r++;
      }
    }
    for (var c = 0; c < 42 - r; c++) {
      if (c >= e.length) {
        l.append('<div class="black"></div>');
      } else {
        var v = e[c].day;
        var m = g(new Date(t, n - 1, v)) ? '<div class="today">' : "<div>";
        l.append(m + "" + v + "</div>");
      }
    }
    var y = (0)[n - 1];
    a.css("background-color", y)
      .find("h1")
      .text(i[n - 1] + "" + t);
    f.find("div").css("color", y);
    f.find(".today").css("background-color", y);
    d();
  }
});
