        let carImg = document.getElementById('car');
        let step = 100;
        let flag = true;
        let i = 0.01;

        carImg.style.opacity = 1;
        function animation(){
            
            if(window.innerWidth - 250 > step && flag) {
                carImg.style.transform = 'scaleX(1)';
                step += 1;
            }else{
                // step = 0;
                // carImg.style.opacity += 0 + i*10;
                carImg.style.transform = 'scaleX(-1)';
                step -= 1;
                flag = step == 100 ? true: false;
                // carImg.style.opacity = carImg.style.opacity + i;
            }
            if(Math.round(window.innerWidth * 0.7) < step) {
                // carImg.style.opacity = carImg.style.opacity - i;
            }
            // else if(Math.round(window.innerWidth * 0.7) > step){
            //     carImg.style.opacity = carImg.style.opacity + i;
            // }
            // if(carImg.style.opacity <= 0.2){
            //     clearInterval(animation);
            //     setTimeout(() => {carImg.style.opacity = 1, i = 0.01, step = 0}, 500);
            // }   
            carImg.style.left = step + 'px';
        }

        setInterval(animation, 7);

        