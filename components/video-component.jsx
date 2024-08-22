export async function VideoComponent({ url }) {
  return (
    <video
      autoPlay
      loop
      muted
      aria-label="Video player"
      className="object-cover"
    >
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
