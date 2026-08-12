export default function SideRail() {
  return (
    <div className="side-rail">
      <a href="https://www.linkedin.com/in/ankita-mishra17/" target="_blank" rel="noopener noreferrer">
        <span className="icn">
          <svg viewBox="0 0 24 24">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
          </svg>
        </span>
        <span className="lbl">LinkedIn</span>
      </a>
      <a href="https://github.com/Ankitamishra17" target="_blank" rel="noopener noreferrer">
        <span className="icn">
          <svg viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.58 2 12.17c0 4.48 2.87 8.28 6.84 9.63.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.18 10.18 0 0 0 22 12.17C22 6.58 17.52 2 12 2z" />
          </svg>
        </span>
        <span className="lbl">GitHub</span>
      </a>
      <a href="/Ankita_Resume.pdf" download>
        <span className="icn">
          <svg viewBox="0 0 24 24">
            <path
              d="M12 3v10.5m0 0 4-4m-4 4-4-4M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="lbl">Resume</span>
      </a>
      <a href="mailto:ankitamishra8763@gmail.com">
        <span className="icn">
          <svg viewBox="0 0 24 24">
            <path
              d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0 2.2V18h16V7.2l-7.4 5.3a1 1 0 0 1-1.2 0L4 7.2zm.6-.2 7.4 5.3L19.4 7H4.6z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="lbl">Email</span>
      </a>
    </div>
  );
}
