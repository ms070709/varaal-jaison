// The media files are intentionally fixed in the website source.
// There are no visitor upload, replace, or delete controls.
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("entryAudio");
  if (audio) {
    audio.addEventListener("error", () => {
      // The browser's built-in audio controls will report unavailable media.
      console.info("Add your original song at assets/entry-song.mp3.");
    });
  }
});
