import React from 'react';
import './App.css';

function App() {
  return (
    <div className="signup-container">
      <img className='image1' src="https://s3-alpha-sig.figma.com/img/37f3/2626/1680d9613629542a2474f79f92f7c022?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ak8ed-A0oC2xQPtxNjBlss6riMVn70av2vFMjQ~rEdTiaCd70Z80aI6ye7fn-9nQ87E9A8ba0KzcSKRj-8gascEYAIfikQ1idnVCrrDih0B0xmA5Do61CgslWc30M3iL8oXQi6GiT29TGRRmqT4SRrUbVVmCRLkypQ4FGqQggbNjCmP-oO8vPiMXwgZTo0vr3Je6y~JHUj-phU2LArRBmvrz4kZxhzHzKR1zVDYv10MV31p3WuJML7Jt6WRNdU-PrGEn-1XxDRm-ksA1~IXuxnupxt4pO1Q4OEAclP~dGAgtx3sDj9Y539juQ6utY0rRlaZhKlSri1YXJ12yMKqa~A__" alt="reachinbox-logo"  />
      <div className="signup-box">
        <h2>Create new account</h2>
        <button className="google-signup">
          <img className='image' src="https://w7.pngwing.com/pngs/989/129/png-transparent-google-logo-google-search-meng-meng-company-text-logo.png" alt="Google Icon" />
          Sign Up with Google
        </button>
        <button className="create-account">
          Create an account
        </button>
        <p>
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </div>
      <footer>
        <p>© 2023 Reachinbox. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
