document.addEventListener("DOMContentLoaded", () => {
    const gradientCircle = document.getElementById("gradientCircle");
  
    if (!gradientCircle) {
      console.error("Element gradientCircle tidak ditemukan!");
      return;
    }
  
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
  
      gradientCircle.style.transform = `translate(${mouseX - 200}px, ${
        mouseY - 200
      }px)`;
    });
  
    // Set posisi awal di tengah layar
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    gradientCircle.style.transform = `translate(${centerX - 200}px, ${
      centerY - 200
    }px)`;
  });
  
  // Mobile Menu Toggle
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  
  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
  
        // Close mobile menu if open
        if (!mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
        }
      }
    });
  });
  
  // Active section highlighting
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");
  
  window.addEventListener("scroll", () => {
    let current = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
  
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });
  
    navLinks.forEach((link) => {
      link.classList.remove("text-red-500");
      link.classList.add("text-gray-600");
  
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.remove("text-gray-600");
        link.classList.add("text-red-500");
      }
    });
  });
  
  // Skill Bar Animation
  document.addEventListener("DOMContentLoaded", function () {
    function isPartiallyInViewport(element) {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
  
      return rect.top < windowHeight && rect.top + 100 > 0;
    }
  
    const skillBars = document.querySelectorAll(".bg-red-500");
    const skillsSection = document.querySelector("#skills");
  
    const targetWidths = [];
  
    skillBars.forEach((bar) => {
      targetWidths.push(bar.style.width);
      bar.style.width = "0%";
      bar.style.transition = "width 1.2s ease-out";
    });
  
    let animated = false;
  
    function animateSkillBars() {
      if (isPartiallyInViewport(skillsSection) && !animated) {
        skillBars.forEach((bar, index) => {
          setTimeout(() => {
            bar.style.width = targetWidths[index];
          }, index * 150);
        });
        animated = true;
      }
    }
  
    window.addEventListener("scroll", animateSkillBars);
    animateSkillBars();
    const translations = {
      en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_contact: "Contact",
        home_greeting: "Hello",
        home_welcome: "Welcome!",
        home_tagline: "Where ideas take shape, and creativity knows no limits.",
        home_see_projects: "See Projects",
        home_download_cv: "Download CV",
        about_title: "About Me",
        about_japanese: "About Me in Japanese",
        about_paragraph1: "I am a frontend and backend developer (full-stack developer), writer, and character designer. I focus on developing functional, efficient, and user-friendly web applications while also creating high-quality character designs and creative content.",
        about_paragraph2: "With years of experience in the creative industry, I have developed a unique style and worked with various clients and projects, both in teams and individually.",
        about_skill1_title: "Illustration",
        about_skill1_desc: "Character Design",
        about_skill2_title: "UI/UX Design",
        about_skill2_desc: "Website & Application Design",
        about_skill3_title: "Development",
        about_skill3_desc: "Frontend & Backend",
        about_skill4_title: "Storyboard",
        about_skill4_desc: "Storyboard Design",
        projects_japanese: "Projects in Japanese",
        projects_title: "Projects",
        projects_description: "Collection of best projects and works that I have done over the years.",
        project_tag_design_dev: "UI DESIGN & DEVELOPMENT",
        project_tag_ui_design: "UI DESIGN",
        project1_title: "Ichlar Project",
        project1_description: "Design and development of an interactive solar system learning website with immersive 3D visualizations.",
        project2_title: "Wolu Classroom",
        project2_description: "Design and development of a learning management system for schools.",
        project3_title: "Reycom Document Solusi",
        project3_description: "Design and development of an inventory management system for companies.",
        project4_title: "Ganesha Rent",
        project4_description: "Design and development of a learning management system for schools.",
        project5_title: "UI Design",
        project5_description: "Collection of UI designs for various applications and websites.",
        projects_see_more: "See more",
        skills_title: "Skills",
        skills_title_jp: "Skills",
        skills_title_id: "Skills",
        skills_description: "My skills and expertise in the creative industry, from design to development.",
        skills_design_jp: "Design & Illustration",
        skills_design_id: "Design & Illustration",
        skills_dev_jp: "Development",
        skills_dev_id: "Development",
        skills_illustration: "Anime/Manga Illustration",
        skills_character: "Character Design",
        skills_uiux: "UI/UX Design",
        skills_storyboard: "Storyboarding",
        skills_html: "HTML/CSS",
        skills_js: "JavaScript",
        skills_tailwind: "Tailwind CSS",
        skills_laravel: "Laravel",
        skills_tools_title: "Tools & Software",
        contact_cta_title: "Interested in working together?",
        contact_cta_description: "Let's create something amazing together. Contact me for inquiries or collaborations.",
        contact_cta_button: "Contact Me",
        contact_title: "Contact",
      contact_description: "Have a question or want to work together? Feel free to contact me through the following methods.",
      contact_location_title: "Location",
      contact_location: "Semarang, Center Java, Indonesia",
      contact_email_title: "Email",
      contact_email: "ralphaaditya17@gmail.com",
      contact_phone_title: "Phone",
      contact_phone: "+62 819 0476 9603",
      contact_name: "Name",
      contact_email_label: "Email",
      contact_subject: "Subject",
      contact_message: "Message",
      contact_button: "Send Message",
      footer_title: "Portfolio",
            footer_title_jp: "Indonesia",
            footer_description: "Where ideas take shape, and creativity knows no limits.",
            footer_navigation_title: "Navigation",
            footer_home: "Home",
            footer_about: "About",
            footer_project: "Project",
            footer_skills: "Skills",
            footer_contact: "Contact",
            footer_services_title: "Services",
            footer_service_1: "Character Design",
            footer_service_2: "UI/UX Design",
            footer_service_3: "Web Development",
            footer_service_4: "Design",
            footer_rights: "© 2025 Rapipu Portfolio. All rights reserved.",
            footer_instagram: "Instagram",
            footer_github: "Github",
            footer_dribbble: "Dribbble"
      },
      id: {
        nav_home: "Beranda",
        nav_about: "Tentang",
        nav_projects: "Proyek",
        nav_skills: "Keahlian",
        nav_contact: "Kontak",
        home_greeting: "Halo",
        home_welcome: "Selamat Datang!",
        home_tagline: "Tempat ide menjadi nyata, dan kreativitas tanpa batas.",
        home_see_projects: "Lihat Proyek",
        home_download_cv: "Unduh CV",
        about_japanese: "Tentang Saya dalam Bahasa Jepang",
        about_title: "Tentang Saya",
        about_paragraph1: "Saya adalah pengembang frontend dan backend (pengembang full-stack), penulis, dan desainer karakter. Saya fokus pada pengembangan aplikasi web yang fungsional, efisien, dan ramah pengguna sambil juga membuat desain karakter dan konten kreatif berkualitas tinggi.",
        about_paragraph2: "Dengan pengalaman bertahun-tahun di industri kreatif, saya telah mengembangkan gaya unik dan bekerja dengan berbagai klien dan proyek, baik dalam tim maupun secara individu.",
        about_skill1_title: "Ilustrasi",
        about_skill1_desc: "Desain Karakter",
        about_skill2_title: "Desain UI/UX",
        about_skill2_desc: "Desain Website & Aplikasi",
        about_skill3_title: "Pengembangan",
        about_skill3_desc: "Frontend & Backend",
        about_skill4_title: "Storyboard",
        about_skill4_desc: "Desain Storyboard",
        projects_japanese: "Proyek dalam Bahasa Jepang",
        projects_title: "Proyek",
        projects_description: "Kumpulan proyek dan karya terbaik yang telah saya kerjakan selama bertahun-tahun.",
        project_tag_design_dev: "DESAIN UI & PENGEMBANGAN",
        project_tag_ui_design: "DESAIN UI",
        project1_title: "Proyek Ichlar",
        project1_description: "Desain dan pengembangan situs pembelajaran tata surya interaktif dengan visualisasi 3D yang imersif.",
        project2_title: "Kelas Wolu",
        project2_description: "Desain dan pengembangan sistem manajemen pembelajaran untuk sekolah.",
        project3_title: "Reycom Document Solusi",
        project3_description: "Desain dan pengembangan sistem manajemen inventaris untuk perusahaan.",
        project4_title: "Ganesha Rent",
        project4_description: "Desain dan pengembangan sistem manajemen pembelajaran untuk sekolah.",
        project5_title: "Desain UI",
        project5_description: "Kumpulan desain UI untuk berbagai aplikasi dan situs web.",
        projects_see_more: "Lihat lebih banyak",
        skills_title: "Keahlian",
        skills_title_jp: "Keahlian",
        skills_title_id: "Keahlian",
        skills_description: "Keahlian dan pengalaman saya di industri kreatif, dari desain hingga pengembangan.",
        skills_design_jp: "Desain & Ilustrasi",
        skills_design_id: "Desain & Ilustrasi",
        skills_dev_jp: "Pengembangan",
        skills_dev_id: "Pengembangan",
        skills_illustration: "Ilustrasi Anime/Manga",
        skills_character: "Desain Karakter",
        skills_uiux: "Desain UI/UX",
        skills_storyboard: "Storyboard",
        skills_html: "HTML/CSS",
        skills_js: "JavaScript",
        skills_tailwind: "Tailwind CSS",
        skills_laravel: "Laravel",
        skills_tools_title: "Alat & Perangkat Lunak",
        contact_cta_title: "Tertarik bekerja sama?",
        contact_cta_description: "Mari ciptakan sesuatu yang luar biasa bersama. Hubungi saya untuk pertanyaan atau kolaborasi.",
        contact_cta_button: "Hubungi Saya",
        contact_title: "Kontak",
      contact_description: "Ada pertanyaan atau ingin bekerja sama? Silakan hubungi saya melalui metode berikut.",
      contact_location_title: "Lokasi",
      contact_location: "Semarang, Jawa Tengah, Indonesia",
      contact_email_title: "Email",
      contact_email: "ralphaaditya17@gmail.com",
      contact_phone_title: "Telepon",
      contact_phone: "+62 819 0476 9603",
      contact_name: "Nama",
      contact_email_label: "Email",
      contact_subject: "Subjek",
      contact_message: "Pesan",
      contact_button: "Kirim Pesan",
      footer_title: "Portofolio",
            footer_title_jp: "Indonesia",
            footer_description: "Tempat ide menjadi bentuk, dan kreativitas tanpa batas.",
            footer_navigation_title: "Navigasi",
            footer_home: "Beranda",
            footer_about: "Tentang",
            footer_project: "Proyek",
            footer_skills: "Keahlian",
            footer_contact: "Kontak",
            footer_services_title: "Layanan",
            footer_service_1: "Desain Karakter",
            footer_service_2: "Desain UI/UX",
            footer_service_3: "Pengembangan Web",
            footer_service_4: "Desain",
            footer_rights: "© 2025 Portofolio Rapipu. Semua hak dilindungi.",
            footer_instagram: "Instagram",
            footer_github: "Github",
            footer_dribbble: "Dribbble"

      },
      jp: {
        nav_home: "ホーム",
        nav_about: "紹介",
        nav_projects: "プロジェクト",
        nav_skills: "スキル",
        nav_contact: "連絡先",
        home_greeting: "こんにちは",
        home_welcome: "ようこそ！",
        home_tagline: "アイデアが形になり、創造性に限界がない場所です。",
        home_see_projects: "プロジェクトを見る",
        home_download_cv: "履歴書をダウンロード",
        about_title: "自己紹介",
        about_japanese: "日本語での自己紹介",
        about_paragraph1: "私はフロントエンドおよびバックエンド開発（フルスタック）、ライター、そしてキャラクターデザイナーをしています。機能的で効率的、かつユーザーフレンドリーなWebアプリケーションの開発に注力しながら、高品質なキャラクターデザインと創造的なコンテンツも制作しています。",
        about_paragraph2: "クリエイティブ業界での長年の経験を通じて、独自のスタイルを確立し、チームまたは個人で様々なクライアントやプロジェクトに取り組んできました。",
        about_skill1_title: "イラスト",
        about_skill1_desc: "キャラクターデザイン",
        about_skill2_title: "UI/UXデザイン",
        about_skill2_desc: "ウェブサイトとアプリケーションのデザイン",
        about_skill3_title: "開発",
        about_skill3_desc: "フロントエンド＆バックエンド",
        about_skill4_title: "ストーリーボード",
        about_skill4_desc: "ストーリーボード制作",
        projects_japanese: "日本語でのプロジェクト紹介",
        projects_title: "プロジェクト",
        projects_description: "これまでに手がけた最高のプロジェクトや作品のコレクションです。",
        project_tag_design_dev: "UIデザイン＆開発",
        project_tag_ui_design: "UIデザイン",
        project1_title: "イフラールプロジェクト",
        project1_description: "没入型3Dビジュアルを用いた、太陽系を学ぶインタラクティブなウェブサイトのデザインと開発。",
        project2_title: "ウォル・クラスルーム",
        project2_description: "学校向けの学習管理システムのデザインと開発。",
        project3_title: "レイコム・ドキュメント・ソリューション",
        project3_description: "企業向けの在庫管理システムのデザインと開発。",
        project4_title: "ガネーシャ・レント",
        project4_description: "学校向けの学習管理システムのデザインと開発。",
        project5_title: "UIデザイン",
        project5_description: "様々なアプリやウェブサイトのUIデザイン集。",
        projects_see_more: "もっと見る",
        skills_title: "スキル",
        skills_title_jp: "スキル",
        skills_title_id: "スキル",
        skills_description: "デザインから開発まで、クリエイティブ業界におけるスキルと専門知識。",
        skills_design_jp: "デザインとイラスト",
        skills_design_id: "デザインとイラスト",
        skills_dev_jp: "開発",
        skills_dev_id: "開発",
        skills_illustration: "アニメ・マンガのイラスト",
        skills_character: "キャラクターデザイン",
        skills_uiux: "UI/UXデザイン",
        skills_storyboard: "ストーリーボード",
        skills_html: "HTML/CSS",
        skills_js: "JavaScript",
        skills_tailwind: "Tailwind CSS",
        skills_laravel: "Laravel",
        skills_tools_title: "ツールとソフトウェア",
        contact_cta_title: "一緒に働きませんか？",
        contact_cta_description: "一緒に素晴らしいものを作りましょう。お問い合わせやコラボレーションはこちらから。",
        contact_cta_button: "お問い合わせ",
        contact_title: "連絡先",
      contact_description: "質問がある場合や一緒に仕事をしたい場合は、以下の方法でお気軽にお問い合わせください。",
      contact_location_title: "所在地",
      contact_location: "インドネシア、ジョグジャカルタ、セマラン",
      contact_email_title: "メール",
      contact_email: "ralphaaditya17@gmail.com",
      contact_phone_title: "電話",
      contact_phone: "+62 819 0476 9603",
      contact_name: "名前",
      contact_email_label: "メールアドレス",
      contact_subject: "件名",
      contact_message: "メッセージ",
      contact_button: "メッセージを送信",
      footer_title: "ポートフォリオ",
            footer_title_jp: "インドネシア",
            footer_description: "アイデアが形になり、創造性に限界はない。",
            footer_navigation_title: "ナビゲーション",
            footer_home: "ホーム",
            footer_about: "アバウト",
            footer_project: "プロジェクト",
            footer_skills: "スキル",
            footer_contact: "連絡先",
            footer_services_title: "サービス",
            footer_service_1: "キャラクターデザイン",
            footer_service_2: "UI/UXデザイン",
            footer_service_3: "ウェブ開発",
            footer_service_4: "デザイン",
            footer_rights: "© 2025 Rapipuポートフォリオ。すべての権利を保有。",
            footer_instagram: "インスタグラム",
            footer_github: "ギットハブ",
            footer_dribbble: "ドリブル"
      }
    };
    
    const selector = document.getElementById("languageSelector");
    
    selector.addEventListener("change", function () {
      const selectedLang = this.value;
      updateLanguage(selectedLang);
      localStorage.setItem("preferredLang", selectedLang);
    });
    
    function updateLanguage(lang) {
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });
    }
    
    // Load saved language
    document.addEventListener("DOMContentLoaded", function() {
      const savedLang = localStorage.getItem("preferredLang") || "en";
      selector.value = savedLang;
      updateLanguage(savedLang);
    });
    
    // If page is already loaded
    if (document.readyState === "complete" || document.readyState === "interactive") {
      const savedLang = localStorage.getItem("preferredLang") || "en";
      selector.value = savedLang;
      updateLanguage(savedLang);
    }
  });