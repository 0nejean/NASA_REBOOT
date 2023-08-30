var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function onYouTubePlayerAPIReady() {
  new YT.Player("picsntv_player", {
    videoId: "21X5lGlDOfg",
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "21X5lGlDOfg",
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
}
