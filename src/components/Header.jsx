export default function Header() {
  return (
    <div className="card header">
      <div className="header-top">
        <div className="profile">
          <div className="avatar" />
          <div>
            <div className="name">Rijul Sen</div>
            <div className="role">Student</div>
          </div>
        </div>

        <div className="menu">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="header-bottom">
        <div className="status">
          <span className="dot" />
          Available for work
        </div>
        <div className="social">
          <span>f</span>
          <span>in</span>
          <span>ig</span>
        </div>
      </div>
    </div>
  );
}
