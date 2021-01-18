import Vue from 'vue';

const themes = ['light', 'dark'];

class LayoutStore {
  winWidth;
  isExtraSmall;
  theme;

  toTheme(value) {
    return value === 'light' ? 'light' : 'dark';
  }

  constructor() {
    if (process.isClient) {
      this.winWidth = window.innerWidth;
      this.isExtraSmall = 640 > window.innerWidth;

      const storedValue = localStorage.getItem('theme');
      if (storedValue !== null) {
        this.theme = this.toTheme(storedValue);
      } else {
        this.theme = 'dark';
      }
      this.setTheme(this.theme);
    }
  }

  get windowWidth() {
    return this.winWidth;
  };

  get isXS() {
    return this.isExtraSmall;
  }

  get currentTheme() {
    return this.theme;
  };

  get actionLabel() {
    let label = '';
    if (this.currentTheme === 'dark') {
      label = 'jasny';
    } else {
      label = 'ciemny';
    }
    return `Ustaw ${label} motyw`;
  };

  get foregroundColor() {
    if (this.theme === 'dark')
      return '#F2F2F2';
    if (this.theme === 'light')
      return '#121212';
  }

  get backgroundColor() {
    if (this.theme === 'dark')
      return '#121212';
    if (this.theme === 'light')
      return '#F2F2F2';
  }

  get backgroundClass() {
    if (this.theme === 'dark')
      return 'bg-gray-dark';
    if (this.theme === 'light')
      return 'bg-gray-light';
  }

  updateWindowWidth() {
    this.winWidth = window.innerWidth > window.outerWidth ? window.outerWidth : window.innerWidth;
    this.isExtraSmall = 640 > this.winWidth;
  }

  setTheme(newTheme) {
    this.theme = this.toTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
    document.documentElement.classList.remove('mode-light');
    document.documentElement.classList.remove('mode-dark');
    document.documentElement.classList.add('mode-' + newTheme);
    localStorage.setItem('theme', newTheme);
  }

  toggleTheme() {
    const currentIndex = themes.indexOf(this.theme)
    const nextIndex = (currentIndex + 1) % themes.length;
    const newTheme = themes[nextIndex];
    this.setTheme(newTheme);
  }
}

export default Vue.observable(new LayoutStore());
