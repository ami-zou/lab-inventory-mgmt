import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav id="sidebar" class="sidebar js-sidebar">
      <div class="sidebar-content js-simplebar">
        <a class="sidebar-brand" href="index.html">
          <span class="align-middle">Lab Mgmt</span>
        </a>

        <ul class="sidebar-nav">
          <li class="sidebar-header">Pages</li>

          <li class="sidebar-item active">
            <a class="sidebar-link" href="index.html">
              <i class="align-middle" data-feather="sliders"></i>{" "}
              <span class="align-middle">Dashboard</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="pages-profile.html">
              <i class="align-middle" data-feather="user"></i>{" "}
              <span class="align-middle">Profile</span>
            </a>
          </li>

          <li class="sidebar-item">
            <Link to={"/page-1"} class="sidebar-link">
              <i class="align-middle" data-feather="user"></i>{" "}
              <span class="align-middle">Page 1</span>
            </Link>
          </li>

          <li class="sidebar-item">
            <Link to={"/page-2"} class="sidebar-link">
              <i class="align-middle" data-feather="user"></i>{" "}
              <span class="align-middle">Page 2</span>
            </Link>
          </li>

          <li class="sidebar-item">
            <Link to={"/page-3"} class="sidebar-link">
              <i class="align-middle" data-feather="user"></i>{" "}
              <span class="align-middle">Page 3</span>
            </Link>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="pages-sign-in.html">
              <i class="align-middle" data-feather="log-in"></i>{" "}
              <span class="align-middle">Sign In</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="pages-sign-up.html">
              <i class="align-middle" data-feather="user-plus"></i>{" "}
              <span class="align-middle">Sign Up</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="pages-blank.html">
              <i class="align-middle" data-feather="book"></i>{" "}
              <span class="align-middle">Blank</span>
            </a>
          </li>

          <li class="sidebar-item">
            <Link to={"/medicines"} class="sidebar-link">
              <i class="align-middle" data-feather="package"></i>{" "}
              <span class="align-middle">Medicines</span>
            </Link>
          </li>

          <li class="sidebar-header">Tools & Components</li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="ui-buttons.html">
              <i class="align-middle" data-feather="square"></i>{" "}
              <span class="align-middle">Buttons</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="ui-forms.html">
              <i class="align-middle" data-feather="check-square"></i>{" "}
              <span class="align-middle">Forms</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="ui-cards.html">
              <i class="align-middle" data-feather="grid"></i>{" "}
              <span class="align-middle">Cards</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="ui-typography.html">
              <i class="align-middle" data-feather="align-left"></i>{" "}
              <span class="align-middle">Typography</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="icons-feather.html">
              <i class="align-middle" data-feather="coffee"></i>{" "}
              <span class="align-middle">Icons</span>
            </a>
          </li>

          <li class="sidebar-header">Plugins & Addons</li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="charts-chartjs.html">
              <i class="align-middle" data-feather="bar-chart-2"></i>{" "}
              <span class="align-middle">Charts</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="maps-google.html">
              <i class="align-middle" data-feather="map"></i>{" "}
              <span class="align-middle">Maps</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
