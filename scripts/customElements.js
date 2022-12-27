class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="pattern-div"></div>
            <a id="logo-ref" href="index.html"><img id="logo"  X-UA-Compatible src="../assets/olympic_rings.svg" alt="Логотип"></a>
            <nav>
                <a href="types.html">Виды</a>
                <a href="news.html">Следующие игры</a>
                <a href="about.html">О нас</a>
            </nav>
            <div id="more-menu-button" onclick="displayMenu()"></div>
            
        </header>
        <div id="small-menu" onclick="hideMenu()">
                <div>X</div>
                <a href="types.html">Виды</a>
                <a href="news.html">Следующие игры</a>
                <a href="about.html">О нас</a>
        </div>
        `
    }
}

customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
        <footer>
        <div class="pattern-div"></div>
        <a id="logo-ref" href="index.html"><img id="footer-logo" src="../assets/olympic_rings.svg" alt="Логотип"></a>
        <a href="#logo-ref" style="position: absolute; height:50px;width:50px; color: white; right: 0; margin:auto;">↑</a>
        </footer>
        `
    }
}

customElements.define('my-footer', MyFooter);

