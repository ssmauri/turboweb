
class SpecialHeader extends HTMLElement {
    async connectedCallback() {
      const htmlFile = 'customPages/header.html'; // Replace with the actual path to your HTML file
      try {
        const response = await fetch(htmlFile);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const content = await response.text();
        this.innerHTML = content;
      } catch (error) {
        console.error('Failed to load the HTML file:', error);
        this.innerHTML = '<p>Error loading content</p>';
      }
    }
  }


class SpecialNav extends HTMLElement {
    async connectedCallback() {
      const htmlFile = 'customPages/nav.html'; // Replace with the actual path to your HTML file
      try {
        const response = await fetch(htmlFile);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const content = await response.text();
        this.innerHTML = content;
      } catch (error) {
        console.error('Failed to load the HTML file:', error);
        this.innerHTML = '<p>Error loading content</p>';
      }
    }
  }

  class SpecialFooter extends HTMLElement {
    async connectedCallback() {
      const htmlFile = 'customPages/footer.html'; // Replace with the actual path to your HTML file
      try {
        const response = await fetch(htmlFile);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const content = await response.text();
        this.innerHTML = content;
      } catch (error) {
        console.error('Failed to load the HTML file:', error);
        this.innerHTML = '<p>Error loading content</p>';
      }
    }
  }

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
customElements.define('special-nav', SpecialNav);


window.onload = function(){
  const navBtn = document.querySelector(".nav-btn");

    if (navBtn) {
        navBtn.addEventListener("click", () => {
            contMenu.classList.toggle("contenedor-menu_visible");
            });

    }
};






// const navBtn = document.querySelector(".nav-btn");
// const contMenu = document.querySelector(".contenedor-menu" );

// navBtn.addEventListener("click", () => {
// contMenu.classList.toggle("contenedor-menu_visible");
// });
