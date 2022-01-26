var quotes=["A great man is different from an eminent one in that he is ready to be the servant of the society-DR.B.R.Ambedkar","You will face many defeats in life, but never let yourself be defeated. -Maya Angelou",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "In the end, it's not the years in your life that count. It's the life in your years. -Abraham Lincoln",
    "Never let the fear of striking out keep you from playing the game. -Babe Ruth",
    "Life is either a daring adventure or nothing at all. -Helen Keller",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. -Dr. Seuss"
     ,"If life were predictable it would cease to be life and be without flavor -Eleanor Roosevelt",
     "In the end, it's not the years in your life that count. It's the life in your years. -Abraham Lincoln",
    "Life is ours to be spent, not to be saved.-D. H. Lawrence"]
    function quote(){
        var random=Math.floor(Math.random()*(quotes.length));
        document.getElementById('Display').innerHTML=quotes[random];
        var sheet = document.createElement('style')
        sheet.innerHTML = "div {color:rgb(121, 15, 15);font-family: 'Bree Serif', serif;font-size: 1.5rem;overflow:hidden;}";
        document.body.appendChild(sheet);
    }