$(document).ready(function() {
    const fileUpload = document.getElementById("upload-file");
    const audio = document.getElementById("audio");
    const canvas = document.getElementById("visualization");
    const ctx = adjustCanvas();

    function playAudio(files) {
        audio.src = URL.createObjectURL(files[0]);
        audio.load();
        audio.play();
        return audio;
    }

    function adjustCanvas() {
        const canvas = document.getElementById("visualization");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        return canvas.getContext("2d");
    }

    function getAudioAnalyzer(audio) {
        const context = new AudioContext();
        const src = context.createMediaElementSource(audio);
        const analyser = context.createAnalyser();
        src.connect(analyser);
        analyser.connect(context.destination);
        analyser.fftSize = 256;
        return analyser;
    }

    fileUpload.onchange = function () {
        const WIDTH = canvas.width;
        const HEIGHT = canvas.height;

        const files = this.files;
        const audio = playAudio(files);
        const analyser = getAudioAnalyzer(audio);

        const bufferLength = analyser.frequencyBinCount;

        const dataArray = new Uint8Array(bufferLength);

        const barWidth = (WIDTH / bufferLength) * 2.5;
        const barHeightMuliply = 2.2;
        let barHeight;
        let x = 0;

        renderFrame();

        function renderFrame() {
            requestAnimationFrame(renderFrame);

            x = 0;

            analyser.getByteFrequencyData(dataArray);

            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, WIDTH, HEIGHT);

            for (let i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i] * barHeightMuliply;

                let r = 199 + (50 * (i / bufferLength));
                let g = 196 - (196 * (i / bufferLength));
                let b =  6 +  (255 - barHeight) / 2;

                ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

                x += barWidth + 1;
            }
        }
    };
});
