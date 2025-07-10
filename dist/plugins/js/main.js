/*
Author       : AB_Themes
Template Name: Edumate
Version      : 1.0
*/

(function ($) {
	"use strict";

	$(document).ready(function () {
		// Sticky Header & Scroll Effects
		$(window).on("scroll", function () {
			var scroll = $(window).scrollTop();

			if (scroll < 400) {
				$(".ab-sticky-header").removeClass("ab-sticky-active");
			} else {
				$(".ab-sticky-header").addClass("ab-sticky-active");
			}

			if (scroll > 250) {
				$("#header-sticky").addClass("sticky");
			} else {
				$("#header-sticky").removeClass("sticky");
			}
		});

		// Clone main menu and append to hamburger nav
		var abHamburger = $(".ab-mobile-menu-active > ul").clone();
		var abHamburgerMenu = $(".ab-hamburger-menu nav");

		if (abHamburgerMenu.find("ul").length === 0) {
			abHamburgerMenu.append(abHamburger);
		}

		// Add toggle buttons to submenus
		$(".ab-hamburger-menu nav .sub-menu").parent().each(function () {
			if (!$(this).find(".ab-menu-close").length) {
				$(this).append('<button class="ab-menu-close"><i class="fas fa-chevron-right"></i></button>');
			}
		});

		// Toggle submenus
		$(".ab-hamburger-menu").on("click", ".ab-menu-close, .menu-item-children > a", function (e) {
			e.preventDefault();
			var parent = $(this).parent();

			if (!parent.hasClass("active")) {
				parent.addClass("active");
				parent.children(".sub-menu").slideDown();
			} else {
				parent.removeClass("active");
				parent.children(".sub-menu").slideUp();
			}
		});

		// Open hamburger menu
		$(".ab-hamburger-toogle").on("click", function () {
			$(".ab-hamburger").addClass("ab-hamburger-open");
			$(".ab-hamburger-overlay").addClass("ab-hamburger-overlay-open");
			$(this).hide(); // Hide toggle after opening
		});

		// Close hamburger menu
		$(".ab-hamburger-close-toggle, .ab-hamburger-overlay").on("click", function () {
			$(".ab-hamburger").removeClass("ab-hamburger-open");
			$(".ab-hamburger-overlay").removeClass("ab-hamburger-overlay-open");

			if ($(window).width() <= 991) {
				$(".ab-hamburger-toogle").fadeIn(); // Show toggle again on close (only for mobile)
			}
		});

		// Responsive handler
		function toggleMenu() {
			if ($(window).width() <= 991) {
				$(".ab-hamburger-toogle").show();
				$(".ab-main-menu").hide();
			} else {
				$(".ab-hamburger-toogle").hide();
				$(".ab-main-menu").show();
				$(".ab-hamburger").removeClass("ab-hamburger-open");
				$(".ab-hamburger-overlay").removeClass("ab-hamburger-overlay-open");
			}
		}

		toggleMenu();
		$(window).on("resize", toggleMenu);


		// accordion start
		document.querySelectorAll('.accordion-button').forEach(button => {
			button.addEventListener('click', () => {
				const icon = button.querySelector('.toggle-icon');
				const isOpen = !button.classList.contains('collapsed');

				document.querySelectorAll('.toggle-icon').forEach(icon => icon.innerHTML = '<i class="fa-solid fa-plus"></i>');
				if (isOpen) {
					icon.innerHTML = '<i class="fa-solid fa-minus"></i>';
				}
			});
		});
		// accordion end

		// case study
		$('#case_study_carousel').owlCarousel({
			loop: true,
			margin: 25,
			nav: true,
			dots: true,
			navText: ["<i class='ti-arrow-top-left'></i>", "<i class='ti-arrow-top-right'></i>"],
			items: 3,
			responsive: {
				0: { items: 1 },
				480: { items: 1 },
				600: { items: 1 },
				768: { items: 2 },
				992: { items: 3 },
				1200: { items: 3 }
			}
		})

		// start portfolio testimonial
		$(document).ready(function () {
			$('#portfolio_slider').owlCarousel({
				loop: true,
				margin: 25,
				nav: false,
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
				dots: true,
				responsive: {
					0: { items: 1 },
					480: { items: 1 },
					600: { items: 1 },
					768: { items: 2 },
					992: { items: 3 },
					1200: { items: 3 }
				}
			});
		});

		// start service stetimonial
		$(document).ready(function () {
			$('#service_slider').owlCarousel({
				loop: true,
				margin: 25,
				nav: true,
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				navText: ['<i class="fi fi-rr-arrow-up-left"></i>', '<i class="fi fi-rr-arrow-up-right"></i>'],
				dots: false,
				responsive: {
					0: { items: 1 },
					480: { items: 1 },
					600: { items: 1 },
					768: { items: 1 },
					992: { items: 1 },
					1200: { items: 1 }
				}
			});
		});


		// Review testimonial slider
		$('#testimonial_carousel').owlCarousel({
			loop: true,
			margin: 25,
			nav: true,
			navText: ["<i class='ti-arrow-top-left'></i>", "<i class='ti-arrow-top-right'></i>"],
			dots: true,
			items: 2,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 2
				}
			}
		})

		//testimonial slider end




		// progress bar
		const progressBarController = () => {
			const progressContainers = document.querySelectorAll(".tj-progress");

			if (progressContainers?.length) {
				progressContainers.forEach(progressContainer => {
					const targetedProgressBar =
						progressContainer.querySelector(".tj-progress-bar");
					const completedPercent =
						parseInt(targetedProgressBar.getAttribute("data-percent", 10)) || 0;

					console.log("Target progress:", completedPercent + "%"); // Debugging log

					// Trigger animation when the element comes into view
					const observer = new IntersectionObserver(
						entries => {
							entries.forEach(entry => {
								if (entry.isIntersecting) {
									// Animate the progress bar
									targetedProgressBar.style.transition = "width 2s ease-out";
									targetedProgressBar.style.width = `${completedPercent}%`;

									// Animate the percentage text
									const percentageText = progressContainer.querySelector(
										".tj-progress-percent"
									);
									if (percentageText) {
										let currentPercent = 0;

										const interval = setInterval(() => {
											currentPercent++;
											percentageText.textContent = `${currentPercent}%`;

											if (currentPercent >= completedPercent) {
												clearInterval(interval); // Stop the animation
											}
										}, 15); // Adjust the interval for animation speed
									}
								}
							});
						},
						{
							root: null, // Observing the viewport
							threshold: [0.3, 0.9], // Progress triggers based on visibility
						}
					);
					observer.observe(progressContainer);
				});
			}
		};

		// Call the function
		progressBarController();


		// about tabs
		const tabButtons = document.querySelectorAll(".tab_btn");
		const tabPanels = document.querySelectorAll(".tab_panel");

		tabButtons.forEach((btn, index) => {
			btn.addEventListener("click", () => {
				tabButtons.forEach(b => b.classList.remove("active"));
				tabPanels.forEach(p => p.classList.remove("active"));

				btn.classList.add("active");
				document.getElementById(`tab_${index}`).classList.add("active");
			});
		});


		// value tab
		const tabs = document.querySelectorAll(".tab");
		const contents = document.querySelectorAll(".tab-content");

		tabs.forEach(tab => {
			tab.addEventListener("click", () => {
				tabs.forEach(t => t.classList.remove("active"));
				contents.forEach(c => c.classList.remove("active"));

				tab.classList.add("active");
				document.getElementById(`tab-${tab.dataset.tab}`).classList.add("active");
			});
		});


		// video
		if ($(".video-popup").length > 0) {
			new VenoBox({
				selector: ".video-popup",
				numeration: true,
				// infinigall: true,
				spinner: "pulse",
			});
		}




		// about counters
		const counters = document.querySelectorAll('.counter');
		const speed = 100; // Lower = faster

		const animateCounters = () => {
			counters.forEach(counter => {
				const updateCount = () => {
					const target = +counter.getAttribute('data-target');
					const count = +counter.innerText;
					const increment = Math.ceil(target / speed);

					if (count < target) {
						counter.innerText = count + increment;
						setTimeout(updateCount, 15);
					} else {
						counter.innerText = target;
					}
				};
				updateCount();
			});
		};

		// Animate only when visible
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					animateCounters();
					observer.disconnect(); // Run once
				}
			});
		});

		observer.observe(document.querySelector('.counter-section'));
		// about counters







	}); // Closed $(document).ready() properly


	// preloader 
	window.addEventListener('load', () => {
		const preloader = document.getElementById('preloader');
		preloader.classList.add('fade-out');
		setTimeout(() => {
			preloader.style.display = 'none';
		}, 600);
	});

	// preloader 

	// top btn		
	const btn = document.getElementById('toTopBtn');

	window.addEventListener('scroll', () => {
		btn.style.display = window.scrollY > 200 ? 'flex' : 'none';
	});

	btn.addEventListener('click', () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
	// top btn


	// wow amimation
	new WOW().init();
	// wow amimation



	// nice select
	$(document).ready(function () {

		// Ensure the select elements exist before applying niceSelect
		$('#myselect, #myselect2, #services').each(function () {
			if ($(this).length) {
				$(this).niceSelect();
			}
		});

	});
	// nice select

	// marquee
	$(document).ready(function () {
		if ($(".marquee").length) {
			$('.marquee').marquee({
				speed: 100,
				gap: 20,
				delayBeforeStart: 500,
				direction: 'left',
				duplicated: true,
				loop: false, // Changed to not loop
				animation: 'scroll',
				animationEasing: 'linear',
				pauseOnHover: true,
				startVisible: true,
				scrollDirection: 'left',
			});
		}

		if ($(".marquee1").length) {
			$('.marquee1').marquee({
				speed: 100,
				gap: 20,
				delayBeforeStart: 500,
				direction: 'right',
				duplicated: true,
				loop: false, // Changed to not loop
				animation: 'scroll',
				animationEasing: 'linear',
				pauseOnHover: true,
				startVisible: true,
				scrollDirection: 'right',
			});
		}
	});
	// marquee

	// counting section
	$('.counter').each(function () {
		var $this = $(this);
		var target = +$this.data('target');

		$({ countNum: 0 }).animate(
			{ countNum: target },
			{
				duration: 1500,
				easing: 'swing',
				step: function (now) {
					$this.text(Math.ceil(now));
				},
				complete: function () {
					$this.text(target);
				}
			}
		);
	});
	// counting section

	// Skill Progress
	$(window).on('scroll', function () {
		$('.skill-progress .progres').each(function () {
			var elementTop = $(this).offset().top;
			var windowBottom = $(window).scrollTop() + $(window).height();

			if (windowBottom > elementTop && !$(this).hasClass('animated')) {
				var value = $(this).attr('data-value');
				$(this).css('width', value).addClass('animated');
			}
		});
	});
	// Skill Progress

	// Video section 1
	function setupVideoModal(buttonId, modalId, frameId, videoURL) {
		document.addEventListener('DOMContentLoaded', () => {
			const playButton = document.getElementById(buttonId);
			const videoModal = document.getElementById(modalId);
			const closeModal = videoModal.querySelector("#closeModal");
			const videoFrame = document.getElementById(frameId);

			const openVideoModal = () => {
				videoFrame.src = videoURL;
				videoModal.style.display = 'flex';
			};

			const closeVideoModal = () => {
				videoFrame.src = "";
				videoModal.style.display = 'none';
			};

			if (playButton) playButton.addEventListener('click', openVideoModal);
			if (closeModal) closeModal.addEventListener('click', closeVideoModal);

			videoModal.addEventListener('click', (e) => {
				if (e.target === videoModal) closeVideoModal();
			});
		});
	}

	setupVideoModal('playButton', 'videoModal', 'videoFrame', 'https://www.youtube.com/embed/Yl4TOfJhCmQ?autoplay=1');
	// Video section 1


	// Accordion Js
	if ($(".accordion-item").length > 0) {
		$(".accordion-item .faq-title").on("click", function () {
			if ($(this).parent().hasClass("active")) {
				$(this).parent().removeClass("active");
			} else {
				$(this).parent().siblings().removeClass("active");
				$(this).parent().addClass("active");
			}
		});
	}


	// video
	if ($(".video-popup").length > 0) {
		new VenoBox({
			selector: ".video-popup",
			numeration: true,
			// infinigall: true,
			spinner: "pulse",
		});
	}

	// Hero slider Js
	if ($(".hero-thumb").length > 0) {
		var swiper = new Swiper(".hero-thumb", {
			loop: false,
			spaceBetween: 15,
			slidesPerView: 3,
			freeMode: true,
			watchSlidesProgress: true,
		});
	}
	if ($(".hero-slider").length > 0) {
		var hero = new Swiper(".hero-slider", {
			slidesPerView: 1,
			spaceBetween: 0,
			effect: "fade",
			loop: true,
			speed: 1400,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".slider-next",
				prevEl: ".slider-prev",
			},
			thumbs: {
				swiper: swiper,
			},
		});
	}

	// Data js
	$("[data-bg-image]").each(function () {
		var $this = $(this),
			$image = $this.data("bg-image");
		$this.css("background-image", "url(" + $image + ")");
	});









})(jQuery);



document.addEventListener("DOMContentLoaded", function () {
	const sections = document.querySelectorAll("section[id]");
	const navLinks = document.querySelectorAll(".nav-links a");

	function activateNavLink() {
		let scrollY = window.pageYOffset;

		sections.forEach((current) => {
			const sectionHeight = current.offsetHeight;
			const sectionTop = current.offsetTop - 70; // adjust offset for fixed nav
			const sectionId = current.getAttribute("id");

			if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
				navLinks.forEach((link) => {
					link.classList.remove("active");
					if (link.getAttribute("href").includes(sectionId)) {
						link.classList.add("active");
					}
				});
			}
		});
	}

	window.addEventListener("scroll", activateNavLink);
});







const icon = document.querySelector('.date_icon');
const dateInput = document.querySelector('.date-input');

if (icon && dateInput) {
	icon.addEventListener('click', () => {
		dateInput.focus();
		if (dateInput.showPicker) {
			dateInput.showPicker();
		}
	});
}


/* Subscribe form */

  document.getElementById('subs_form').addEventListener('submit', function (e) {
    e.preventDefault(); // Stop form from submitting

    const emailInput = document.getElementById('subscribe_email');
    const responseMsg = document.getElementById('SubmitResponse');
    const email = emailInput.value.trim();

    // Clear previous messages
    responseMsg.textContent = '';
    responseMsg.style.color = '';

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
      responseMsg.textContent = 'Email is required.';
      responseMsg.style.color = 'red';
      emailInput.focus();
      return;
    }

    if (!emailRegex.test(email)) {
      responseMsg.textContent = 'Please enter a valid email address.';
      responseMsg.style.color = 'red';
      emailInput.focus();
      return;
    }

    // If valid
    responseMsg.textContent = 'Thank you for subscribing!';
    responseMsg.style.color = 'green';

    // Optionally clear input
    emailInput.value = '';
	
	// Auto-hide after 3 seconds (3000ms)
	setTimeout(() => {
	  responseMsg.textContent = '';
	}, 3000);
	
  });






