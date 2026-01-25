  document.addEventListener("DOMContentLoaded", function () {
    const youtubeContainers = document.querySelectorAll(".youtube-container");
  
    youtubeContainers.forEach(container => {
      const videoId = container.getAttribute("data-video-id");
      const thumbnail = container.querySelector(".youtube-thumbnail");
      const playButton = container.querySelector(".youtube-play-btn");
  
      // Set YouTube Thumbnail URL
    //   thumbnail.src = `https://img.youtube.com/vi/pvvTK81hOi8/hqdefault.jpg`;

    // Set the background image instead of using an <img> tag
    container.style.backgroundImage = `url(https://img.youtube.com/vi/pvvTK81hOi8/hqdefault.jpg)`;

  
      // When user clicks on the container, load YouTube video
      container.addEventListener("click", function () {
        const iframe = document.createElement("iframe");
        iframe.setAttribute("src", `https://www.youtube.com/embed/pvvTK81hOi8?autoplay=0&amp;autohide=1&amp;rel=0`);
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
        iframe.setAttribute("allowfullscreen", "true");
        iframe.classList.add("responsive-iframe");
  
        // Replace the thumbnail with the iframe
        container.innerHTML = "";
        container.appendChild(iframe);
      });
    });
  });
  