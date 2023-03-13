var rank1 = document.getElementById('rank_1');
var rank2 = document.getElementById('rank_2');
var rank3 = document.getElementById('rank_3');
var ranking = document.getElementById('rnk');
var score = document.getElementById('score');
var nick = document.getElementById('nick');

function click_rank1() {
    if(rank1.src == 'http://127.0.0.1:5500/img/1st.jpg') {
        rank1.src = './img/2st.jpg';
        rank2.src = './img/1st.jpg';
        ranking.innerHTML = '2st';
        score.innerHTML = '9,810,000';
        nick.innerHTML = 'HOW EVER GLOW';
    } else if(rank1.src == 'http://127.0.0.1:5500/img/2st.jpg'){
        rank1.src = './img/1st.jpg';
        rank2.src = './img/2st.jpg';
        ranking.innerHTML = '1st';
        score.innerHTML = '10,800,000';
        nick.innerHTML = 'I HAVE A PLAN';
    } else if(rank1.src == 'http://127.0.0.1:5500/img/3st.jpg') {
        rank1.src = './img/1st.jpg';
        rank2.src = './img/2st.jpg';
        rank3.src = './img/3st.jpg';
        ranking.innerHTML = '1st';
        score.innerHTML = '10,800,000';
        nick.innerHTML = 'I HAVE A PLAN';
    }
};

function click_rank2() {
    if(rank1.src == 'http://127.0.0.1:5500/img/1st.jpg') {
        rank1.src = './img/3st.jpg';
        rank2.src = './img/1st.jpg';
        rank3.src = './img/2st.jpg';
        ranking.innerHTML = '3st';
        score.innerHTML = '1,880,000';
        nick.innerHTML = 'GOOD PLAN';
    } else if(rank1.src == 'http://127.0.0.1:5500/img/3st.jpg') {
        rank1.src = './img/2st.jpg';
        rank2.src = './img/1st.jpg';
        rank3.src = './img/3st.jpg';
        ranking.innerHTML = '2st';
        score.innerHTML = '9,810,000';
        nick.innerHTML = 'HOW EVER GLOW';
    } else if(rank1.src == 'http://127.0.0.1:5500/img/2st.jpg') {
        rank1.src = './img/3st.jpg';
        rank2.src = './img/1st.jpg';
        rank3.src = './img/2st.jpg';
        ranking.innerHTML = '3st';
        score.innerHTML = '1,880,000';
        nick.innerHTML = 'GOOD PLAN';
    }
}


