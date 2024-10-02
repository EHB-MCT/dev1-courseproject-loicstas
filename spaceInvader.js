drawLine();

function drawLine() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   context.lineWidth = 5;
   context.fillStyle = 'black';
   context.beginPath();
   context.rect(50, 50,300,300);
   context.fill();

   context.lineWidth = 5;
   context.fillStyle = 'green';
   context.beginPath();
   context.rect(75, 70,50,50);
   context.rect(75, 120,50,50)
   context.rect(75, 170,50,50)
   context.rect(125, 120,50,50)
   context.fill();

   context.lineWidth = 5;
   context.fillStyle = 'green';
   context.beginPath();
   context.rect(175, 220,50,50);
   context.fill();

   context.lineWidth = 5;
   context.fillStyle = 'green';
   context.beginPath();
   context.rect(225, 120,50,50);
   context.rect(275, 120,50,50);
   context.rect(275, 170,50,50);
   context.rect(275, 70,50,50);
   context.fill();
   
}