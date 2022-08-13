window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 590) nav.className = ''; else nav.className = 'scroll';
  };