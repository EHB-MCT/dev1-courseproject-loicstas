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
   context.rect(70, 70,50,50);
   context.rect(70, 120,50,50)
   context.rect(70, 170,50,50)
   context.rect(120, 120,50,50)
   context.fill();

   context.lineWidth = 5;
   context.fillStyle = 'green';
   context.beginPath();
   context.rect(170, 220,50,50);
   context.fill();

   context.lineWidth = 5;
   context.fillStyle = 'green';
   context.beginPath();
   context.rect(220, 120,50,50);
   context.rect(270, 120,50,50);
   context.rect(270, 170,50,50);
   context.rect(270, 70,50,50);
   context.fill();
   
}