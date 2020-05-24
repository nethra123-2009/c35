class Form {

    constructor() {
        this.input = createInput("Name");
        this.email = createInput("email")
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "survey on subjects");
        this.question1 = createElement('h3', "Q1.do you think we need more extracurricular activity lessons? ");
        this.radio = createRadio('h3');
        this.radio.option('yes');
        this.radio.option('No');
        this.question2 = createElement('h3', "Q2. if so which type of extracurricular activity would you choose?");
        this.radio1 = createRadio('h3');
        this.radio1.option('sports');
        this.radio1.option('art');
        this.radio1.option('musical instruments');
        this.radio1.option('dance');
        this.question3 = createElement('h3', "Q3.or do you think we dont need more extracurricular activities?");
        this.radio2 = createRadio('h3');
        this.radio2.option('i think we dont need more activities');
        this.radio2.option('i think we need more activities');
    }


    display() {
        this.input.position(670, 255)
        this.email.position(670, 165)
        this.button.position(700, 700)
        this.greeting.position(600, 105)
        this.text.position(600, 10)
        this.question1.position(500, 360)
        this.radio.position(600, 420)
        this.question2.position(500, 450)
        this.radio1.position(600, 510)
        this.question3.position(500, 540)
        this.radio2.position(600, 600)

        this.button.mousePressed(() => {
            User.input = this.input.value();
            User.email = this.email.value();
            peopleCount += 1;
            User.index = peopleCount;
            User.update();
            User.updateCount(peopleCount);
        });

    }
}