export default function Details() {
  return (
    <section className="details">
      <div className="details_head">
        <div className="details_head-pfp">
          <img
            src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe"
            alt="profile"
            style={{
              height: "92px",
              width: "92px",
              borderRadius: " 50%",
              objectFit: "cover"
            }}
          />
        </div>
        <div className="details_head-name">Lucille Montgomery</div>
        <p className="details_head-title">UI/UX Designer</p>
      </div>
      <ul className="details-mid">
        <li className="details_connections">
          <span className="text-bold">767</span>
          <span>Connections</span>
        </li>
        <li className="details_views">
          <span className="text-bold">64</span>
          <span>View</span>
        </li>
      </ul>
      <div className="details-footer">
        <p className="text-xs">Free access exclusive tools & insights</p>
        <button className="btn btn-premium">Upgrade to Premium</button>
      </div>
    </section>
  );
}
