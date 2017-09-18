<transition name="fade">
    <router-view></router-view>
</transition>

<!-- Foot Starts -->

<psg-footer></psg-footer>

<!-- Foot Ends -->

<!-- Footer Starts -->

<footer>
    <!-- Container -->
    <div class="container">
        <!-- Footer Content -->
        <!-- Paragraph -->
        <p class="pull-left">Copyright &copy {{ date('Y') }} - <router-link to="/" exact>Phoenix Shanti Group</router-link>
        </p>
        <ul class="list-inline pull-right">
            <!-- List -->
            <router-link to="/" exact>Home</router-link>
            <router-link to="/about/mission">Mission</router-link>
            <router-link to="/services/housing">Housing</router-link>
            <router-link to="/services/hiv">HIV+ Services</router-link>
            <router-link to="/contact/office">Contact</router-link>
        </ul>
        <!-- Clearfix -->
        <div class="clearfix"></div>
    </div>
</footer>

<!-- Footer Ends -->

</div></div>

<!-- Outer Ends -->

<!-- Scroll to top -->
<span class="totop"><a href="#"><i class="fa fa-angle-up bg-color"></i></a></span>

<!-- Javascript files -->
<!-- jQuery -->
<script src="/js/jquery.js"></script>
<!-- Bootstrap JS -->
<script src="/js/bootstrap.min.js"></script>
<!-- Placeholders JS -->
<script src="/js/placeholders.js"></script>
<!-- Magnific Popup -->
<script src="/js/jquery.magnific-popup.min.js"></script>
<!-- Owl carousel -->
<script src="/js/owl.carousel.min.js"></script>
<!-- Respond JS for IE8 -->
<script src="/js/respond.min.js"></script>
<!-- HTML5 Support for IE -->
<script src="/js/html5shiv.js"></script>
<!-- Main JS -->
<script src="/js/main.js"></script>

<!-- Javascript for this page -->
<!-- Parallax slider & Modernizr -->
<script src="/js/modernizr.custom.28468.js"></script>
<script src="/js/jquery.cslider.js"></script>
<!-- Waypoints -->
<script src="/js/waypoints.min.js"></script>
<!-- jQuery CountTo -->
<script src="/js/jquery.countTo.js"></script>

<script type="text/javascript">
    $('#da-slider').cslider({
        autoplay	: true,
        bgincrement	: 150
    });
</script>

<script type="text/javascript">
    <!-- Counting code -->
    $(document).ready(function(){
        // Way Points With Count To()
        $('.number-count').waypoint(function(down){
            if(!$(this).hasClass('stop-counter'))
            {
                $(this).countTo();
                $(this).addClass('stop-counter');
            }
        }, {
            offset: '90%'
        });
    });
</script>

<!-- Custom JS. Type your JS code in custom.js file -->
<script src="/js/custom.js"></script>
<script src="/js/app.js?t={{ time() }}"></script>
</body>
</html>