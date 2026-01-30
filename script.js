 // Intersection Observer for Scroll Animations
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate Text
                    gsap.from(".about-anim", {
                        y: 40,
                        opacity: 0,
                        duration: 1.2,
                        stagger: 0.2,
                        ease: "power4.out"
                    });

                    // Animate Tags
                    gsap.from(".about-tag", {
                        scale: 0,
                        opacity: 0,
                        duration: 1,
                        stagger: 0.3,
                        delay: 0.5,
                        ease: "back.out(1.7)"
                    });

                    // Zoom effect on Image
                    gsap.from(".about-img-zoom", {
                        scale: 1.3,
                        duration: 2.5,
                        ease: "power2.out"
                    });

                    aboutObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

aboutObserver.observe(document.querySelector('.about-anim').parentElement);
        
 // Slider Data
        const slides = [
            {
                bgColor: "#e1ffda",
                bgText: "FASHION",
                title: "Clean Lines.<br class='hidden lg:block'> Conscious Living.",
                quote: '"Timeless, wearable, and truly well-made."',
                img: "./flirting-young-sexy-woman.png", // Replace with your image 1
                tag1: "Beige Blazer",
                tag2: "Cotton Trousers",
                desc: "Timeless essentials for the modern minimalist. Designed to simplify your wardrobe — and elevate your everyday.",
                reviews: "4.9 / 450 Reviews"
            },
            {
                // bgColor: "#f5e6d3",
                bgColor: "#fef5ea",
                bgText: "MODERN",
                title: "Effortless Style.<br class='hidden lg:block'> Bold Choices.",
                quote: '"The perfect balance of luxury and comfort."',
                img: "./flirting-young-sexy-woman.png", // Replace with your image 2
                tag1: "Silk Shirt",
                tag2: "Slim Jeans",
                desc: "Elevate your daily look with pieces that speak for themselves. Crafted with precision for the modern soul.",
                reviews: "4.8 / 320 Reviews"
            },
            {
                // bgColor: "#d3e2f5",
                bgColor: "#e8f2ff",
                bgText: "ESSENCE",
                title: "Pure Quality.<br class='hidden lg:block'> Urban Vibes.",
                quote: '"Quality you can feel in every thread."',
                img: "./flirting-young-sexy-woman.png", // Replace with your image 3
                tag1: "Wool Coat",
                tag2: "Black Boots",
                desc: "Discover the new standard of premium apparel. Our winter collection is now live and waiting for you.",
                reviews: "5.0 / 180 Reviews"
            }
        ];

        let currentIndex = 0;
        let isAnimating = false;

        function updateSlide(index) {
            if (isAnimating) return;
            isAnimating = true;

            const slide = slides[index];
            const tl = gsap.timeline({
                onComplete: () => { isAnimating = false; }
            });

            // Fade Out
            tl.to(".hero-text-anim, .model-img, .tag-anim, #bg-text", {
                opacity: 0,
                y: 20,
                duration: 0.5,
                stagger: 0.05,
                ease: "power2.in"
            });

            // Change Content & Background
            tl.add(() => {
                document.getElementById('hero-section').style.background = slide.bgColor;
                document.getElementById('bg-text').innerText = slide.bgText;
                document.getElementById('hero-title').innerHTML = slide.title;
                document.getElementById('hero-quote').innerText = slide.quote;
                document.getElementById('hero-img').src = slide.img;
                document.getElementById('tag-1-text').innerText = slide.tag1;
                document.getElementById('tag-2-text').innerText = slide.tag2;
                document.getElementById('hero-desc').innerText = slide.desc;
                document.getElementById('hero-reviews').innerText = slide.reviews;
            });

            // Fade In
            tl.to("#bg-text", { opacity: 0.4, scale: 1, duration: 1 }, "+=0.1");
            tl.fromTo(".model-img", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }, "-=0.8");
            tl.fromTo(".hero-text-anim", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power4.out" }, "-=1");
            tl.fromTo(".tag-anim", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, stagger: 0.2 }, "-=0.5");
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlide(currentIndex);
        }

        // Initial Animation on Page Load
        window.addEventListener('load', () => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });
            tl.from(".model-img", { y: 100, opacity: 0 }, 0.2)
                .from(".fashion-bg-text", { opacity: 0, scale: 1.1 }, 0.5)
                .from(".hero-text-anim", { y: 30, opacity: 0, stagger: 0.2 }, 0.8)
                .from(".tag-anim", { scale: 0, opacity: 0, stagger: 0.3 }, 1.2);
        });