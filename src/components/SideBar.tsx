
import type { ComponentPropsWithoutRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Side_Bar.css';

type SVGProps = ComponentPropsWithoutRef<'svg'>;

// 1. Menu icon
function MenuIcon(props: SVGProps) {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 6.5H20" />
      <path d="M4 12H20" />
      <path d="M4 17.5H20" />
    </svg>
  );
}

function HomeIcon(props: SVGProps) {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      {/* Верхняя крыша (навес) */}
      <path d="M12 3L22 11L19.5 13L12 7L4.5 13L2 11L12 3Z" />

      {/* Корпус дома с вырезом под дверь */}
      <path d="M12 8.8L18.5 14V21H14.2V16.2C14.2 15.54 13.66 15 13 15H11C10.34 15 9.8 15.54 9.8 16.2V21H5.5V14L12 8.8Z" />
    </svg>
  );
}

// 2. Calendar icon
function CalendarIcon(props: SVGProps) {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Calendar frame */}
      <rect x="3.5" y="5" width="17" height="15.5" rx="3" />

      {/* Calendar top */}
      <path d="M7.5 3.5V7" />
      <path d="M16.5 3.5V7" />
      <path d="M3.5 9.5H20.5" />

      {/* Calendar days */}
      <path d="M8 13H8.01" strokeWidth="2.5" />
      <path d="M12 13H12.01" strokeWidth="2.5" />
      <path d="M16 13H16.01" strokeWidth="2.5" />

      <path d="M8 16.5H8.01" strokeWidth="2.5" />
      <path d="M12 16.5H12.01" strokeWidth="2.5" />
    </svg>
  );
}

// 3. History icon
function HistoryIcon(props: SVGProps) {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Clock */}
      <path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1" />

      {/* History arrow */}
      <path d="M3.5 4.5V9H8" />

      {/* Clock hands */}
      <path d="M12 7.5V12L15.5 14" />
    </svg>
  );
}

// 4. User avatar icon
function AvatarIcon(props: SVGProps) {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Outer circle */}
      <circle cx="12" cy="12" r="9.5" />

      {/* Head */}
      <circle
        cx="12"
        cy="9"
        r="3.2"
        fill="currentColor"
        stroke="none"
      />

      {/* Shoulders */}
      <path
        d="M5.8 18.5C6.8 15.8 9.1 14.5 12 14.5C14.9 14.5 17.2 15.8 18.2 18.5"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export default function SideBar() {
    const [ isActive, setActive] = useState<boolean>(false);
    const handleToggle = () => {
        setActive(!isActive);
    }
  return (
    <div className={isActive ? "side_bar_active" : "side_bar"}>
        <button className="menuIcon" onClick={handleToggle}>
            <MenuIcon />
            <h3>Menu</h3>
        </button>
        <Link to="/home">
        <button className='homeIcon'>
            <HomeIcon />
            <h3>Home Page</h3>
        </button>
        </Link>
        <Link to="/calendar">
        <button className="calendarIcon">
            <CalendarIcon  />
            <h3>Calendar</h3>
        </button>
        </Link>
        <button className="historyIcon">
            <HistoryIcon />
            <h3>History</h3>
        </button>
        <button className="avatarIcon">
            <AvatarIcon />
            <h3>Profile</h3>
        </button>
    </div>
  );
}
