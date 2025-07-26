class Shape {
    constructor(geometric, stroke) {
        this.shapeType = geometric;
        this.hasStroke = stroke;
        this.x = random(10,width);
        this.y = random(10,height);
        this.w = random(64,148);
        this.angle = random(95,340);
        this.color = color(random(130,235),random(130,235),random(130,235));
        this.shadowColor =  color(random(10,75),random(10,75),random(10,75));
    }

    show() {
        push();

        // Style the circle using shadows.
        drawingContext.shadowOffsetX = 5;
        drawingContext.shadowOffsetY = -5;
        drawingContext.shadowBlur = 10;
        drawingContext.shadowColor = this.shadowColor;
        
        // Add stroke & color
        fill(this.color);
        if (this.hasStroke) {
            stroke(240);
            strokeWeight(6);
        } else {
            noStroke();
        }

        // Decide what shape to draw
        switch(this.shapeType) {
            case "square":
                square(this.x,this.y,this.w);    
                break
            case "circle":
                circle(this.x,this.y,this.w);
                break
            case "arc":
                arc(this.x,this.y,this.w,this.w,0, this.angle,CHORD,5);
                break
            case "three":
                fill(240);
                strokeWeight(9);
                stroke(this.color);
                textSize(this.w)
                text("3",this.x,this.y);
                break
        }
        pop();
    }
}