<!-- Navigation starts.  -->
<div class="navy">
   @if (!app()->isDownForMaintenance())
        <ul>
            <!-- Main menu -->
            <router-link to="/" tag="li" exact><a>Home</a></router-link>
            <li><a href="#">About</a>
                <ul>
                    <router-link to="/getting-started" tag="li"><a>Getting Started</a></router-link>
                    <router-link to="/about/mission" tag="li"><a>Mission</a></router-link>
                    <router-link to="/about/history" tag="li"><a>History</a></router-link>
                    <router-link to="/about/cultural-competency" tag="li"><a>Cultural Competency</a></router-link>
                    <router-link to="/about/privacy-policy" tag="li"><a>Privacy Policy</a></router-link>
                </ul>
            </li>
            <router-link to="/services/housing" tag="li"><a>HIV+ Housing</a></router-link>
            <router-link to="/services/hiv" tag="li"><a>HIV+ Services</a></router-link>
            <li><a href="#">Support</a>
                <ul>
                    <router-link to="/support/donate" tag="li"><a>Donate</a></router-link>
                    <router-link to="/support/volunteer" tag="li"><a>Volunteer</a></router-link>
                    <router-link to="/support/resources" tag="li"><a>Resources</a></router-link>
                </ul>
            </li>
            <router-link to="/blog" tag="li"><a>Blog</a></router-link>
            <li><a href="http://store.shantiaz.org">Store</a></li>
            <li><a href="#">Contact</a>
                <ul>
                    <router-link to="/contact/office" tag="li"><a>Office</a></router-link>
                    <router-link to="/contact/staff" tag="li"><a>Staff</a></router-link>
                    <router-link to="/contact/board" tag="li"><a>Board</a></router-link>
                </ul>
            </li>
        </ul>
   @endif
</div>
<!-- Navigation ends -->