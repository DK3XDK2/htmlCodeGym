// ============================================================
// CodeGym Career Landing Page - Material Interactions
// ============================================================

$(document).ready(function () {
  // Initialize MDB Waves Effect
  if (typeof Waves !== 'undefined') {
    Waves.init();
    Waves.attach('.btn, .nav-link, .partner-logo-pill, .fab-consultation', ['waves-effect', 'waves-light']);
  }

  // 1. Dynamic Navbar Shadow on Scroll
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 40) {
      $('.navbar-custom').addClass('scrolled z-depth-2');
    } else {
      $('.navbar-custom').removeClass('scrolled z-depth-2');
    }
  });

  // 2. Smooth Scrolling for Anchor Links
  $('a[href^="#"]').on('click', function (e) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 70
      }, 600);
      // Close mobile navbar on click
      if ($('.navbar-collapse').hasClass('show')) {
        $('.navbar-toggler').click();
      }
    }
  });

  // 3. Stats Counter Animation on Viewport Entry
  var animated = false;
  function checkScrollForCounter() {
    var statsElement = $('#stats-section');
    if (statsElement.length && !animated) {
      var top_of_element = statsElement.offset().top;
      var bottom_of_element = statsElement.offset().top + statsElement.outerHeight();
      var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      var top_of_screen = $(window).scrollTop();

      if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
        animated = true;
        $('.stat-number[data-count]').each(function () {
          var $this = $(this);
          var countTo = parseInt($this.attr('data-count'), 10);
          var suffix = $this.attr('data-suffix') || '';
          
          $({ countNum: 0 }).animate({
            countNum: countTo
          }, {
            duration: 1600,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum) + suffix);
            },
            complete: function () {
              $this.text(this.countNum + suffix);
            }
          });
        });
      }
    }
  }

  $(window).on('scroll', checkScrollForCounter);
  checkScrollForCounter();

  // 4. Registration Form Submission Handler with Modal Feedback
  $('#career-registration-form').on('submit', function (e) {
    e.preventDefault();

    var fullName = $('#form-name').val().trim();
    var phone = $('#form-phone').val().trim();
    var email = $('#form-email').val().trim();
    var city = $('#form-city').val();
    var target = $('#form-target').val();

    if (!fullName || !phone || !email || !city || !target) {
      alert('Vui lòng điền đầy đủ các thông tin cần thiết để CodeGym gửi tài liệu lộ trình chính xác nhất.');
      return;
    }

    // Set recipient name in modal
    $('#success-modal-name').text(fullName);
    $('#success-modal-phone').text(phone);

    // Show Material Success Modal
    $('#modalSuccess').modal('show');

    // Reset Form fields
    this.reset();
  });
});
