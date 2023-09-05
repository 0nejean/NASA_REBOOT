var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function onYouTubePlayerAPIReady() {
  new YT.Player("topic_player", {
    videoId: "EA46nq6klPw",
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "EA46nq6klPw",
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
}
