
  
  // =========================================================
  // COUNTER
  // =========================================================

        if(window.gsap&&window.ScrollTrigger)gsap.registerPlugin(ScrollTrigger);
document.querySelectorAll("[data-counter]").forEach(counter => {

    const endValue = Number(counter.getAttribute("data-count")) || 0;
    const decimals = Number(counter.getAttribute("data-decimals")) || 0;
    const suffix = counter.getAttribute("data-suffix") || "";
    const duration = Number(counter.getAttribute("data-duration")) || 2;

    const obj = {
      value: 0
    };

    gsap.to(obj, {
      value: endValue,
      duration,
      ease: "power1.out",
      scrollTrigger: {
        trigger: counter,
        start: "top 85%",
        once: true
      },
      onUpdate() {
        counter.textContent =
          obj.value.toFixed(decimals) + suffix;
      }
    });

  });

