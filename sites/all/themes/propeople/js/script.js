/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */
// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function($, Drupal, window, document, undefined) {


  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.my_custom_behavior = {
    attach: function(context, settings) {
			$(document).ready(function($) {
				
				if ($('.language-switcher-locale-url li.th').hasClass('active') && $('body').hasClass('page-sitemap')){
					$('h1.box-heading').text('แผนผังเวปไซต์');
					$('ul.site-map-menu a').each(function(i) {
						 attr = $(this).attr('href');
						 if (attr.indexOf('/node/') + 1) {
						 	$(this).parent().hide();
						 }
						 if ($(this).text() == 'Homepage') {
						 	$(this).parent().hide();
						 }
           });
				}

        var country_currency = {
          "SINGAPORE": "SGD",
          "MALAYSIA": "MYR",
          "THAILAND": "THB",
          "VIETNAM": "SGD",
          "PHILIPPINES": "PHP",
          "BRUNEI DARUSSALAM": "BND",
          "CAMBODIA": "SGD",
          "INDONESIA": "IDR",
          "LAO PDR": "SGD",
          "MYANMAR": "SGD"
        };

        $('#country').on('change', function() {
          var country = $(this).val();
          var currency = country_currency[country];
          console.log('country', country, currency);
          $('#currency').val(currency)
        });

        $.validator.addMethod('requiredCheckbox', function(value) {
            return $('.required-checkbox:checked').size() > 0;
          },
          'Please tick this box to accept our privacy conditions.'
        );

        $.validator.addMethod('notNumber', function(value, element, param) {
            var reg = /[A-Za-z'"!@#$%^&*()_=;:?]+/;
            return !reg.test(value);
          },
          "Please enter a valid phone number (ex. 02-555-555-555)"
        );


				if ($("#salesforceForm .form-input-whichbestdescribesyou").length>0) {

					$("#salesforceForm").validate({
						rules: {
							"salutation": { // Labelled 'title'
								required: true
							},
							"first_name": {
								required: true
							},
							"last_name": {
								required: true
							},
							"email": {
								required: true,
								email: true
							},
							"phone": {
								required: true,
								notNumber: true
							},
							"state": {
								required: true
							},
							"zip": {
								required: true
							},
							"country": {
								required: true
							},
							"00N1000000616l4": { // Labelled 'About you'
								required: true
							},
							"00N10000004dEYJ": { // Labelled 'Diabetes Type'
								required: true
							},
							"00N10000004fouK": { // Labelled 'How did you hear about us?'
								required: true
							},
							"terms_accepted": {
								requiredCheckbox: true
							},
							"description": {
								required: true
							}
						},
						messages: {
							"salutation": "Please select a title",
							"first_name": "Your first name is required.",
							"last_name": "Your last name is required.",
							"country": "Your country is required.",
							"email": {
								required: "Your e-mail is required.",
								email: "A valid e-mail is required."
							},
							"phone": "Please enter a valid phone number.",
							"state": "Your state / province is required.",
							"zip": "Your postcode / zip is required.",
							"00N10000004dEYJ": "Please select your diabetes type.",
							"00N10000004fouK": "Please select an option that indicates how you heard about us.",
							"description": "Please select an option that best describes you.",
							"00N1000000616l4": "This field is required.",
						},
						errorPlacement: function(error, element) {
							if (element.attr("name") == "terms_accepted") {
								error.appendTo("#termsError");
							} else {
								error.insertAfter(element);
							}
						},
						submitHandler: function(form) {
							form.submit();
						}
					});
				} else {
          
          $("#edit-submitted-your-file-upload").after('<label id="file_attach_error">Please attach your image or video.</label>');
          $("#file_attach_error").hide();

          $.validator.addMethod('requiredfile', function(value, element, param) {
            console.log("'"+value+"'");
            if(value != '') {
              $("#file_attach_error").css("display","none");
              onsole.log("hide");
              return true;
            } 

            $("#file_attach_error").css("display","block");
            console.log("show");
            return false;
          },
          "Please attach your file"
          );
					
					$("#webform-client-form-44").validate({
						rules: {
							"submitted[title]": { // Labelled 'title'
								required: true
							},
							"submitted[first_name]": {
								required: true
							},
							"submitted[last_name]": {
								required: true
							},
							"submitted[email]": {
								required: true,
								email: true
							},
							"submitted[phone]": {
								required: true,
								notNumber: true
							},
							"submitted[state___province]": {
								required: true
							},
							"submitted[country]": {
								required: true
							},
							"submitted[story]": { 
								required: true
							},
							"submitted[diabetes_type]": { 
								required: true
							},
              "files[submitted_your_file]": { 
                requiredfile: true
              },
						},
						messages: {
							"submitted[title]": "Please select a title",
							"submitted[first_name]": "Your first name is required.",
							"submitted[last_name]": "Your last name is required.",
							"submitted[country]": "Your country is required.",
							"submitted[email]": {
								required: "Your e-mail is required.",
								email: "A valid e-mail is required."
							},
							"submitted[phone]": "Please enter a valid phone number.",
							"submitted[state___province]": "Your state / province is required.",
							"submitted[diabetes_type]": "Please select your diabetes type.",
							"description": "Please select an option that best describes you.",
              "submitted[story]": "Please enter your story.",
              "files[submitted_your_file]":"Please attach your image or video"
						},
						errorPlacement: function(error, element) {
							if (element.attr("name") == "terms_accepted") {
								error.appendTo("#termsError");
							} else {
								error.insertAfter(element);
							}
						},
						submitHandler: function(form) {
							/*console.log($(form).serialize());
							$.ajax({
								type: "POST",
								url: "/get_form_with_file",
								data: ($(form).serialize()),
								success: function(data){console.log(data);}
							});*/
							form.submit();
						}
					});

				}


        $(".select-custom").select2({
          minimumResultsForSearch: -1,
          dropdownCssClass: 'medtronics-dropdown'
        }).on("change", function(e) {
          //window.location.href = e.val;
        });

        $(".form-input-title select").select2({
          minimumResultsForSearch: -1,
          dropdownCssClass: 'medtronics-dropdown',
          placeholder: "Title"
        });

        $(".form-input-state select").select2({
          minimumResultsForSearch: -1,
          dropdownCssClass: 'medtronics-dropdown',
          placeholder: "State/Territory"
        });

        $(".form-input-emailoptin select").select2({
          minimumResultsForSearch: -1,
          dropdownCssClass: 'medtronics-dropdown',
          placeholder: "Email Opt In"
        });

        $(".form-input-phoneoptin select").select2({
          minimumResultsForSearch: -1,
          dropdownCssClass: 'medtronics-dropdown',
          placeholder: "Phone Opt In"
        });

        $(".form-input-diabetestype select").select2({
          minimumResultsForSearch: -1,
          dropdownCssClass: 'medtronics-dropdown',
          placeholder: "Diabetes Type"
        });

        $(".form-input-howdidyouhear select").select2({
          minimumResultsForSearch: -1,
          dropdownCssClass: 'medtronics-dropdown',
          placeholder: "Choose an option"
        });

        $(".form-input-aboutyou select").select2({
          minimumResultsForSearch: -1,
          dropdownCssClass: 'medtronics-dropdown',
          placeholder: "Which best describes you?"
        });

        $(".form-input-howwouldyoulikecontact select").select2({
          minimumResultsForSearch: -1,
          dropdownCssClass: 'medtronics-dropdown',
          placeholder: "How would you like us to contact you?"
        });

        $(".form-input-whichbestdescribesyou select").select2({
          minimumResultsForSearch: -1,
          dropdownCssClass: 'medtronics-dropdown',
          placeholder: "Which best describes you?"
        });

        $(".form-input-country select").select2({
          minimumResultsForSearch: -1,
          dropdownCssClass: 'medtronics-dropdown',
          placeholder: "Country"
        });

        themeColour = $('.fixed-content-container').css('backgroundColor');

        $('.form-custom-select .select2-arrow').css({
          borderLeft: '1px solid ' + themeColour
        });

        $('.form-custom-select .select2-arrow b').css({
          borderColor: themeColour + ' transparent transparent transparent'
        });

        $(".form-custom-select input").prop("readonly", true);
      });

      var medtronic = (function($) {
        // Private variables here
        var windowWidth,
          windowHeight,
          containerWidth,
          containerHeight,
          totalDocHeight,
          headHeight,
          sideHeight,
          footHeight,
          allowScrollMenu = true;

        // Public variables here
        return {
          init: function() {
            this.initRequestCallNav();
            this.trackWindowSize();
            this.pluginsInit();
            this.socialButtonsInit();
            //this.fixedSidebarInit(); // Moved to inside the evenBlockHeights function so it runs once the blockheights have been messed with
            //this.evenBlockHeights();
            $('img').imagesLoaded(function() {
              medtronic.evenBlockHeights();
              medtronic.trackWindowSize();
            });
            //setTimeout(this.evenBlockHeights, 1000); // Bit of a delay to ensure it runs successfully once area has rendered.
            setTimeout(this.initMobileNav, 2000);
            this.initSmoothScroll();
          },
          pluginsInit: function() {
            $(".form-input-numberofservings select").select2({
              minimumResultsForSearch: -1,
              dropdownCssClass: 'medtronics-dropdown',
              placeholder: "Please choose number of servings"
            });

            /* --------------------------------------------
             *
             *  Sliders
             *
             * -------------------------------------------- */
            $(".royalSlider").royalSlider({
              keyboardNavEnabled: true,
              //autoScaleSliderHeight: 300,
              autoHeight: true,
              slidesSpacing: 0,
              loop: true
            });

            this.evenBlockHeights();
          },
          socialButtonsInit: function() {
            $('.social-btn').on('click', function() {
              var shareURL = $(this).attr('data-share-url'),
                title = $(this).attr('data-share-title');

              if ($(this).hasClass('social-btn-facebook')) {
                FB.ui({
                    method: 'feed',
                    link: shareURL,
                    caption: title
                  },
                  function(response) {}
                );

              } else if ($(this).hasClass('social-btn-twitter')) {
                var twitterShareURL = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(shareURL) + '&via=DiabetesANZ',
                  intentRegex = /twitter\.com(\:\d{2,4})?\/intent\/(\w+)/,
                  windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes',
                  width = 550,
                  height = 420,
                  winHeight = screen.height,
                  winWidth = screen.width,
                  left = Math.round((winWidth / 2) - (width / 2)),
                  top = 0;

                if (winHeight > height) {
                  top = Math.round((winHeight / 2) - (height / 2));
                }

                window.open(
                  twitterShareURL,
                  'intent',
                  windowOptions + ',width=' + width + ',height=' + height + ',left=' + left + ',top=' + top
                );

              } else if ($(this).hasClass('social-btn-gplus')) {
                url = encodeURIComponent(shareURL);
                window.open(
                  'https://plus.google.com/share?url=' + url,
                  '',
                  'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'
                );
              }

            });
          },
          fixedSidebarInit: function() {
            var $sidebar = $("#fixed-sidebar"),
              $superRays = $("#super-rays"),
              $window = $(window),
              offset = $sidebar.offset();

            if ($sidebar.offset()) {
              $window.scroll(function() {
                if (allowScrollMenu === true && windowWidth >= 960) {
                  var distanceFromFooter = totalDocHeight - $window.scrollTop() - footHeight - (sideHeight * 1.25) - 100;
                  var raysOffset = -155;

                  // If we're scrolling past the top of the element, animate it down.
                  if ($window.scrollTop() > offset.top && distanceFromFooter > 0) {
                    $sidebar.stop().animate({
                      marginTop: $window.scrollTop() - headHeight
                    });

                    $superRays.stop().animate({
                      top: $window.scrollTop() - headHeight + raysOffset
                    });

                  } else if ($window.scrollTop() > offset.top && distanceFromFooter <= 0) {
                    // Do nothing as we want it to stay where it last was.

                  } else {
                    $sidebar.stop().animate({
                      marginTop: 0
                    });

                    $superRays.stop().animate({
                      top: 0 + raysOffset
                    });
		
                  }
                }
              });
            }

            $sidebar.find('input').on('focus', function() {
              allowScrollMenu = false;
            });
          },
          evenBlockHeights: function() {
            medtronic.evenBlockHeight($('.benefit'));
          },
          evenBlockHeight: function($block) {
            var currentTallest = 0,
              currentRowStart = 0,
              rowDivs = new Array(),
              $el,
              topPosition = 0;

            $block.css({
              height: 'auto'
            });
            $block.each(function() {
              $el = $(this);
              topPosition = $el.position().top;

              if (currentRowStart != topPosition) {
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                  rowDivs[currentDiv].height(currentTallest);
                }

                rowDivs.length = 0; // empty the array
                currentRowStart = topPosition;
                currentTallest = $el.height();
                rowDivs.push($el);

              } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
              }

              for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
              }
            });

            medtronic.trackWindowSize(); // Recheck heights of everything
            this.initMobileNav(); // Readjust mobile nav if height has changed.
            this.fixedSidebarInit(); // Readjust sidebar too.
          },
          // Smooth scroll - http://css-tricks.com/snippets/jquery/smooth-scrolling/
          initSmoothScroll: function() {
            if (location.hash.replace('#', '') == 'request-a-call') {
              scrollToIt('request-a-call');
            }

            $('a[href*=#]:not([href=#])').click(function() {
              if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                medtronic.toggleMobileNav(false); // Close any open nav
                scrollToIt(this.hash);
                return false;
              }
            });

            function scrollToIt(hash, callback) {
							
              var target = $(hash);
              target = target.length ? target : $('[name=' + hash.slice(1) + ']');

              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  $('#first_name').focus();
                });

                return false;
              }
            }
          },
          initRequestCallNav: function() {
            if ($('#salesforceForm').length > 0) {
              $('.menu-item-request-a-call a').attr('href', '#request-a-call');
              $('.slider-container .slide .cta-button[href*="request-a-call"]').attr('href', '#request-a-call');
            }
          },
          initMobileNav: function() {
            if ($('#mobile-nav-overlay').length == 0) {
              $('body').append('<div id="mobile-nav-overlay" class="mobile-nav-overlay"></div>');

              $('.site-header .mobile-burger-button').on('click', function() {
                medtronic.toggleMobileNav();
              });

              /*$('.site-header .menu-item-request-a-call').clone().appendTo('.secondary-tablet-menu');*/
            }

            $('#mobile-nav-overlay')
              .height(documentHeight)
              .css({
                'opacity': 0.4
              });
          },
          toggleMobileNav: function(toggleDesired) {
            if (toggleDesired === undefined) {
              $('.site-header .site-menu').toggleClass('active');
              $('.site-header .mobile-burger-button').toggleClass('active');
              $('#mobile-nav-overlay').toggleClass('active');
            } else if (toggleDesired) {
              $('.site-header .site-menu').removeClass('active').addClass('active');
              $('.site-header .mobile-burger-button').removeClass('active').addClass('active');
              $('#mobile-nav-overlay').removeClass('active').addClass('active');
            } else if (!toggleDesired) {
              $('.site-header .site-menu').removeClass('active');
              $('.site-header .mobile-burger-button').removeClass('active');
              $('#mobile-nav-overlay').removeClass('active');
            }
          },
          trackWindowSize: function() {
            var w = window,
              d = document,
              e = d.documentElement,
              g = d.getElementsByTagName('body')[0],
              x = w.innerWidth || e.clientWidth || g.clientWidth,
              y = w.innerHeight || e.clientHeight || g.clientHeight;
            windowWidth = x;
            windowHeight = y;
            documentWidth = $('#siteContainer').width();
            documentHeight = $('#siteContainer').height(),
              totalDocHeight = $('#siteContainer').outerHeight() + $('footer').outerHeight(),
              headHeight = $('.site-header').outerHeight(),
              sideHeight = $('#fixed-sidebar').outerHeight(),
              footHeight = $('footer').outerHeight();
          },
          isMobile: function() {
            return windowWidth < 480;
          },
          getInternetExplorerVersion: function() {
            var rv = -1; // Return value assumes failure.

            if (navigator.appName == 'Microsoft Internet Explorer') {
              var ua = navigator.userAgent;
              var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");

              if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
            }

            return rv;
          }
        }
      })(jQuery);

      jQuery(document).ready(function() {
				
        medtronic.init();
				$("#fixed-sidebar").stop().animate({
					marginTop: 0
				});
				
				
      });

      $(window).resize(function() {
        medtronic.trackWindowSize();
      });

      $(window).on('debouncedresize', function(event) {
        medtronic.evenBlockHeights();
        medtronic.fixedSidebarInit();
      });

      $('#webform-client-form-44').submit(function() {
        $('#loading').show();
        $(this).ajaxSubmit({
            success: function() {
                $('#loading').hide(); 
            }
        });
      });
			
    }
  };



})(jQuery, Drupal, this, this.document);