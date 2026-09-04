const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;
const terminalForm = document.getElementById('terminalForm');
const terminalInput = document.getElementById('terminalInput');
const terminalBody = document.getElementById('terminalBody');

const parallaxLayers = document.querySelectorAll('.parallax-layer');

const websiteInfo = {
  name: 'Luv Kumar',
  title: 'Frontend Developer & Computer Science Student',
  location: 'Jaipur, Rajasthan',
  email: 'krishshukla10000@gmail.com',
  phone: '9122886287',
  skills: ['HTML', 'CSS', 'JavaScript', 'C', 'Python', 'Responsive Design', 'Git & GitHub', 'Data Structures'],
  projects: ['Personal Portfolio Website', 'C Programming Practice'],
  certifications: ['Cisco Cybersecurity', 'Build AI Apps with Python'],
  about: 'Computer Science student at Jagannath University, graduating 2027, focused on frontend development and interactive web experiences.'
};

const terminalCommands = {
  help: 'Available commands: help, about, projects, skills, certifications, contact, whoami, experience, theme, ls, clear',
  whoami: 'Luv Kumar',
  about: websiteInfo.about,
  projects: '1. Personal Portfolio Website\n2. C Programming Practice',
  skills: websiteInfo.skills.join(' · '),
  certifications: websiteInfo.certifications.join(' · '),
  contact: `Email: ${websiteInfo.email}\nPhone: ${websiteInfo.phone}\nLocation: ${websiteInfo.location}`,
  experience: 'Frontend Developer portfolio with responsive UI, 3D background effects, and web projects built using HTML, CSS, JavaScript, and C.',
  theme: 'Use the moon button in the top-right to toggle light/dark mode.',
  ls: 'portfolio/  projects/  certifications/  resume.html  contact.txt',
  cd: 'This portfolio website is currently in the root directory.'
};

const addTerminalOutput = (message, type = 'normal') => {
  const row = document.createElement('div');
  row.className = type === 'command' ? 'terminal-row' : 'terminal-output';

  if (type === 'command') {
    const prompt = document.createElement('span');
    prompt.className = 'prompt';
    prompt.textContent = 'luv@portfolio:~$';

    const commandText = document.createElement('span');
    commandText.textContent = message;

    row.appendChild(prompt);
    row.appendChild(commandText);
  } else {
    row.textContent = message;
  }

  terminalBody.appendChild(row);
  terminalBody.scrollTop = terminalBody.scrollHeight;
};

const handleTerminalCommand = (rawCommand) => {
  const command = rawCommand.trim();
  if (!command) return;

  addTerminalOutput(command, 'command');

  if (command === 'clear') {
    terminalBody.innerHTML = '';
    return;
  }

  const normalized = command.toLowerCase();
  const response = terminalCommands[normalized] || `Command not found: ${command}. Try: help`;
  addTerminalOutput(response);
};

const updateBackgroundParallax = () => {
  const scrollY = window.scrollY;

  parallaxLayers.forEach((layer, index) => {
    const speed = (index + 1) * 0.14;
    const x = scrollY * speed * 0.45;
    const y = scrollY * speed * 0.75;
    layer.style.setProperty('--tx', `${x}px`);
    layer.style.setProperty('--ty', `${y}px`);
  });
};

window.addEventListener('scroll', () => {
  window.requestAnimationFrame(updateBackgroundParallax);
}, { passive: true });

window.addEventListener('load', updateBackgroundParallax);

navToggle?.addEventListener('click', () => {
  siteNav?.classList.toggle('open');
});

const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const savedTheme = localStorage.getItem('portfolio-theme');
const theme = savedTheme || preferredTheme;

if (theme === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = '☀️';
}

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
});

terminalForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!terminalInput) return;

  handleTerminalCommand(terminalInput.value);
  terminalInput.value = '';
  terminalInput.focus();
});

// Contact form handler
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    const mailtoLink = `mailto:krishshukla10000@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    
    window.location.href = mailtoLink;
    contactForm.reset();
    alert('Opening your email client to send the message...');
  });
}

