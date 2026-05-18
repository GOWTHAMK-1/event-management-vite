function VideoSection() {
  return (
    <section className="video-section">

      <h2>Event Highlights</h2>

      <video controls>

        <source
          src="/event-video.mp4"
          type="video/mp4"
        />

      </video>

    </section>
  )
}

export default VideoSection