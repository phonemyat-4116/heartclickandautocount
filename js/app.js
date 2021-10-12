// start search app 
const search = document.querySelector('.search');
const searchbtn = document.querySelector('.btn');
// console.log(searchbtn)

searchbtn.addEventListener('click',()=>{
    search.classList.toggle('active');
})
// end search app 


// start autocount app 
const followers = document.querySelectorAll('.follower');
// console.log(followers)

followers.forEach(follower=>{

    follower.innerText = '0';

    const updatecounter = ()=>{

        const target = +follower.getAttribute('data-target');
        // console.log(typeof target);

        const flr =  +follower.innerText;

        const increment = target/100;
        // console.log(increment)

        if(flr < target){
            follower.innerHTML = `${Math.ceil(increment + flr)}`;
            // follower.innerText = increment + flr + 'K';
            setTimeout(updatecounter,30);
        }
    }

    updatecounter();
})
// end autocount app 


// start click app 
const imgs = document.querySelectorAll('.img');
// const times = document.querySelectorAll('.times');
const times1 = document.getElementById('times1');
const times2 = document.getElementById('times2');
const times3 = document.getElementById('times3');

console.log(imgs);


// Method 1 
// let time1value = 0;
// let time2value = 0;
// let time3value = 0;

// Method 2 
let [time1value,time2value,time3value] = [0,0,0];


let clicktimes = 0;


imgs.forEach(img=>{
    
    img.addEventListener('click',(e)=>{
        // console.log('hay');

        if(clicktimes === 0){

            clicktimes = new Date().getTime();
            // console.log(clicktime)
        }else{

            if(new Date().getTime() - clicktimes < 800){

                // console.log('i am double click');

                creaticon(e);

                clicktimes = 0;


            }else{
                clicktimes = new Date().getTime();
            }
        }


    })
})


const creaticon = (e)=>{

    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const like = document.createElement('i');
    like.classList.add('fas');
    like.classList.add('fa-thumbs-up');

    const haha = document.createElement('i');
    haha.classList.add('fas');
    haha.classList.add('fa-grin-squint-tears');

    // console.log(haha);

    const cx = e.clientX;
    const cy = e.clientY;

    const offsettop = e.target.offsetTop;
    const offsetleft = e.target.offsetLeft;

    const xinside = cx - offsetleft;
    const yinside = cy - offsettop;

    heart.style.top = `${yinside}px`;
    heart.style.left = `${xinside}px`;

    like.style.top = `${yinside}px`;
    like.style.left = `${xinside}px`;

    haha.style.top = `${yinside}px`;
    haha.style.left = `${xinside}px`;

    // imgs[0].appendChild(heart);
    // imgs[1].appendChild(like);
    // imgs[2].appendChild(haha);

    // console.log(e.target)

    if(e.target.classList.contains('loveme-rose')){
        imgs[0].appendChild(heart);

        time1value += 1;
        times1.innerText = time1value;

    }else if(e.target.classList.contains('loveme-srk')){
        imgs[1].appendChild(like);

        time2value += 1;
        times2.innerText = time2value;

    }else if(e.target.classList.contains('loveme-boy')){
        imgs[2].appendChild(haha);

        time3value += 1;
        times3.innerText = time3value;
    }

    setTimeout(()=>heart.remove(),1000);
    setTimeout(()=>like.remove(),1000);
    setTimeout(()=>haha.remove(),1000);

    
}
// end click app 

