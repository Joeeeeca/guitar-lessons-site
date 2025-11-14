export function Welcome() {
  return (
    <section className="py-20 md:py-32 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Welcome!</h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Welcome to George Capon Guitar Lessons. Whether you're looking
                for acoustic or electric guitar tuition, I can help! I teach
                online through Zoom in a professionally lit studio.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-balance">
                All Abilities Welcome
              </h3>

              <p>
                My lessons have helped students of all abilities improve their
                playing, regardless of preferred genre.
              </p>

              <p>
                Every student receives tailored guidance and the tools needed to
                become a confident, advanced guitar player.
              </p>
            </div>
          </div>

          {/* VIDEO */}
          <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
            <video
              src="/video/Introduction_video.mp4"
              controls
              preload="metadata"
              playsInline
              aria-label="Welcome video introduction by George Capon"
              poster="/images/welcome-video-thumb.jpg"
              className="w-full h-full object-center"
            >
              Sorry, your browser doesn’t support embedded videos.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
