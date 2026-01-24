
        // Navbar Shadow
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-md', 'bg-opacity-95', 'backdrop-blur-sm');
            } else {
                navbar.classList.remove('shadow-md', 'bg-opacity-95', 'backdrop-blur-sm');
            }
        });

        // Mobile Menu
        const mobileMenu = document.getElementById('mobile-menu');
        function toggleMobileMenu() {
            mobileMenu.classList.toggle('hidden');
        }

        // Emergency Modal (UI Only)
        const modal = document.getElementById('emergency-modal');
        function openEmergencyModal() {
            modal.classList.remove('hidden');
        }
        function closeEmergencyModal() {
            modal.classList.add('hidden');
        }

        // Track Form Toggle
        function toggleTrackForm() {
            const form = document.getElementById('track-form');
            const btn = document.getElementById('track-toggle-btn');
            if (form.classList.contains('hidden')) {
                form.classList.remove('hidden');
                btn.style.display = 'none';
                setTimeout(() => { form.classList.remove('opacity-0'); }, 10);
            }
        }

        // Stats Animation
        const counters = document.querySelectorAll('.counter');
        let hasCounted = false;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasCounted) {
                    counters.forEach(counter => {
                        const target = +counter.getAttribute('data-target');
                        const increment = target / 100;
                        let current = 0;
                        const updateCounter = () => {
                            current += increment;
                            if (current < target) {
                                counter.innerText = Math.ceil(current).toLocaleString();
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.innerText = target.toLocaleString();
                            }
                        };
                        updateCounter();
                    });
                    hasCounted = true;
                }
            });
        }, { threshold: 0.5 });
        observer.observe(document.getElementById('stats-section'));
          tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            blue: '#1E40AF', // Deep Blue
                            light: '#2563EB', // Brighter Blue
                            dark: '#1E293B', // Dark Slate
                            accent: '#FB923C', // Saffron
                        },
                        emergency: '#DC2626', // Red
                        success: '#16A34A', // Green
                    },
                    animation: {
                        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                    }
                }
            }
        }