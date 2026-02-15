import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="home">
      <h1>First-Time House Buyer Checklist</h1>
      <p className="home-subtitle">
        Navigate the home buying process with confidence. Track every step from
        financial preparation through closing and beyond.
      </p>
      <div className="home-features">
        <div className="feature">
          <h3>8 Comprehensive Categories</h3>
          <p>From mortgage prep to post-purchase tasks</p>
        </div>
        <div className="feature">
          <h3>Track Your Progress</h3>
          <p>Check off items and add personal notes</p>
        </div>
        <div className="feature">
          <h3>Save Your Work</h3>
          <p>Create an account to save and resume anytime</p>
        </div>
      </div>
      <Link to="/dashboard" className="btn btn-primary btn-lg">
        {user ? 'Go to Dashboard' : 'Start Checklist'}
      </Link>
    </div>
  );
}
