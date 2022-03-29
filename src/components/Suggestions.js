export default function Suggestions() {
  return (
    <div className="suggestions">
      <h2 className="suggestions_title">People you may know</h2>
      {[1, 2, 3, 4].map((key) => (
        <div className="suggestions_profile" key={key}>
          <div className="suggestions_profile-pfp">
            <img
              src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe"
              alt="profile pic"
              className="img-fluid"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "flex-end"
            }}
          >
            <h3 className="suggestions_profile-name">Nina Douglas</h3>
            <p className="suggestions_profile-title">Recruiter-Orange</p>
          </div>
          <button className="btn btn-add">+</button>
        </div>
      ))}
    </div>
  );
}
