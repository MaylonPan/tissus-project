import { gsap } from "gsap";

gsap.from("h3", {
    y: 100, // เลื่อนจาก 100px ด้านล่าง
    opacity: 0, // เริ่มจาก opacity 0
    duration: 1, // ใช้เวลา 1 วินาที
    delay: 0.5, // หน่วงเวลา 0.5 วินาที
    ease: "power2.out" // ชนิดของ easing
});