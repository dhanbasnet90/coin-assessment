let coin = {
    state: 0,
   
    flip: function() { 
        
        this.state = Math.floor(Math.random()*2)
        
        
        
        /* 1. Randomly set your coin object's 
        "state" property to be either 
           0 or 1: use "this.state" to access the "state"
            property on this object.*/
    },
    
    toString: function() {
        if(this.state === 1) {
            return 'Heads';
        }
        else{
            return 'Tails';
        }
        /* 2. Return the string "Heads" or "Tails", 
        depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
        if (this.state ===1) {
        image.src = './images/220px-1994-P_Washington_quarter_obverse.jpg'
        }
        else {
        image.src = './images/back_3d_4_2.jpg'
        }
        /* 3. Set the properties of this image element 
        to show either face-up
           or face-down, depending on whether this.state 
           is 0 or 1.*/
        return image;
    }
};

var disImage = document.querySelector('body');

function display20Flips()  {

    for(i=0;i<20;i++) {
        coin.flip()
        display20Flips.append(coin.toString())
    }
    /* use a loop to flip the coin 20 times. 
    Each time the coin flips, 
    display the result of each flip as a 
    string on the page (make use of your toString() method) */
    
}

display20Flips();

function display20Images() { 

    for (let j =0;j<20;j++) {
        coin.flip()
        display20Images.append(coin.toHTML())
    }
    /* again use a loop to flip the coin 20 times…
    but this time instead of displaying the result as a string, 
    display the result of each flip as an HTML IMG element on the 
    page (make use of your toHTML() method). */

}
display20Images()





