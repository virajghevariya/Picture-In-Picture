const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Select Media stream, pass to video element,then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        } 
    } catch (error) {
        // catch error
        console.log('Whoops, Something went wrong', error);
    }
}

button.addEventListener('click', async () => {
    // Disable button
    button.disable = true;

    // Start Picture In Picture
    await videoElement.requestPictureInPicture();

    // enable button
    button.disable = false;
});

// On Load
selectMediaStream();