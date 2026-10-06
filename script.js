// ============================================================
// MovieAdda - Interactive Functionality & Social Viral Engine
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other FAQs
      faqItems.forEach(i => i.classList.remove('active'));
      
      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 2. Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.background = 'rgba(7, 7, 11, 0.95)';
      navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.12)';
    } else {
      navbar.style.background = 'rgba(7, 7, 11, 0.85)';
      navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
    }
  });

  // 3. Download Trigger Feedback
  const downloadButtons = document.querySelectorAll('a[download]');
  downloadButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      showDownloadToast();
    });
  });
});

// Viral WhatsApp Share Function
function shareOnWhatsApp() {
  const currentUrl = window.location.href.split('#')[0];
  const shareText = encodeURIComponent(
    `🔥 *Bhai yeh check kar! Best Free Movie App:* \n\n` +
    `🍿 *MovieAdda v1.0 (Official APK)*\n` +
    `✅ Bollywood, Hollywood Hindi Dubbed & South Movies\n` +
    `✅ Latest OTT Web Series & Live 4K Streams\n` +
    `✅ Zero Ads, 100% Free & Fast 1080p Downloads!\n\n` +
    `📲 *Yahan se Download karo:* \n${currentUrl}`
  );
  
  const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}`;
  window.open(whatsappUrl, '_blank');
}

// Download Toast Notification
function showDownloadToast() {
  let toast = document.getElementById('downloadToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'downloadToast';
    toast.style.position = 'fixed';
    toast.style.bottom = '24px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%) translateY(100px)';
    toast.style.background = 'linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)';
    toast.style.color = '#FFFFFF';
    toast.style.padding = '14px 24px';
    toast.style.borderRadius = '12px';
    toast.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 230, 118, 0.4)';
    toast.style.border = '1px solid rgba(0, 230, 118, 0.5)';
    toast.style.zIndex = '9999';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.gap = '12px';
    toast.style.fontSize = '0.95rem';
    toast.style.fontWeight = '600';
    toast.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    toast.innerHTML = `
      <span style="font-size: 1.4rem;">🚀</span>
      <span>Starting MovieAdda APK download... Check notifications!</span>
    `;
    document.body.appendChild(toast);
  }

  // Animate in
  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(0)';
  }, 50);

  // Animate out after 4 seconds
  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(100px)';
  }, 4000);
}
