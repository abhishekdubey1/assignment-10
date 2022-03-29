export default function CreatePost() {
  return (
    <div className="create-post">
      <div className="create-post_input">
        <input placeholder="Write here. Add images or videos for visual impact" />
      </div>
      <div className="create-post_btns">
        <div>
          <button className="btn">Article</button>
        </div>
        <div>
          <button className="btn">Image</button>
        </div>
        <div>
          <button className="btn">Video</button>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button className="btn">Send</button>
        </div>
      </div>
    </div>
  );
}
