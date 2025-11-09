var video2 = document.getElementById("Summer");

        function playPause() {
            if(video2.paused) {
                video2.play();
            } else {
                video2.pause();
            }
        }
        function Zoom(){
            video2.width = 800;
        }

        function Normal(){
            video2.width = 400;
        }

        function Small(){
            video2.width = 200;
        }