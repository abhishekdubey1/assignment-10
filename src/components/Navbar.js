import { SearchOutlined as SearchIcon } from "@mui/icons-material";
// LinkedIn as LinkedInIcon,
// HomeOutlined as HomeIcon,
const navItems = [
  "Home",
  "Network",
  "Messaging",
  "Notifications",
  "Jobs",
  "Work"
];

const proflePictures = [
  "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe",
  "https://images.unsplash.com/photo-1628890920690-9e29d0019b9b",
  "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe",
  "https://images.unsplash.com/photo-1628890920690-9e29d0019b9b",
  "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe"
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_head">
        <LinkedInIcon />
        <div className="nav_search">
          <span className="">
            <SearchIcon />
          </span>
          <input placeholder="Search" />
        </div>
      </div>
      <div className="nav-items">
        {navItems.map((item) => (
          <div
            className={`nav-item ${item === "Home" ? " primary" : ""}`}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="btn-profile">
        <img src={proflePictures[0]} className="" alt="profile" />
      </div>
    </nav>
  );
}
const LinkedInIcon = () => (
  <svg
    width="45"
    height="45"
    viewBox="0 0 30 30"
    className="inline-block bg-sky-500"
    style={{ backgroundColor: "dodgerblue" }}
  >
    <title>LinkedIn</title>
    <g>
      <path
        d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
        fill="#fff"
      ></path>
    </g>
  </svg>
);
