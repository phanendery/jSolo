const rescale = () => {
  const svg = document.querySelector("svg");
  const WIDTH = 1400;
  const HEIGHT = 700;
  const scale = Math.min(
    window.innerWidth / WIDTH,
    // window.innerHeight / HEIGHT
    (window.innerHeight - 68) / HEIGHT
  );
  svg.style.cssText = `transform: scale(${scale});`;
};
window.addEventListener("resize", rescale);
window.addEventListener("DOMContentLoaded", rescale);

//Make an SVG Container
let svgContainer = d3
  .select("body")
  .append("svg")
  .attr("width", 1400)
  .attr("height", 700);

let rectangle = svgContainer
  .append("rect")
  .attr("x", 40) //starts at 40
  .attr("y", 80)
  .attr("width", 820)
  .attr("height", 530)
  .attr("fill", "green")
  .attr("stroke", "black")
  .attr("stroke-width", 2);

let mainOutline = svgContainer
  .append("rect")
  .attr("x", 50)
  .attr("y", 100)
  .attr("width", 800)
  .attr("height", 500)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

let pkCircle = svgContainer
  .append("circle")
  .attr("cx", 460)
  .attr("cy", 210)
  .attr("r", 100)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

let topMiniReactable = svgContainer
  .append("rect")
  .attr("x", 410)
  .attr("y", 90)
  .attr("width", 100)
  .attr("height", 10)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

let penaltyBox = svgContainer
  .append("rect")
  .attr("x", 237.5)
  .attr("y", 100)
  .attr("width", 410)
  .attr("height", 170)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

let goalBox = svgContainer
  .append("rect")
  .attr("x", 345)
  .attr("y", 100)
  .attr("width", 220)
  .attr("height", 60)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

let infoBox = svgContainer
  .append("rect")
  .attr("x", 890)
  .attr("y", 40)
  .attr("width", 550)
  .attr("height", 50)
  .attr("stroke", "white")
  .attr("fill", "white")
  .attr("stroke-width", 2);

let infoText = svgContainer
  .append("text")
  .attr("x", 125)
  .attr("y", 45)
  .text(
    "Welcome to Golaso! This is a interactive soccer field that displays the top soccer players' goals. Click on the points to explore!"
  )
  .attr("font-family", "Darker Grotesque")
  .attr("font-size", 25);

let ronaldo = svgContainer
  .append("image")
  .attr(
    "xlink:href",
    "https://images-na.ssl-images-amazon.com/images/I/81rogEnFK4L._SY679_.jpg"
  )
  .attr("x", 862)
  .attr("y", 67)
  .attr("height", 400)
  .attr("width", 250);

let messi = svgContainer
  .append("image")
  .attr(
    "xlink:href",
    "https://cdn.shopify.com/s/files/1/0747/3829/products/mHP1968_1024x1024.jpg?v=1511950575"
  )
  .attr("x", 1112)
  .attr("y", 66)
  .attr("height", 400)
  .attr("width", 250);

let aguero = svgContainer
  .append("image")
  .attr(
    "xlink:href",
    "https://resources.premierleague.com/photos/2019/03/07/81966fb7-9cbd-4e77-8ed8-b221d814ef31/Aguero.jpg?width=932&height=620"
  )
  .attr("x", 862)
  .attr("y", 328)
  .attr("height", 400)
  .attr("width", 250);

let rashford = svgContainer
  .append("image")
  .attr(
    "xlink:href",
    "https://img.estadao.com.br/resources/jpg/3/2/1508772607123.jpg"
  )
  .attr("x", 1112)
  .attr("y", 328)
  .attr("height", 400)
  .attr("width", 250);

//for the data points
d3.json("goalData.json", function(data) {
  Object.values(data.players).forEach(player => {
    player.forEach(goal => {
      let color = "red";
      if (goal.name === "Sadio Mane") {
        color = "blue";
      }
      let x = goal.position[0];
      let y = goal.position[1];
      let goal1 = svgContainer
        .append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", 5)
        .attr("stroke", "white")
        .attr("fill", color)
        .attr("stroke-width", 2)
        .on("mouseover", function(d) {
          goal1.attr("fill", "green").attr("r", 8);
        })
        .on("mouseout", function(d) {
          goal1.attr("fill", color).attr("r", 5);
        })
        .on("click", function(d) {
          let dataBox = svgContainer
            .append("rect")
            .attr("x", 521)
            .attr("y", 341)
            .attr("width", 339)
            .attr("height", 269)
            .attr("stroke", "black")
            .attr("fill", "white") //white LOOK HERE
            .attr("stroke-width", 2);

          let oppHeader = svgContainer
            .append("text")
            .attr("x", 550)
            .attr("y", 390)
            .text("Opponent:")
            .attr(
              "font-family",
              " Century Gothic,CenturyGothic,AppleGothic,sans-serif"
            )
            .attr("font-size", 14);

          let playerNameH = svgContainer
            .append("text")
            .attr("x", 700)
            .attr("y", 390)
            .text("Player:")
            .attr(
              "font-family",
              " Century Gothic,CenturyGothic,AppleGothic,sans-serif"
            )
            .attr("font-size", 14);

          let playerName = svgContainer
            .append("text")
            .attr("x", 720)
            .attr("y", 410)
            .text(goal.name)
            .attr(
              "font-family",
              " Century Gothic,CenturyGothic,AppleGothic,sans-serif"
            )
            .attr("font-size", 14);

          let opponent = svgContainer
            .append("text")
            .attr("x", 570)
            .attr("y", 410)
            .text(goal.opponent)
            .attr(
              "font-family",
              " Century Gothic,CenturyGothic,AppleGothic,sans-serif"
            )
            .attr("font-size", 14);

          let homeVal = "Away";

          if (goal.home === true) {
            homeVal = "Home";
          }

          let home = svgContainer
            .append("text")
            .attr("x", 550)
            .attr("y", 450)
            .text(homeVal)
            .attr(
              "font-family",
              " Century Gothic,CenturyGothic,AppleGothic,sans-serif"
            )
            .attr("font-size", 14);

          let time = svgContainer
            .append("text")
            .attr("x", 700)
            .attr("y", 450)
            .text("Time:")
            .attr(
              "font-family",
              " Century Gothic,CenturyGothic,AppleGothic,sans-serif"
            )
            .attr("font-size", 14);

          let goalTime = svgContainer
            .append("text")
            .attr("x", 720)
            .attr("y", 470)
            .text(goal.time)
            .attr("fill", "green")
            .attr(
              "font-family",
              " Century Gothic,CenturyGothic,AppleGothic,sans-serif"
            )
            .attr("font-size", 14);

          let salah = " https://www.dw.com/image/43516410_303.jpg";
          let mane =
            "https://fadeawayworld.net/wp-content/uploads/2019/03/1134890328.jpg.0.jpg";
          let picLink = "";
          if (goal.name === "Mohamed Salah") {
            picLink = salah;
          } else {
            picLink = mane;
          }

          if (picLink === salah) {
            let playerpic = svgContainer
              .append("image")
              .attr("xlink:href", picLink)
              .attr("x", 510)
              .attr("y", 510)
              .attr("height", 100)
              .attr("width", 200);
          } else {
            let playerpic = svgContainer
              .append("image")
              .attr("xlink:href", picLink)
              .attr("x", 495)
              .attr("y", 510)
              .attr("height", 100)
              .attr("width", 200);
          }

          let liverpool = svgContainer
            .append("image")
            .attr(
              "xlink:href",
              "https://upload.wikimedia.org/wikipedia/hif/b/bd/Liverpool_FC.png"
            )
            .attr("x", 680)
            .attr("y", 500)
            .attr("height", 100)
            .attr("width", 200);

          let gifGoal = svgContainer
            .append("image")
            .attr("xlink:href", goal.gif)
            .attr("x", 40)
            .attr("y", 340);
        });
    });
  });
});

rescale();
